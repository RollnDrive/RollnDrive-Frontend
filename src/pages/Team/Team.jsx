import MyNavbar from '../../components/Navbar/MyNavbar'
import Footer from '../../components/Footer/Footer'
import './Team.scss'
import MemberCard from '../../components/TeamMember/MemberCard'

import vishal from "../../assets/images/1.avif"
import shivashankar from "../../assets/images/2.avif"
import tapan from "../../assets/images/3.avif"
import sahadev from "../../assets/images/4.avif"

console.log(vishal);

const Team = () => {
  return (
    <div>
      <MyNavbar />
      <section className='team-section'>
        <h1 className='team-title'> The Team</h1>
        <p className='team-intro'>
          <span className='quote'>“ </span>
          The dedicated professionals behind RollnDrive and discover what makes our team stand out.
        </p>
        <div className="members">
          <MemberCard image={vishal} name={"Vishal Chepuri"} role={"Founder"}></MemberCard>
          <MemberCard image={shivashankar} name={"Shivashankar Khobare"} role={"Production Manager"}></MemberCard>
          <MemberCard image={tapan} name={"Tapan Patil"} role={"Technical Advisor"}></MemberCard>
          <MemberCard image={sahadev} name={"Sahadev Achwale"} role={"Store Manager"}></MemberCard>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Team