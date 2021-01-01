// import React from "react";
// import customStyle from "../styles/CustomStyles";
// import {
//   ButtonGroup,
//   Card,
//   CardActions,
//   CardContent,
//   Button,
//   TextField,
//   Box,
//   Typography,
// } from "@material-ui/core";

// //////////////////////////////////////////////////////



// export default function PopoverFunction({
//   // hours,
//   // minutes,
//   // ampm,
//   // handleChange,
//   // drop,
//   // keep,
// }) {
//   const classes = customStyle();
//   // if (!handleChange) {
//   //   return null;
//   // }

//   return (
//     <Card>
//       <CardContent className={classes.root}>
//         <Typography className={classes.title} gutterBottom>
//           Enter Time
//         </Typography>
//         <Box className={classes.box}>
//           <Box className={classes.digits}>
//             <TextField
//               type="number"
//               name="hours"
              
//               InputProps={{ inputProps: { min: 0, max: 23 },className: classes.input }}
//               variant="outlined"
//               // multiline={true} 
//               // onChange={handleChange("hours")}
              
//                 // value={hours < 10 ? `0${hours}` : hours}
//               // value={hours}
//             />

//             <Typography
//               className={classes.secondTitle}

//               gutterBottom
//             >
//               Hour
//             </Typography>
//           </Box>
//           <Box className={classes.smallDigits}>
//             <Typography variant="h3">:</Typography>
//           </Box>
//           <Box className={classes.digits}>
//             <TextField
          
//               InputProps={{ 
//                 inputProps: { min: 0, max: 59 },
//                 className: classes.input }}
//               // multiline={true} 
//               type="number"
//               name="minutes"
//               variant="outlined"
//               // onChange={handleChange("minutes")}
//                 // value={minutes < 10 ? `0${minutes}` : minutes}
//               // value={minutes}
//             />
//             <Typography
//               className={classes.secondTitle}
//               gutterBottom
//             >
//               Minute
//             </Typography>
//           </Box>
//           <Box className={classes.digits}>
//             <ButtonGroup
//               className={classes.group}
//               orientation="vertical"
//               aria-label="vertical outlined primary button group"
//             >
//               {/* <Button className={ampm === "AM" ? classes.on : classes.off}>
//                 AM
//               </Button> */}
//               {/* <Button className={ampm === "PM" ? classes.on : classes.off}>
//                 PM
//               </Button> */}
//             </ButtonGroup>
//           </Box>
//         </Box>
//       </CardContent>
//       <CardActions className={classes.actions}>
//         {/* <Button disableRipple={true} onClick={drop} size="small" > */}
//           <span className={classes.span}>CANCEL</span>
//         {/* </Button> */}
//         {/* <Button disableRipple={true} onClick={keep} size="small" > */}
//         <span className={classes.span}>OK</span>
//         {/* </Button> */}
//       </CardActions>
//     </Card>
//   );
// }
