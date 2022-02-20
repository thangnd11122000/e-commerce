import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material"
import { CheckCircle, ErrorRounded } from "@mui/icons-material"
const ConfirmDialog = ({ confirmDialog, setConfirmDialog }) => {
  const { isOpen, type, title, subTitle, onConfirm } = confirmDialog

  const handleClose = () => {
    setConfirmDialog({ ...confirmDialog, isOpen: false })
  }

  const handleConfirm = () => {
    onConfirm()
    handleClose()
  }

  return (
    <Dialog open={isOpen} onClose={handleClose} className="dialog">
      <DialogTitle>
        <IconButton>
          {type === "confirm" ? (
            <ErrorRounded color="warning" />
          ) : type === "success" ? (
            <CheckCircle color="success" />
          ) : (
            <></>
          )}
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <h4>{title}</h4>
        {subTitle && <p>{subTitle}</p>}
      </DialogContent>
      <DialogActions>
        <button
          className="btn-secondary"
          onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
        >
          Hủy bỏ
        </button>
        <button className="btn-bg-primary" onClick={handleConfirm}>
          Đồng ý
        </button>
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmDialog
