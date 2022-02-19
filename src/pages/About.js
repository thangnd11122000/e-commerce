import Banner from "../components/About/Banner"
import Intro from "../components/About/Intro"
import Team from "../components/About/Team"
import Technology from "../components/About/Technology"
import Work from "../components/About/Work"

const About = () => {
  return (
    <div className="about">
      <Banner />
      <Intro />
      <Work />
      <Technology />
      <Team />
    </div>
  )
}

export default About
