//Step 1 - Functions - Create Resources with the Banner component in its return
import React, { useState, useEffect } from 'react'
import bannerImage from '../../images/react-art.jpg'
import Banner from '../Banner'
import Intro from '../Intro'
import introImage from '../../images/pizza.jpg'
//Step 2 - Functions - Create Resources.css and import it here
import './Resources.css'
//Step 6 - Functions - Import and render FunctionExamples
import FunctionExamples from './FunctionExamples'
//Step 2 - Read Data - import sampleResources
import sampleResources from '../../Utilities/sampleResources';
//Step 5 - Import and render ResourceGallery, passing resouces as a prop
import ResourceGallery from './ResourceGallery'
//Step 8 - Read Data - Import fetchData from functions.js and the button to call the fetchData function and set resources
import { fetchData } from '../../Utilities/functions'

export default function Resources() {
    //Step 3 - Read Data - create the hook that will store the resources, and create the div.text-center and button for sample resources

    //Below we create a React Hook to set the Resources at the top level component that utilizes this data. The Resources component will utilize/pass on the data to the ResourceGallery and further down to the SingleResource component.
    const [resources, setResources] = useState([]);

    //Step 1 - Lifecycle - Import and create the useEffect function below.

    //useEffect is a way to customize when the component will re-render and what functionality it will perform as it re-renders. The first parameter is a function that tells it what to accomplish, the second parameter is an array that will give conditions for when to run useEffect.
    useEffect(() => {
        fetchData().then(response => {
            //console.table is a way to render JS collections in the console for use in debugging. This is similar in use to console.log() or alert() in JS testing/debugging.
            console.table(response.data);
            setResources(response.data);
        })
    }, [])
    //An empty array in a call to the useEffect() will tell the component to perform the function in the first parameter only once, as the component renders to the virtual DOM for the first time. You could place a custom hook that updates only when you want to re-render the component again. With an empty array here, useEffect is only invoked once as the browser renders the component to the virtual DOM.

    return (
        <section className="resources">
            <Banner image={bannerImage} description="Artistic Background" heading="Functions & Reading Data" />
            <Intro 
                image={introImage}
                alt="JS Promises are like ordering pizza"
                blurb={
                <React.Fragment>
                    <h3>Promises Explained</h3>
                    <p>
                        Asynchronous functions in JS carry the promises of a return of specific informaton upon completion of the function's code. As JS devs, we can use .then() or the await keyword to pause specific logic/code to run only once the promise has been fulfilled.
                    </p>
                    <p>Think of JS promises like ordering a pizza: You have to wait for the pizza to be delivered before you can eat it.</p>
                </React.Fragment>
                } />
            <FunctionExamples />
            <ResourceGallery resources={resources} />

            <div className="text-center p-3 mb-3">
                <button onClick={() => setResources(sampleResources)} className="btn btn-color m-1">Sample Resources</button>
                {/* Step 9 - Read Data - Create a button that allows the user to click and run the fetchData function.  */}
                
                {/* Below we call to the fetchData function (housed in the functions.js file) and use the then function to await the promise to be fulfilled. A promise allows us to wait for the response from the API BEFORE we execute any further code. Because we are waiting on a promise to be returned from this async function, we use .then() to inform the browser to wait until a response comes back to perform any further functionality. 
                
                Think of promises like ordering a pizza. When I order a pizza to be delivered, I have to wait for it to be delivered before I attempt to eat it... .then() is what waits for the data to be returned back before I attempt to place that data into our resources state data.

                */}
                <button onClick={() => fetchData()                    
                    //Below waits for the JS promise to be fulfilled before running the code inside of its scopes.
                    .then(response => {
                        setResources(response.data)
                    })}
                    className="btn btn-color m-1">Load Resources</button>
            </div>
        </section>
    )
}
