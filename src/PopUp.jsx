import React from "react";
import { Modal, Box, Typography, Button, DialogActions } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import "./PopUp.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function PopUp(props) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const handleOpen = () => {
    // const token = localStorage.getItem("token");
    try {
      console.log("In try");
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
    console.log("Name : ", name);
  };

  const postVote = async () => {
  
    
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
