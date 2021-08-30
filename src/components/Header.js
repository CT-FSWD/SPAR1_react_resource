//Step 1 - Components - Create the outer shell of the navigation, but wait to create the toggleNav. The render should initially look like the following: 

//    <header>
//        <nav className="navbar navbar-expand-lg">
//            <button className="navbar-brand">
//                ReactJS
//                <img src={logo} alt="React logo" />
//            </button>
//        </nav>
//    </header>

import React from 'react'
//Images in React development - In React components, if we want to use an image as part of the UI, we must first import the image into the file. Below we import an image and give it a name, so we can easily refer to it in the src for an image tag.
import logo from '../images/logo192.png'

export default function Header() {

    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <button className="navbar-brand">
                    ReactJS
                    {/* Below we place the name of the image imported into the UI - logo - in the src to point the image tag to the associated file. */}
                    <img src={logo} alt="React logo" />
                </button>
            </nav>
        </header>
    )
}
