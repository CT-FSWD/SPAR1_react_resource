//Step 6 - Terms - MINILAB
import React, { useState } from 'react'

export default function SingleTerm(props) {
    const [showDef, setShowDef] = useState(false);

    return (
        <section className="singleTerm">
            {!showDef &&
                <>
                {/* The empty tag that surrounds this return is a JSX work around. JSX expects to return one element with other elements nested inside. Below, we tell React we don't want an unnecessary element in the UI. This will only render the h2, h3, and button to the screen. */}
                    <h2>Term</h2>
                    <h3>{props.term}</h3>
                    <button className="btn btn-color" onClick={() => setShowDef(true)}>
                        Show Definition
                    </button>
                </>
            }
            {showDef &&
                <>
                    <h2 style={{backgroundColor : 'orange', color: 'black'}}>{props.term}</h2>
                    <h3>{props.definition}</h3>
                    <button className="btn btn-color" style={{backgroundColor: 'orange', color: 'black'}} onClick={() => setShowDef(false)}>Show Term</button>
                </>
            }
        </section>
    )
}
