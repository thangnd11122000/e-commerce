import { Button, Divider, Grid, Pagination } from "@mui/material"
import usePagination from "../Pagination/Pagination"
import axios from "axios"
import { useEffect, useState } from "react"
import { PuffLoader } from "react-spinners"
import { formatCurrency, scrollOnTop } from "../../utils"
import dayjs from "dayjs"
import { Fragment } from "react"
import ModalRating from "./ModalRating"
import { ORDER_SUCCESS } from "../../constants/orders"

const Order = ({ url = "/api/orders" }) => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [perPage] = useState(6)
  let [page, setPage] = useState(1)

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setOrders(res.data.data.data)
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [url])

  const renderPrice = (data) => {
    const shippingFee = Number(data?.shipping_fee || 0)
    const unitPrice = data?.orderdetails.reduce(
      (previousValue, currentValue) =>
        previousValue +
        Number(currentValue.unit_price) -
        Number(currentValue.discount_amount),
      0
    )
    return formatCurrency(shippingFee + unitPrice)
  }

  const renderPaymentType = (type) => {
    switch (type) {
      case 1:
        return "Tiền mặt"
      case 2:
        return "Momo"
      default:
        break
    }
  }

  const renderStatus = (status) => {
    switch (status) {
      case 1:
        return (
          <Button variant="contained" color="primary" sx={{ width: "120px" }}>
            Đang xử lý
          </Button>
        )
      case 2:
        return (
          <Button variant="contained" color="error" sx={{ width: "120px" }}>
            Đã huỷ
          </Button>
        )
      case 3:
        return (
          <Button variant="contained" color="secondary" sx={{ width: "120px" }}>
            Đang giao
          </Button>
        )
      case 4:
        return (
          <Button variant="contained" color="success" sx={{ width: "120px" }}>
            Đã giao
          </Button>
        )
      default:
        break
    }
  }

  const count = Math.ceil(orders.length / perPage)
  const _DATA = usePagination(orders, perPage)

  const handleChange = (e, p) => {
    setPage(p)
    _DATA.jump(p)
  }

  return (
    <>
      {loading ? (
        <div className="product-loading">
          <PuffLoader color="#0032FE" size={60} />
        </div>
      ) : (
        <>
          <div className="user__body">
            {_DATA.currentData().map((order, i) => (
              <div key={order.id}>
                <Grid container spacing={2} justifyContent="space-between">
                  <Grid item xs={6}>
                    <p>Giá tiền: {renderPrice(order)}</p>
                    <p style={{ margin: "5px 0" }}>
                      PTTT: {renderPaymentType(order.payment_type_id)}
                    </p>
                    <p>
                      Ngày tạo đơn:{" "}
                      {dayjs(order.created_at).format("DD/MM/YYYY")}
                    </p>
                  </Grid>
                  <Grid item xs={6} justifyContent="end" textAlign="end">
                    {renderStatus(order.order_status)}
                  </Grid>
                </Grid>

                <div className="checkout-product" style={{ marginTop: "15px" }}>
                  {order.orderdetails?.map((detail) => (
                    <Fragment key={detail.id}>
                      <div key={detail.id} className="checkout-product__item">
                        <img
                          src={`https://techchains-ecommerce.store/public/storage/uploads/products/${detail.product.image}`}
                          alt={detail.product.product_name}
                        />
                        <div>
                          <p className="checkout-product__name">
                            {detail.product.product_name}
                          </p>
                          {detail.discount_amount > 0 ? (
                            <p className="checkout-product__price">
                              {formatCurrency(
                                Number(detail.unit_price) -
                                  Number(detail.discount_amount)
                              )}
                              <del>
                                {formatCurrency(Number(detail.unit_price))}
                              </del>
                            </p>
                          ) : (
                            <p className="checkout-product__price">
                              {formatCurrency(Number(detail.unit_price))}
                            </p>
                          )}

                          <p className="checkout-product__quantity">
                            Số lượng: {detail.quantity}
                          </p>
                        </div>
                      </div>
                      {order.order_status === ORDER_SUCCESS && (
                        <div>
                          <ModalRating product={detail?.product} />
                        </div>
                      )}
                    </Fragment>
                  ))}
                </div>
                <Divider sx={{ margin: "30px 0" }} />
              </div>
            ))}
          </div>
          <Pagination
            className="pagination"
            count={count}
            size="medium"
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
            onClick={scrollOnTop}
          />
        </>
      )}
    </>
  )
}

export default Order
