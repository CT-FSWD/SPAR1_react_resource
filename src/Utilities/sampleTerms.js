//Step 1 - Terms - create the sampleTerms object and export it

//Here we create a local JSON object that will serve as terminology to remember for React. 
const sampleTerms = [
    {
        TermId: 1,
        Term: 'Component',
        Definition: 'A reusable piece of the UI'
    },
    {
        TermId: 2,
        Term: 'Prop',
        Definition: 'An object that allows us to pass data from parent components to child components'
    },
    {
        TermId: 3,
        Term: 'Callback Function',
        Definition: 'A JS function that allows child components to pass information back to their parent component'
    },
    //MINILAB - Add Functional Components and Class Components. In your own words, provide a definition of each. Add other terms we have talked about from the week here.
    {
        TermId: 4,
        Term: 'Functional Component',
        Definition: 'A JS Function that returns a portion of UI to the virtual DOM'
    },
    {
        TermId: 5,
        Term: 'Class Component',
        Definition: 'A JS Class that returns a portion of UI to the virtual DOM'
    }
];

export default sampleTerms;