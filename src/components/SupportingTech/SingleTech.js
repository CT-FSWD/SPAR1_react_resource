import React from 'react'

export default function SingleTech(props) {
    return (
       <article className="singleTech">
           <h2>{props.tech}</h2>
           <p>{props.desc}</p>
           <a href={props.url} className="btn btn-color" rel="noreferrer" target="_blank">{props.tech}</a>
       </article>
    )
}
