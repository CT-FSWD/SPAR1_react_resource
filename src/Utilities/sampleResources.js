//Step 1 - Read Data - Create sampleResources
//Below is a JSON object - JavaScript Object Notation. Because JSON is written in JavaScript, it has become the most popular way to transport data throughout an application or even between two applications, allowing the browser to interpret the object without a parser. In contrast to JSON, XML is another way to transport data but it does require a parser since the browser cannot interpret XML.
const sampleResources = [
    {
         Category: {
             CategoryId: 5, 
             CategoryName: "ReactJS", 
             CategoryDescription: "Information about ReactJS"
         },
         CategoryId: 5,
         Description: "First Test Object",
         LinkText: "Test Data",
         Name: "Local Data Test",
         ResourceId: 1,
         Url: "http://test.test"
     },
     {
         Category: {
             CategoryId: 3, 
             CategoryName: "CSS", 
             CategoryDescription: "Information about CSS"
         },
         CategoryId: 3,
         Description: "",
         LinkText: "Another Test",
         Name: "Local Data Test v2",
         ResourceId: 2,
         Url: "http://test2.test"
     }
 ]

 //Below, we export the sampleResources object. We can import this object just like we have functions and components up to this point. We will use this as our local, fallback data in case the API is unavailable in Resources.js.
 export default sampleResources;