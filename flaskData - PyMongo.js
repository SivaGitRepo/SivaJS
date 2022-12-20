// Get the button and container elements from HTML
const button = document.getElementById("theButton")
const data = document.getElementById("info")

const inputData = { "PEfrom":1.0, "PEto":5.0, "PBfrom":1.0, "PBto":7.0 , "TurnoverCrores": 0};

// Create an event listener on the button element
button.onclick= function(){

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
        body:JSON.stringify(inputData)})
    .then(function (response) {
        return response.json()
    }).then(function (text) {
        //console.log('GET response text:')
        var keys = []
        document.write("<table border==\"1\"><tr>")
        for (key in text[0]) {
            document.write('<td>' + key + '</td>')
        }
        document.write("</tr>")
        for (var i = 0; i < text.length; i++) {
            document.write('<tr>')
            for (key in text[i]) {
                document.write('<td>' + text[i][key] + '</td>')
            }
            document.write('</tr>')
        }
        document.write("</table>")
    })
}