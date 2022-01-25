import React from "react"
import Banner from "../components/About/Banner"
import Intro from "../components/About/Intro"
import Team from "../components/About/Team"
import Technology from "../components/About/Technology"
import Work from "../components/About/Work"
import PageLinks from "../components/PageLinks"

const About = () => {
  return (
    <>
      {/* <PageLinks links={[{ name: "Về chúng tôi", link: "/about" }]} /> */}
      <div className="about">
        <Banner />
        <Intro />
        <Work />
        <Technology />
        <Team />
      </div>
    </>
  )
}

export default About
