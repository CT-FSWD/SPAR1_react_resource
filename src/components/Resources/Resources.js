//Step 1 - Functions - Create Resources with the Banner component in its return
import React, {useState, useEffect} from 'react'
import bannerImage from '../../images/react-art.jpg'
import Banner from '../Banner'
//Step 2 - Functions - Create Resources.css and import it here
import './Resources.css'
//Step 6 - Functions - Import and render FunctionExamples
import FunctionExamples from './FunctionExamples'
//Step 2 - Read Data - import sampleResources
import sampleResources from '../../Utilities/sampleResources';
//Step 5 - Import and render ResourceGallery, passing resouces as a prop
import ResourceGallery from './ResourceGallery'
//Step 8 - Read Data - Import fetchData from functions.js
import { fetchData } from '../../Utilities/functions'

export default function Resources() {
    //Step 3 - Read Data - create the hook that will store the resources
    //Below we create a React Hook to set the Resources at the top level component that utilizes this data. The Resources component will utilize/pass on the data to the ResourceGallery and further down to the SingleResource component.
    const [resources, setResources] = useState(sampleResources);


    return (
        <section className="resources">
            <Banner image={bannerImage} description="Artistic Background" heading="Functions & Reading Data" />
            <FunctionExamples />
            <ResourceGallery resources={resources}/>
        </section>
    )
}
