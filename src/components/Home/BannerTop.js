import { Grid } from "@mui/material";
import React from "react";
import banner1 from "../../assets/img/banners/banner1.png";
import banner2 from "../../assets/img/banners/slide-home1.png";


const BannerTop = () => {
  return (
    <div className="banner-top">
      <Grid container spacing={2}>
        <Grid item xs={6} md={7}>
          <div className="banner-top__carousel">
            <img src={banner2} alt="" className="banner-top__carousel--img" />
            <h3 className="banner-top__carousel--title">
              Phien Ban the thao <br />
              Su lua chon tot nhat cho ban
            </h3>
            <p className="banner-top__carousel--description">
              Ket noi khong day voi Tv, may tinh, laptop
            </p>
            <a href="/#" className="banner-top__carousel--button">
              Kham pha ngay
            </a>
          </div>
        </Grid>
        <Grid item xs={6} md={5}>
          <div className="banner-top__container">
            <div className="banner-top__box">
              <img src={banner1} alt="" className="banner-top__box--img" />
              <div className="banner-top__box--title">Canyon Star Raider</div>
              <div className="banner-top__box--desc">Header phone Audio</div>
            </div>
            <div className="banner-top__box">
              <img src={banner1} alt="" className="banner-top__box--img" />
              <div className="banner-top__box--title">Canyon Star Raider</div>
              <div className="banner-top__box--desc">Header phone Audio</div>
            </div>
            <div className="banner-top__box">
              <img src={banner1} alt="" className="banner-top__box--img" />
              <div className="banner-top__box--title">Canyon Star Raider</div>
              <div className="banner-top__box--desc">Header phone Audio</div>
            </div>
            <div className="banner-top__box">
              <img src={banner1} alt="" className="banner-top__box--img" />
              <div className="banner-top__box--title">Canyon Star Raider</div>
              <div className="banner-top__box--desc">Header phone Audio</div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default BannerTop;
