import React from "react";
import customStyle from "../styles/CustomStyles";
import {
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Button,
  TextField,
  Box,
  Typography,
} from "@material-ui/core";

//////////////////////////////////////////////////////

export default function SimpleCard({
  hours,
  minutes,
  ampm,
  handleChange,
  drop,
  keep,
}) {
  const classes = customStyle();

  const currHour = new Date().getHours();
  const currMin = new Date().getMinutes();

  return (
    <Card>
      <CardContent className={classes.root}>
        <Typography className={classes.title} gutterBottom>
          Enter Time
        </Typography>
        <Box className={classes.box}>
          <Box className={classes.digits}>
            <TextField
              margin="none"
              type="number"
              name="hours"
              InputProps={{ inputProps: { min: 0, max: 24 } }}
              variant="outlined"
              onChange={handleChange("hours")}
              value={hours < 10 ? `0${hours}` : hours}
            />

            <Typography
              className={classes.secondTitle}
              color="textSecondary"
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
              InputProps={{ inputProps: { min: 0, max: 59 } }}
              margin="none"
              type="number"
              name="minutes"
              variant="outlined"
              onChange={handleChange("minutes")}
              value={minutes < 10 ? `0${minutes}` : minutes}
            />
            <Typography
              className={classes.secondTitle}
              color="textSecondary"
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
              <Button variant="contained" color={ampm === "AM" && "primary"}>
                AM
              </Button>
              <Button variant="contained" color={ampm === "PM" && "primary"}>
                PM
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button onClick={drop} size="small" color="primary">
          {currHour != hours || currMin != minutes ? "RESTORE" : "CANCEL"}
        </Button>
        <Button onClick={keep} size="small" color="primary">
          OK
        </Button>
      </CardActions>
    </Card>
  );
}
