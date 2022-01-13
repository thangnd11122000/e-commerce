import { CardMembership } from "@mui/icons-material";
import { Grid } from "@mui/material";
import React from "react";

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

const ServicesBanner = () => {
  return (
    <div className="services-banner">
      <Grid container spacing={2}>
        {data.map((d, i) => (
          <Grid item xs={6} sm={6} md={3}  lg={3} key={i}>
            <div className="services-banner__box">
              <div className="services-banner__box--icon">{d.icon}</div>
              <div className="services-banner__box--content">
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

export default ServicesBanner;
