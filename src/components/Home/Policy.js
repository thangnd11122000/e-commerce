import { CardMembership } from "@mui/icons-material"
import { Grid } from "@mui/material"

const data = [
  {
    title: "Giao hàng miễn phí",
    subtitle: "Đơn hàng trên 200k",
    icon: <CardMembership />,
  },
  {
    title: "Thanh toán an toàn",
    subtitle: "An toàn tuyệt đối",
    icon: <CardMembership />,
  },
  {
    title: "Trung tâm trợ giúp",
    subtitle: "Hỗ trợ 24/7",
    icon: <CardMembership />,
  },
  {
    title: "Hoàn tiền miễn phí",
    subtitle: "Nếu có vấn đề",
    icon: <CardMembership />,
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
