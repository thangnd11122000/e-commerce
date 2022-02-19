import { Snackbar, Alert, Slide } from "@mui/material"

function TransitionDown(props) {
  return <Slide {...props} direction="down" />
}

const Notification = ({ notify, setNotify }) => {
  const { isOpen, type, message } = notify
 
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
    setNotify({ ...notify, isOpen: false }) 
  }
 
  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={6000}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      onClose={handleClose}
      TransitionComponent={TransitionDown}
    >
      <Alert variant="filled" severity={type || "success"}>
        {message}
      </Alert>
    </Snackbar>
  )
}

export default Notification
