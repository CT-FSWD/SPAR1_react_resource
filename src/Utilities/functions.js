//Step 7 - Read Data - npm install axios, import axios, create fetchData below
import axios from 'axios'


//Step 9 - Functions - Create addTwoNumbers
//Using the export keyword for each of the functions below will allow us to import and call upon those functions in other files in the codebase. This is known as a JavaScript Module, where we can import specific JS objects into other files for use. It is good practice to keep sensitive functionality in its own file. It allows for security in connecting to data and provides a little bit more simplicity in maintaining/debugging the functionality.

export function addTwoNumbers(a, b){
    //Remember that JS is not typesafe, so below we have to force JS to treat both variables as numbers to keep them from concatenating and instead return the sum of the addition of the two numbers.
    return Number(a) + Number(b);
}

//Step 13 - Functions
export function login(username, password){
    if(username === 'jcaldwell' && password === '1234')
    {
        return true;
    }
    else
    {
        return false;
    }
}

//Step 15c - Create the showFavPlace function
export function showFavPlace(place){
    let message;
    switch(place){
        case 'Arizona':
            message = `Sorry, but it is WAY TOO HOT in ${place}.`;
            break;
        case 'Canada':
            message = `Don't forget your passport when travelling to ${place}.`;
            break;
        case 'Colorado':
            message = `${place}! Love the mountains!`;
            break;
        case 'Georgia':
            message = `Bring me back some ${place} peaches!`;
            break;
        case 'Alabama':
            message = `${place}! Jenna's favorite...Roll Tide!`
            break;
        case '':
            message = "I'm not sure what you mean...Can you be more specific?";
            break;
            default:
                message = `${place} is a great choice to visit!`;
                break;
    }

    return message;
}


//Below we add the async function to allow the functionality to run async to any other functionality. Notice the await keyword below, as this allows us to wait for the promise of data to be returned before returning the JSON data from the Resources API
export async function fetchData(){
    const response = await axios.get('https://api.jamesrcaldwell.com/api/resources/');
    return response;
}