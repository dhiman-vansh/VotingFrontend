import PopUp from "./PopUp";
import Divider from '@mui/material/Divider';
import "./CardComp.css";

export default function CardComp(props) {
  return (
    <>
      <div className="card">
        <img src={props.img} alt="Snapchat-157062993" border="0"></img>
        <Divider /> 
        {/* <img src={""} alt="Avatar" style={{ width: "100%" }} /> */}
        <div className="container">
          <p className="card-title">
            Candidate {props.sr}: {props.name}
          </p>
          <p>{props.desc}</p>
          <button>
            <PopUp name= {props.name} /></button>
        </div>
      </div>
    </>
  );

}
