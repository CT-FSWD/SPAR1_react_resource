//Step 3 - Components - Create the AboutReact component, including the Banner and ComponentIntro components as part of its render.
import React from 'react'
//Step 7 - Components - Instructor note: create the AboutReact.css file and copy/paste the AboutReact stylings from the StylingNotes.txt
import './AboutReact.css'

//Step 6 - Components - import the banner component and image. Render in the return after.
import Banner from '../Banner'
import bannerImage from '../../images/react-components-props.png'
//Step 9 - Components - import the intro component as well as the introImage...add the Intro component in the return.
import Intro from '../Intro'
import introImage from '../../images/componentIntro.png'
//Step 2 - AboutComponents - import and render the FunctionalComponents component, passing the helloWorld prop in the call.
import FunctionalComponents from './FunctionalComponents'
//Step 5 - AboutComponents - import and render the ClassComponents component in the render below.
import ClassComponents from './ClassComponents'

export default function AboutReact() {

    return(
        <section className="components">
            {/* v1: <h1>Hello from About React!</h1> */}
            <Banner heading="Components" image={bannerImage} description="About React components with logo"/>
            
            <Intro 
                image={introImage}
                alt="React Component graphic"
                blurb={
                    <React.Fragment>
                        <p>
                            In React, the UI is broken down into small pieces and placed in components. These are reusable and you can have components nested  inside of other components (called a Component Tree). Think of components like an image tag:
                            <br />
                            <br />
                            <code>
                                <em>
                                    &lt;img src="filepath" alt="description" /&gt;
                                </em>
                            </code>
                            <br />
                            <br />
                            Without the src or alt tags, images will not behave as intended. Much like this, props are the way we can pass specific information from one component to another.
                        </p>
                    </React.Fragment>
                }
                />

                <FunctionalComponents helloWorld='Hello from the AboutReact Component!' />

                <ClassComponents />
        </section>
    )
}