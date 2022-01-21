import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { Checkbox, FormControlLabel, IconButton, Tooltip } from "@mui/material"
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
import getDiscount from "../../utils/getDiscount"

const CartTable = () => {
  const [selected, setSelected] = useState([])

  const cartItems = useSelector((state) => state.cartItems.value)

  const totalPrice = useSelector((state) => state.cartItems.totalPrice)

  const [cartProducts, setCartProducts] = useState(cartItems)

  const dispatch = useDispatch()

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

  const handleDeleteMulti = () => {
    dispatch(deleteMultiItem(selected))
    setSelected([])
  }

  const isSelected = (id) => selected.indexOf(id) !== -1
  return (
    <div className="cart__table">
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
                  checked={selected.length === cartProducts.length}
                />
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: 600, fontSize: 16 }}>
                Sản phẩm
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 600, fontSize: 16 }}>
                Đơn giá
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 600, fontSize: 16 }}>
                Số lượng
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 600, fontSize: 16 }}>
                Số tiền
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 600, fontSize: 16 }}>
                Thao tác
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartProducts.map((product, index) => {
              const isItemSelected = isSelected(product.id)
              const labelId = `enhanced-table-checkbox-${index}`
              const discountValue = getDiscount(product.discount, product.price)
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
                    <div className="cart__table--product">
                      <img src={product.image} alt="" />
                      {product.name}
                    </div>
                  </TableCell>
                  <TableCell align="center" className="cart__table--price">
                    {discountValue ? (
                      <>
                        <p className="discount">{discountValue}đ</p>
                        <del>{product.price}đ</del>
                      </>
                    ) : (
                      <p className="normal">{product.price}đ</p>
                    )}
                  </TableCell>
                  <TableCell align="center">
                    <div className="cart__table--quantity">
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
                      ? discountValue * product.quantity
                      : product.price * product.quantity}
                    đ
                  </TableCell>
                  <TableCell align="center">
                    <Tooltip title="Xóa sản phẩm">
                      <IconButton
                        onClick={() => dispatch(deleteItem(product.id))}
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

      <div className="cart__toolbar">
        {selected?.length ? (
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                onChange={handleSelectAllClick}
                checked={selected.length === cartProducts.length}
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
                checked={selected.length === cartProducts.length}
              />
            }
            label="Chọn tất cả"
          />
        )}

        {selected?.length > 0 ? (
          <Tooltip title="Xóa tất cả">
            <IconButton onClick={() => handleDeleteMulti()}>
              <Delete className="cart__toolbar--icon" />
            </IconButton>
          </Tooltip>
        ) : (
          <p>Tổng tiền: {totalPrice}</p>
        )}
      </div>
    </div>
  )
}

export default CartTable
