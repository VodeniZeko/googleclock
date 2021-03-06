import React,{useState} from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Popover,
  TextField,
  Box,
Typography,
Button,
} from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { makeStyles } from "@material-ui/core/styles";
/////////////////////////////////////////////////////////////////////

const customStyle = makeStyles ({
  root: {
    width: "330px",
  },
  title: {
    fontSize: 14,
    fontWeight:"bolder",
    padding:"1em"
  },
  box: {
    display: "flex",
    justifyContent: "center",
    alignContent: "space-between",
    textAlign: "center",
    textAlignLast:"center",
    
  },
  input:{
    background:"#e2e2e2",
    color:"#026A95",
  },
  digits: {
    width: "26%",
    margin: ".8em",
  },
  secondTitle: {
    fontSize: 13,
    marginTop: ".5em",
    marginRight: "2.5em",
  },
  smallDigits: {
    alignSelf: "center",
    height: "90px",
  },
  on: {
    backgroundColor: "#CDE1EA",
    color:"#026A95",
    height:"30px"
  },
  off:{
    height:"28px"
  },
  span: {
    color:"#026A95",
    fontWeight:"bold",
    
    },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  textField: {
    width: "25ch",
    height: "9ch",
    borderColor: '#026A95',
  },
  time: {
    margin: ".5em",
  },
});

interface ParentCompProps {
  childComp?: React.ReactNode;
}

interface ChildCompProps {
  hours: string;
  minutes:string;
  ampm:string;
  handleChange: (action: string) => any;
  drop: () => any;
  keep: () => any;
}

const ChildComp: React.FC<ChildCompProps> = (props) => {
const {  hours,
  minutes,
  ampm,
  handleChange,
  drop,
  keep,} = props
  const classes = customStyle();
  return(
    <Card>
    <CardContent className={classes.root}>
      <Typography className={classes.title} gutterBottom>
        Enter Time
      </Typography>
      <Box className={classes.box}>
        <Box className={classes.digits}>
          <TextField
            type="number"
            name="hours"
            InputProps={{ inputProps: { min: 0, max: 23 },className: classes.input }}
            variant="outlined"
            // multiline={true} 
            onChange={handleChange("hours")} 
              value={hours}
         
          />
  
          <Typography
            className={classes.secondTitle}
            gutterBottom
          >
            Hour
          </Typography>
        </Box>
        <Box className={classes.smallDigits}>
          <Typography variant="h3">:</Typography>
        </Box>
        <Box className={classes.digits}>
          <TextField
        
            InputProps={{ 
              inputProps: { min: 0, max: 59 },
              className: classes.input }}
            // multiline={true} 
            type="number"
            name="minutes"
            variant="outlined"
            onChange={handleChange("minutes")}
              value={minutes < "10" ? `0${minutes}` : minutes}
            // value={minutes}
          />
          <Typography
            className={classes.secondTitle}
            gutterBottom
          >
            Minute
          </Typography>
        </Box>
        <Box className={classes.digits}>
          <ButtonGroup
            orientation="vertical"
            aria-label="vertical outlined primary button group"
          >
            <Button className={ampm === "AM" ? classes.on : classes.off}>
              AM
            </Button> 
             <Button className={ampm === "PM" ? classes.on : classes.off}>
              PM
            </Button> 
          </ButtonGroup>
        </Box>
      </Box>
    </CardContent>
    <CardActions className={classes.actions}>
      <Button disableRipple={true} onClick={drop} size="small" >
        <span className={classes.span}>CANCEL</span>
      </Button> 
       <Button disableRipple={true} onClick={keep} size="small" >
      <span className={classes.span}>OK</span>
     </Button> 
    </CardActions>
  </Card>
  )
}

const ParentComp: React.FC<ParentCompProps> = (props) => {
  const classes = customStyle();
  const [time, setTime] = useState({
    hours: "" || ('0'+new Date().getHours()).slice(-2),
    minutes: "" || ('0'+new Date().getMinutes()).slice(-2),
  });
  
  const ampm: string = time.hours >= "12" ? "PM" : "AM";

  
  const [anchorEl, setAnchorEl] = React.useState(false);

  const handleChange = (prop:string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    let newValue: number = Number(event.target.value);
    if (prop === "hours" && newValue > 24) {
      return newValue ;
    } else if (prop === "minutes" && newValue > 59) {
      return newValue ;
    } else {
      setTime({ ...time, [prop]: newValue });
    }
  };

  

  const handleClick = () => {
    console.log("e.target.value")
    setAnchorEl(true);
  };
  const handleCloseOn = () => {
    setAnchorEl(false);
  };
  const handleCloseOff = () => {
    setAnchorEl(false);
    setTime({
      ...time,
      hours: "" || ('0'+new Date().getHours()).slice(-2),
      minutes: "" || ('0'+new Date().getMinutes()).slice(-2),
    });
  };

  //   console.log(time);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Button
        className={classes.textField}
        aria-describedby={id}
        variant="outlined"
        onClick={() => handleClick()}
        disableRipple={true}
      >
        <Typography variant="h5" className={classes.time}>
          {time.hours }:{
            time.minutes < "10" ? `0${time.minutes}` : time.minutes
          }{ampm}
          {/* {time.hours}:{time.minutes}
          {ampm} */}
        </Typography>

        <AccessTimeIcon fontSize="large" color="disabled"/>
      </Button>
      <Popover
        id={id}
        open={open}
        onClose={handleCloseOn}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <ChildComp 
        hours={time.hours} 
        minutes={time.minutes} 
        ampm={ampm} 
        handleChange={handleChange} 
        drop={handleCloseOff} 
        keep={handleCloseOn}
        />
      </Popover>
    </>
  );
};

export default function Main() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Time Assignment</title>
        <link rel="icon" href="/clock.png" />
      </Head>

      <main className={styles.main}>
        <ParentComp  />
      </main>

      <footer className={styles.footer}>
        <a href="https://takija.io" target="_blank" rel="noopener noreferrer">
          Created by{" "}
          <img
            src="https://takija.io/images/edvin.jpg"
            alt="image"
            className={styles.logo}
          />
        </a>
      </footer>
    </div>
  );
}

