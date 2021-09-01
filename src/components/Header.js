//Step 1 - Components - Create the outer shell of the navigation, but wait to create the toggleNav. The render should initially look like the following: 

//    <header>
//        <nav className="navbar navbar-expand-lg">
//            <button className="navbar-brand">
//                ReactJS
//                <img src={logo} alt="React logo" />
//            </button>
//        </nav>
//    </header>

//Step 19 - Components - add useState to the imports
import React, {useState} from 'react'
//Images in React development - In React components, if we want to use an image as part of the UI, we must first import the image into the file. Below we import an image and give it a name, so we can easily refer to it in the src for an image tag.
import logo from '../images/logo192.png'

export default function Header(props) {
    //Step 20 - Components - create the hook below and handleContentChange()
    const [toggleNav, setToggleNav] = useState(false);

    const handleContentChange = (content) => {
        //Below we use the handleContentCallback function to communicate back to the App component that the user wants to see specific content.
        props.handleContentCallback(content);
        //Next we write code that will close the navigation menu and scroll to the top of the page.
        setToggleNav(false);
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                {/* Step 21 - Components - add the onClick event below */}
                <button className="navbar-brand" onClick={() => handleContentChange('Home')}>
                    ReactJS
                    {/* Below we place the name of the image imported into the UI - logo - in the src to point the image tag to the associated file. */}
                    <img src={logo} alt="React logo" />
                </button>
                {/* Step 22 - Components - Create the UI below for the hamburger button and menu  */}
                <button className="menuToggle" onClick={() => setToggleNav(true)}>
                    <div className="hamburger-outer">
                        <div className="hamburger-inner"></div>
                        <div className="hamburger-inner"></div>
                        <div className="hamburger-inner"></div>
                    </div>
                </button>
                {/* Below we conditionally render the JSX that falls inside the scopes of the conditional statement, rendering the menu when toggleNav is true. */}
                {toggleNav &&
                    <div className="menu">
                        <button className="close-menu" onClick={() => setToggleNav(false)}>&times;</button>
                        {/* Below we create each link, passing in a specific value to handleContent to manipulate what components render in the UI. */}
                        <ul>
                            <li onClick={() => handleContentChange('Home')}>Home</li>
                            <li onClick={() => handleContentChange('About')}>About</li>
                            <li onClick={() => handleContentChange('Tech')}>Supporting Tech</li>
                        </ul>
                    </div>
                }
            </nav>
        </header>
    )
}
