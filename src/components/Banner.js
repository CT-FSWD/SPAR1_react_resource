//Step 5 - Components - Create the Banner component.
//Show students rfc => tab to create a React functional component using the ES7 React Snippets extension.
import React from 'react'
import '../components/AboutReact/AboutReact.css'

//We will use this component at the top of each page, creating a Banner image that will display a heading and an image. We create the necessary HTML structure, but to make this component reusable we can poss props through from the top level component from each component tree (Home, AboutReact, Resources, SupportingTech, and ReactTerms components). See the parameters of this function below where we pass props from the parent component to this component to make the UI more dynamic and reusable.
export default function Banner(props) {
    return (
        <article className="banner">
            {/* Below we call to props.variableName to access the value of the prop being passed from the parent component to this component. See the call to the Banner component in AboutReact.js to see the complete implementation. */}
            <img src={props.image} alt={props.description} />
            <h2>{props.heading}</h2>
        </article>
    )
}
