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
} from "../../store/cartItemsSlice"
import ConfirmDialog from "../ConfirmDialog"
import { formatCurrency } from "../../utils"
import { Link } from "react-router-dom"
import LazyLoad from "react-lazyload"

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
      const newSelected = cartProducts.map((product) => product.productId)
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
          <Table sx={{ minWidth: 700 }} aria-label="cart table">
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
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartProducts.map((product, index) => {
                const isItemSelected = isSelected(product.productId)
                const labelId = `enhanced-table-checkbox-${index}`

                return (
                  <TableRow key={product.productId}>
                    <TableCell>
                      <Checkbox
                        size="small"
                        color="primary"
                        checked={isItemSelected}
                        onClick={(event) =>
                          handleClick(event, product.productId)
                        }
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell align="left">
                      <div className="cart-table__product">
                        <Link
                          to={`/san-pham/${product.id}`}
                          className="cart-table__product--img"
                        >
                          <LazyLoad>
                            <img src={product.image} alt="" />
                          </LazyLoad>
                        </Link>
                        <div className="cart-table__product--content">
                          <Link to={`/san-pham/${product.id}`}>
                            {product.product_name}
                          </Link>
                          <div className="product__option">
                            {product?.selectedOption?.map((option) => (
                              <p key={option.option_id}>{option.detail}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell align="center" className="cart-table__price">
                      {product?.discount ? (
                        <>
                          <p className="cart-table__price--discount">
                            {formatCurrency(product.price - product.discount)}
                          </p>
                          <del>{formatCurrency(product.price)}</del>
                        </>
                      ) : (
                        <p className="cart-table__price--normal">
                          {formatCurrency(product.price)}
                        </p>
                      )}
                    </TableCell>
                    <TableCell align="center">
                      <div className="cart-table__quantity">
                        <button
                          onClick={() =>
                            updateQuantity("minus", product.productId)
                          }
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
                                id: product.productId,
                                value: e.target.value,
                              })
                            )
                          }
                        />
                        <button
                          onClick={() =>
                            updateQuantity("plus", product.productId)
                          }
                        >
                          +
                        </button>
                      </div>
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: "bold" }}>
                      {product.discount > 0
                        ? formatCurrency(product.discount * product.quantity)
                        : formatCurrency(product.price * product.quantity)}
                    </TableCell>
                    <TableCell align="center">
                      <Tooltip title="Xóa sản phẩm">
                        <IconButton
                          onClick={() => handleDelete(product.productId)}
                        >
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
            <p>Tổng tiền: {formatCurrency(totalPrice)}</p>
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
