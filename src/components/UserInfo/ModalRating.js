import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Modal from "@mui/material/Modal"
import { Rating, TextField } from "@mui/material"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { showNotify } from "../../store/notifySlice"

export default function ModalRating({ product }) {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setValue(0)
    setMessage("")
    setOpen(false)
  }
  const [value, setValue] = useState(0)
  const [message, setMessage] = useState("")

  const sendReview = () => {
    axios
      .post("/api/reviews", {
        customer_id: user?.id,
        product_id: product.id,
        comment: message,
        rating: value,
      })
      .then(() => {
        setValue(0)
        setMessage("")
        dispatch(
          showNotify({
            isOpen: true,
            message: "Đánh giá sản phẩm thành công",
            type: "success",
          })
        )
        setOpen(false)
      })
      .catch(() => {
        dispatch(
          showNotify({
            isOpen: true,
            message: "Đánh giá sản phẩm thất bại",
            type: "error",
          })
        )
      })
  }

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{ width: "120px", background: "#333" }}
      >
        Đánh giá
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="rating-modal">
          <img
            src={`https://techchains-ecommerce.store/public/storage/uploads/products/${product?.image}`}
            alt=""
          />
          <p className="product-name">{product?.product_name}</p>
          <Rating
            name="rating"
            value={value}
            onChange={(_event, newValue) => {
              setValue(newValue)
            }}
            size="large"
            sx={{ margin: "10px 0" }}
          />
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={4}
            sx={{ width: "100%" }}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="btn-primary"
            disabled={value === 0 || message === ""}
            onClick={sendReview}
          >
            Gửi đánh giá
          </button>
        </Box>
      </Modal>
    </div>
  )
}
