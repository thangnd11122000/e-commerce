import { CardMembership } from "@mui/icons-material";
import { Grid } from "@mui/material";

const data = [
  {
    title: "Giao hang mien phi",
    subtitle: "Don hang tren 200k",
    icon: <CardMembership />,
  },
  {
    title: "Thanh toan an toan",
    subtitle: "An toan tuyet doi",
    icon: <CardMembership />,
  },
  {
    title: "Trung tam tro giup",
    subtitle: "Ho tro 24/7",
    icon: <CardMembership />,
  },
  {
    title: "Hoàn tiền miễn phí",
    subtitle: "Nếu có vấn đề",
    icon: <CardMembership />,
  },
];

const Policy = () => {
  return (
    <div className="policy">
      <Grid container spacing={2}>
        {data.map((d, i) => (
          <Grid item xs={6} sm={6} md={3} lg={3} key={i}>
            <div className="policy__box">
              <div className="policy__box--icon">{d.icon}</div>
              <div className="policy__box--content">
                <h3>{d.title}</h3>
                <p>{d.subtitle}</p>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Policy;
