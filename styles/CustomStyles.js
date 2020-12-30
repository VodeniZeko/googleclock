import { makeStyles } from "@material-ui/core/styles";

const customStyle = makeStyles((theme) => ({
  textField: {
    width: "25ch",
    height: "9ch",
  },
  time: {
    margin: ".5em",
  },
  root: {
    width: "330px",
  },
  bullet: {
    display: "flex",
    flexDirection: "column",
    fontSize: 32,
  },
  title: {
    fontSize: 22,
  },
  secondTitle: {
    fontSize: 14,
    marginTop: ".5em",
    marginRight: "2em",
  },
  pos: {
    marginBottom: 12,
  },
  box: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
    alignContent: "space-between",
    textAlign: "center",
  },
  digits: {
    width: "22%",
    margin: ".5em",
  },
  smallDigits: {
    alignSelf: "center",
    height: "90px",
  },
  on: {
    backgroundColor: "#40e0d0",
  },
  actions: {
    flexDirection: "row-reverse",
  },
}));

export default customStyle;
