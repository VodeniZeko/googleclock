// import React, { useState } from "react";
// import customStyle from "../styles/CustomStyles";
// import { Popover, Typography, Button } from "@material-ui/core/";
// import AccessTimeIcon from "@material-ui/icons/AccessTime";
// import PopoverComponent from "./PopoverComponent";

// /////////////////////////////////////////////////////



// export default function TimeFunction() {
//   const [time, setTime] = useState({
//     hours: "" || new Date().getHours(),
//     minutes: "" || new Date().getMinutes(),
//   });
  
//   const ampm: String = time.hours >= 12 ? "PM" : "AM";

//   const classes = customStyle();
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleChange = (prop:String) => (event: React.ChangeEvent<HTMLInputElement>) => {
//     let newValue: number = Number(event.target.value);
//     if (prop === "hours" && newValue > 24) {
//       return newValue ;
//     } else if (prop === "minutes" && newValue > 59) {
//       return newValue ;
//     } else {
//       setTime({ ...time, [prop]: newValue });
//     }
//   };

//   const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {

//     setAnchorEl(e.currentTarget);
//   };
//   const handleCloseOn = () => {
//     setAnchorEl(null);
//   };
//   const handleCloseOff = () => {
//     setAnchorEl(null);
//     setTime({
//       ...time,
//       hours: "" || new Date().getHours(),
//       minutes: "" || new Date().getMinutes(),
//     });
//   };

//   //   console.log(time);
//   const open = Boolean(anchorEl);
//   const id = open ? "simple-popover" : undefined;

//   return (
//     <div>
//       <Button
//         className={classes.textField}
//         aria-describedby={id}
//         variant="outlined"
//         onClick={handleClick}
//         disableRipple={true}
//       >
//         <Typography variant="h5" className={classes.time}>
//           {time.hours < 10 ? `0${time.hours}` : time.hours }:{
//             time.minutes < 10 ? `0${time.minutes}` : time.minutes
//           }{ampm}
//           {/* {time.hours}:{time.minutes}
//           {ampm} */}
//         </Typography>

//         <AccessTimeIcon fontSize="large" color="disabled"/>
//       </Button>
//       <Popover
//         id={id}
//         open={open}
//         anchorEl={anchorEl}
//         onClose={handleCloseOn}
//         anchorOrigin={{
//           vertical: "bottom",
//           horizontal: "center",
//         }}
//         transformOrigin={{
//           vertical: "top",
//           horizontal: "center",
//         }}
//       >
//         <PopoverComponent
//           hours={time.hours}
//           minutes={time.minutes}
//           ampm={ampm}
//           handleChange={() => handleChange}
//           drop={handleCloseOff}
//           keep={handleCloseOn}
//         />
//       </Popover>
//     </div>
//   );
// }
