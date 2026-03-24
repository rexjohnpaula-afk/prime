import React from 'react'
import { Link } from "react-router-dom";

function ClubCard({ image, name, link }) {
  return (
    <Link to={link}  className='club-link'>
    <div className="club-card">
      <img src={image} alt={name} />
      <h3 className='club-name'>{name}</h3>
    </div>
    </Link>
  )
}

export default ClubCard