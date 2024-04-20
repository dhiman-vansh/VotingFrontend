import PopUp from "./PopUp";
import Divider from '@mui/material/Divider';
import "./CardComp.css";

export default function CardComp(props) {
  // console.log("Props in card comp: ", props);
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
          {/* <p className="desc">{props.desc}</p> */}
          {props.vote === "true" ? (
            <button className="vote"><PopUp sr={props.sr}  name= {props.name} /></button>
          ) : null}
          
        </div>
      </div>
    </>
  );

}
