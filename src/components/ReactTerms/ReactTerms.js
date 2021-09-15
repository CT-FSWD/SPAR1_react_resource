//Step 2 - Terms - Create the following component
import React, { useState, useEffect } from 'react'
import './ReactTerms.css'
import Banner from '../Banner'
import image from '../../images/reactTerms.jpg'
import Intro from '../Intro'
import introImage from '../../images/terms.jpg'
import sampleTerms from '../../Utilities/sampleTerms'
import SingleTerm from './SingleTerm'


export default function ReactTerms() {
    const [terms, setTerms] = useState(sampleTerms);
    
    //Let's create a useEffect to show the sampleTerms object in a console.table()
    useEffect(() => {
        console.table(terms);        
    }, []);
    return (
        <section className="terms">
            <Banner image={image} heading="React Terms" description="The word define" />
            <Intro 
                image={introImage}
                alt='React terms wireframe'
                blurb={
                <React.Fragment>
                    <h3>Instructions</h3>
                    <p>
                        In this component tree, we will create a tiled view of terms. When a user clicks on the button in a tile to show the definition, display the corresponding definition and a button that says 'View Term'.
                        <ul className="text-left mt-3 ml-5">
                            <li>Create a component that will display each flash card</li>
                            <li>Create a SingleComponent that houses the single tile for each term.</li>
                            <li>On click of a button in each card show the definition instead of the term, along with a button that says 'View Term'.</li>
                        </ul>
                    </p>
                </React.Fragment>
                } />
                <hr />
            {/* Step 5 - Terms - Create the article.termsGallery */}
            <article className="termsGallery">
                {terms.map(x =>
                    <SingleTerm key={x.TermId} term={x.Term} definition={x.Definition}/>
                )}
            </article>
        </section>
    )
}
