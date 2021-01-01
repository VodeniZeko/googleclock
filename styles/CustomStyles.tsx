import { makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";

const customStyle = makeStyles<Theme>(theme => ({
  textField: {
    width: "25ch",
    height: "9ch",
    borderColor: '#026A95',
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
    fontSize: 14,
    fontWeight:"bolder",
    padding:"1em"
  },
  secondTitle: {
    fontSize: 13,
    marginTop: ".5em",
    marginRight: "2.5em",
  },
  pos: {
    marginBottom: 12,
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
span: {
color:"#026A95",
fontWeight:"bold",

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
 
  actions: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

export default customStyle;
