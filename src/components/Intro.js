//Step 8 - Components - This component will be reusable across every 'page' of our application. Here we will create a component to display an image, introductory blurb, and we will conditionally render a button if there are props passed in for url and linkText.
import React from 'react'
import './Intro.css'


export default function Intro(props) {
    return (
        <article className="component-intro">
            <img src={props.image} alt={props.alt} />
            <div className="text">
                {/* As part of the blurb prop, we will pass in HTML to render in this portion of the UI. Refer to the AboutReact component to see how this is implemented. */}
                {props.blurb}
           
            {/* The below syntax is called conditional rendering. We check to see if props.url exists, and if it does, we render an anchor tag. This is a JSX conditional statement and is similar to Razor syntax in the ASP.NET MVC environment. */}
            {props.url &&
                <a href={props.url} target="_blank" rel="noreferrer" className="btn btn-color">
                    {props.linkText}
                </a>
            }
             </div>
            <div className="clear"></div>
        </article>
    )
}
