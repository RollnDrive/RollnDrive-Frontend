import React from 'react'
import './MemberCard.scss'


const MemberCard = ({image, name, role}) => {
  return (
    <div className='memberCard'>
        <img src={image} alt="img"/>
        <h1>{name}</h1>
        <h3>{role}</h3>
    </div>
  )
}

export default MemberCard