import { Grid } from "@mui/material"
import { FaShippingFast, FaHeadphonesAlt, FaMoneyBill } from "react-icons/fa"
import { MdPayment } from "react-icons/md"

const data = [
  {
    title: "Giao hàng miễn phí",
    subtitle: "Đơn hàng trên 200k",
    icon: <FaShippingFast />,
  },
  {
    title: "Thanh toán an toàn",
    subtitle: "An toàn tuyệt đối",
    icon: <MdPayment />,
  },
  {
    title: "Trung tâm trợ giúp",
    subtitle: "Hỗ trợ 24/7",
    icon: <FaHeadphonesAlt />,
  },
  {
    title: "Hoàn tiền miễn phí",
    subtitle: "Nếu có vấn đề",
    icon: <FaMoneyBill />,
  },
]

const Policy = () => {
  return (
    <div className="policy">
      <Grid container spacing={2}>
        {data.map((d, i) => (
          <Grid item xs={6} sm={6} md={3} lg={3} key={i}>
            <div className="policy__item">
              <div className="policy__icon">{d.icon}</div>
              <div className="policy__content">
                <h3>{d.title}</h3>
                <p>{d.subtitle}</p>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Policy
