//Step 14 - Components - Create the component below
import React from 'react'
import graphic from '../../images/ReactJS-1.png'
export default function Graphic() {
    return (
        <div className="home-graphic text-center">
            <img className="graphic" src={graphic} alt="Graphic showing the benefits of using React"/>
        </div>
    )
}
