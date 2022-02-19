import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material"

const ConfirmDialog = ({ confirmDialog, setConfirmDialog }) => {
  const { isOpen, title, subTitle } = confirmDialog
  return (
    <Dialog open={isOpen}>
      <DialogTitle></DialogTitle>
      <DialogContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="subtitle2">{subTitle}</Typography>
      </DialogContent>
      <DialogActions>
        <Button color="default">Không</Button>
        <Button color="error">Xóa</Button>
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmDialog
