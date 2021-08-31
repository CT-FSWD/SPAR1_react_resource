//Step 12 - Components - Create the ComparisonGallery and Comparison Components
import React from 'react'

//Images
import vueImage from '../../images/vue-logo.png'
import angularImage from '../../images/angular-logo.png'
import reactImage from '../../images/logo192.png'

//Components to import
import Comparison from './Comparison'

export default function ComparisonGallery() {
    return (
        <article className="comparison">
            <h2 className="text-center">React vs. Angular vs. Vue</h2>
            <div className="comp-gallery">
                <Comparison
                    image={vueImage}
                    desc="Vue.js Logo"
                    title="Vue"
                    writeUp="Vue.js is a JS framework that came from an ex-Googler, Evan You. Founded in 2014, Vue has become popular, as it is lighter than React and Angular. It also has a lighter learning curve."
                    link="https://vuejs.org"
                    linkText="Vue Docs" />
                <Comparison
                    image={angularImage}
                    desc="Angular.js Logo"
                    title="Angular"
                    writeUp="Angular was developed by Google and was first released in 2010, making it the oldest of the front-end frameworks. It is coded in TypeScript (a JS extension library) and is based in MVC architecture. This framework is the largest in learning curve."
                    link="https://angular.io"
                    linkText="Angular Docs" />
                <Comparison
                    image={reactImage}
                    desc="ReactJS Logo"
                    title="React"
                    writeUp="React was first developed by Facebook in 2013. The size of the library and learning curve are middle of the road. The features of ReactJS are shown in the image below."
                    link="https://reactjs.org"
                    linkText="React Docs" />
            </div>
        </article>
        )
}
