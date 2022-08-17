import { Snackbar, Alert, Slide } from "@mui/material"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { hideNotify } from "../store/notifySlice"

function TransitionDown(props) {
  return <Slide {...props} direction="down" />
}

const Notify = () => {
  const notify = useSelector((state) => state.notify.data)

  const dispatch = useDispatch()
  const { isOpen, type, message } = notify
  const handleClose = (_event, reason) => {
    if (reason === "clickaway") {
      return
    }
    dispatch(hideNotify())
  }

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={4000}
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

export default Notify
