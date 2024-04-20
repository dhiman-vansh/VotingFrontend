import React from "react";
import { Modal, Box, Typography, Button, DialogActions } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import "./PopUp.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "#ECE5B6",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function PopUp(props) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  // console.log("Name : ", props.id);
  const handleOpen = () => {
    // const token = localStorage.getItem("token");
    try {
      setOpen(true);
    } catch (err) {
      // console.log(err);
      alert("In error");
      setOpen(false);
    }
  };
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    postVote();
    console.log("Name : ", name);
  };

  const postVote = async () => {
    const token = localStorage.getItem("token");
    if(token=="test1"){
      alert("You already voted from this device");
    }
    else {
      const response  = await axios.put(`https://votingbackend-1mcc.onrender.com/${props.sr}`, {
        name: name,
      });
      alert(response.data == "NameError" ? "Your name does not exist in database" : (localStorage.setItem("token", "test1"), "Vote Done"));
    }
    
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen}>
        {/* <DeleteForeverIcon /> */}
        <p>Vote</p>
        {/* <PersonRemoveIcon /> */}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
            Please Enter you name : 
            <form onSubmit={handleSubmit} className="addMember">
              <span>
                {/* <label>Enter Name:</label> */}
                <input
                  type="text"
                  placeholder="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                </span>
                </form>
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure you want to vote for {props.name}?
          </Typography>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              No
            </Button>
            <Button onClick={postVote} autoFocus>
              Yes
            </Button>
          </DialogActions>

          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        </Box>
      </Modal>
    </>
  );
}
