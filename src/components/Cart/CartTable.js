import {
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material"
import { Delete } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import {
  changeQuantity,
  decreaseQuantity,
  deleteItem,
  deleteMultiItem,
  increaseQuantity,
} from "../../features/cartItems/cartItemsSlice"
import ConfirmDialog from "../ConfirmDialog"
import getDiscount from "../../utils/getDiscount"
import formatCurrency from "../../utils/formatCurrency"

const CartTable = () => {
  const cartItems = useSelector((state) => state.cartItems.value)
  const totalPrice = useSelector((state) => state.cartItems.totalPrice)
  const dispatch = useDispatch()

  const [selected, setSelected] = useState([])
  const [cartProducts, setCartProducts] = useState(cartItems)
  const [confirmDelete, setConfirmDelete] = useState({
    isOpen: false,
    type: "",
    title: "",
    onConfirm: () => {},
  })
  const [confirmDeleteMulti, setConfirmDeleteMulti] = useState({
    isOpen: false,
    type: "",
    title: "",
    onConfirm: () => {},
  })

  const updateQuantity = (type, id) => {
    if (type === "plus") {
      dispatch(increaseQuantity(id))
    } else {
      dispatch(decreaseQuantity(id))
    }
  }

  useEffect(() => {
    setCartProducts(cartItems)
  }, [cartItems, dispatch])

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = cartProducts.map((n) => n.id)
      setSelected(newSelected)
      return
    }
    setSelected([])
  }

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      )
    }
    setSelected(newSelected)
  }

  const handleDelete = (id) => {
    setConfirmDelete({
      isOpen: true,
      type: "confirm",
      title: "Xóa sản phẩm này?",
      onConfirm: () => {
        const newSelected = selected.filter((s) => s !== id)
        setSelected(newSelected)
        dispatch(deleteItem(id))
      },
    })
  }

  const handleDeleteMulti = () => {
    setConfirmDelete({
      isOpen: true,
      type: "confirm",
      title: "Xóa các sản phẩm đã chọn?",
      onConfirm: () => {
        setSelected([])
        dispatch(deleteMultiItem(selected))
      },
    })
  }

  const isSelected = (id) => selected.indexOf(id) !== -1

  return (
    <>
      <div className="cart-table">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="cart table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: 0 }}>
                  <Checkbox
                    size="small"
                    color="primary"
                    onChange={handleSelectAllClick}
                    inputProps={{
                      "aria-label": "select all products",
                    }}
                    checked={
                      selected.length > 0 &&
                      selected.length === cartProducts.length
                    }
                  />
                </TableCell>
                <TableCell align="left">Sản phẩm</TableCell>
                <TableCell align="center">Đơn giá</TableCell>
                <TableCell align="center">Số lượng</TableCell>
                <TableCell align="center">Số tiền</TableCell>
                <TableCell align="center">Thao tác</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartProducts.map((product, index) => {
                const isItemSelected = isSelected(product.id)
                const labelId = `enhanced-table-checkbox-${index}`
                const discountValue = getDiscount(
                  product.discount,
                  product.price
                )
                return (
                  <TableRow key={product.id}>
                    <TableCell>
                      <Checkbox
                        size="small"
                        color="primary"
                        checked={isItemSelected}
                        onClick={(event) => handleClick(event, product.id)}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell align="left">
                      <div className="cart-table__product">
                        <img src={product.image} alt="" />
                        {product.name}
                      </div>
                    </TableCell>
                    <TableCell align="center" className="cart-table__price">
                      {discountValue ? (
                        <>
                          <p className="cart-table__price--discount">
                            {formatCurrency(discountValue)}đ
                          </p>
                          <del>{formatCurrency(product.price)}đ</del>
                        </>
                      ) : (
                        <p className="cart-table__price--normal">
                          {formatCurrency(product.price)}đ
                        </p>
                      )}
                    </TableCell>
                    <TableCell align="center">
                      <div className="cart-table__quantity">
                        <button
                          onClick={() => updateQuantity("minus", product.id)}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          name=""
                          id=""
                          min={1}
                          value={product.quantity}
                          onChange={(e) =>
                            dispatch(
                              changeQuantity({
                                id: product.id,
                                value: e.target.value,
                              })
                            )
                          }
                        />
                        <button
                          onClick={() => updateQuantity("plus", product.id)}
                        >
                          +
                        </button>
                      </div>
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: "bold" }}>
                      {discountValue > 0
                        ? formatCurrency(discountValue * product.quantity)
                        : formatCurrency(product.price * product.quantity)}
                      đ
                    </TableCell>
                    <TableCell align="center">
                      <Tooltip title="Xóa sản phẩm">
                        <IconButton onClick={() => handleDelete(product.id)}>
                          <Delete />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>

        <div className="cart__toolbar section-box">
          {selected?.length ? (
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  onChange={handleSelectAllClick}
                  checked={
                    selected.length > 0 &&
                    selected.length === cartProducts.length
                  }
                />
              }
              label={`${selected.length} đã chọn`}
            />
          ) : (
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  onChange={handleSelectAllClick}
                  checked={
                    selected.length > 0 &&
                    selected.length === cartProducts.length
                  }
                />
              }
              label="Chọn tất cả"
            />
          )}

          {selected?.length > 0 ? (
            <Button
              variant="outlined"
              color="error"
              startIcon={<Delete />}
              onClick={() => handleDeleteMulti()}
            >
              Xóa đã chọn
            </Button>
          ) : (
            <p>Tổng tiền: {formatCurrency(totalPrice)}đ</p>
          )}
        </div>
      </div>
      <ConfirmDialog
        confirmDialog={confirmDelete}
        setConfirmDialog={setConfirmDelete}
      />
      <ConfirmDialog
        confirmDialog={confirmDeleteMulti}
        setConfirmDialog={setConfirmDeleteMulti}
      />
    </>
  )
}

export default CartTable
