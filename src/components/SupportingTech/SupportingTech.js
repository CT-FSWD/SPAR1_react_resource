import React from 'react'
import Banner from '../Banner'
import './SupportingTech.css'
import bannerImage from '../../images/supportingTechBanner.png'
import SingleTech from './SingleTech'

export default function SupportingTech() {
    return (
        <section className="tech">
            <Banner image={bannerImage} description="Nodejs Banner" heading="Supporting Technologies"/>
            <div className="techGallery">
                <SingleTech tech="Node.js" desc="An asynchronous, server-side environment that can be used for server-side tasks like db connections, file upload, and authentication." url="https://nodejs.org" />
                <SingleTech tech="NPM" desc="The world's largest software registry. Like NuGet in the .NET framework, NPM is the way we can install code packages for use in our app." url="https://www.npmjs.com/" />
                <SingleTech tech="Webpack" desc="Webpack is a module bundling technology that creates modules to increase efficiency of a JS applications. Webpack utilizes JS modules to package together files that need to run a specific portion of the application." url="https://webpack.js.org" />
                <SingleTech tech="JSX" desc="JSX is an HTML/XML-like syntax which allows us the ability to code HTML structures directly into our JS code base. This technology is a syntax extension to JavaScript that requires Babel as well." url="https://facebook.github.io/jsx/" />
                <SingleTech tech="Babel" desc="Babel is a JS compiler. It is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JS for older browsers. It also transpiles JSX code into JS for the browser to interpret." url="https://babeljs.io/" />
            </div>
        </section>
    )
}
