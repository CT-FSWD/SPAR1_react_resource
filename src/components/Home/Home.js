//This component will act as the unique content for the home 'page' in our application.
//Step 10 - Components - Create the component and render with the Banner and Intro
import React from 'react'
import './Home.css'
//Imported images
import image from '../../images/ReactLogoSpecial.jpg'
import introImage from '../../images/react-cool-portal.jpeg'

//Components to import
import Intro from '../Intro'
import Banner from '../Banner'
//Step 13 - Components - import and render the ComparisonGallery component
import ComparisonGallery from './ComparisonGallery'
//Step 15 - Components - import and render the Graphic component
import Graphic from './Graphic'

export default function Home() {
    return (
        <section className="home">
            <Banner heading="Truly Composable UI" image={image} description="React Logo" />
            <main>
                <Intro
                    image={introImage}
                    alt="React logo with fire ring"
                    blurb={
                        <React.Fragment>
                            <h3>Welcome to ReactJS Web Development</h3>
                            <p>
                                In this application, you will learn the basics of developing truly composable UI's that provide a rich, fun experience. Each link in the navigation will be designed to give you more information about key concepts in ReactJS.
                            </p>                           
                        </React.Fragment>
                    }
                    url="https://reactjs.org"
                    linkText="See React Documentation"
                    />
                    <ComparisonGallery />
                    <Graphic/>
            </main>
        </section>
            )
}
