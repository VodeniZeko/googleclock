import React, { useState } from "react";
import customStyle from "../styles/CustomStyles";
import { Popover, Typography, Button } from "@material-ui/core/";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SimpleCard from "./SimpleCard";

/////////////////////////////////////////////////////

export default function TimeComponent() {
  const [time, setTime] = useState({
    hours: "" || new Date().getHours(),
    minutes: "" || new Date().getMinutes(),
  });
  const ampm = time.hours >= 12 ? "PM" : "AM";

  const classes = customStyle();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (prop) => (event) => {
    if (prop === "hours" && event.target.value > 24) {
      return (event.target.value = "");
    } else if (prop === "minutes" && event.target.value > 59) {
      return (event.target.value = "");
    } else {
      setTime({ ...time, [prop]: event.target.value });
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseOn = () => {
    setAnchorEl(null);
  };
  const handleCloseOff = () => {
    setAnchorEl(null);
    setTime({
      ...time,
      hours: "" || new Date().getHours(),
      minutes: "" || new Date().getMinutes(),
    });
  };

  console.log(time);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        className={classes.textField}
        aria-describedby={id}
        variant="outlined"
        onClick={handleClick}
        disableRipple={true}
      >
        <Typography variant="h5" className={classes.time}>
          {`${time.hours < 10 ? `0${time.hours}` : time.hours}:${
            time.minutes < 10 ? `0${time.minutes}` : time.minutes
          }${ampm}`}
        </Typography>

        <AccessTimeIcon fontSize="large" />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleCloseOn}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <SimpleCard
          hours={time.hours}
          minutes={time.minutes}
          ampm={ampm}
          handleChange={handleChange}
          drop={handleCloseOff}
          keep={handleCloseOn}
        />
      </Popover>
    </div>
  );
}
