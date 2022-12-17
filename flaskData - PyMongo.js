// Get the button and container elements from HTML
const button = document.getElementById("theButton")
const data = document.getElementById("info")

// Create an array of cars to send to the server

const languages = [
      { "lang":"Swedish", "origin":"Sweden" },
      { "lang":"Tamil", "origin":"India" },
      { "lang":"Finnish","origin": "Finland" }
     ];

// Create an event listener on the button element
button.onclick= function(){

// Get the reciever endpoint from Python using fetch
  fetch("http://127.0.0.1:5000/receiver", 
    {
      mode: "cors",
      //credentials: 'include',
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
        'Origin': 'http://127.0.0.1:5000/receiver'
      },
// Strigify the payload into JSON
    body:JSON.stringify(languages)}).then(res=>{
        if(res.ok){
          return res.json()
        }else{
          alert("something is wrong")
        }
      }).then(jsonResponse=>{
        
// Iterate through the data with Map and write your rendering logic
//        [jsonResponse].map(Main=> 
        jsonResponse.map(Main=> 
   Main._id==="Energy"? data.innerHTML +="<p>"+ Main._id+" "+" is a super-domain to invest":
   data.innerHTML +="<p>"+ Main._id+" "+"is a good domain to invest" ) 
} 
).catch((err) => console.error(err)); } 