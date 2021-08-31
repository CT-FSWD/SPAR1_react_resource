import React from 'react'

export default function Comparison(props) {
    return (
        //Below we add a dynamic class for the purposes of styling. You could also use this as a filtering mechanism or for other functional purposes in a React component.
        <section className={`col-md-3 ${props.title}`}>
            <img src={props.image} alt={props.desc} />
            <h3>{props.title}</h3>
            <p>{props.writeUp}</p>
            <a href={props.link} rel="noreferrer" target="_blank" className="btn btn-color">{props.linkText}</a>
        </section>
    )
}
