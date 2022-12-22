// Get the button and container elements from HTML
const button = document.getElementById("theButton")
const data = document.getElementById("info")

// Create an event listener on the button element
button.onclick= function(){

    const PEfrom = document.getElementById("PEf").value;
    const PEto = document.getElementById("PEt").value;
    const PBfrom = document.getElementById("PBf").value;
    const PBto = document.getElementById("PBt").value;
    const Turnover = document.getElementById("Turnover").value;
    console.log(PEfrom)
    console.log(PEto)
    console.log(PBfrom)
    console.log(PBto)
    console.log(Turnover)
    const inputData = { "PEfrom":Number(PEfrom), "PEto":Number(PEto), "PBfrom":Number(PBfrom), "PBto":Number(PBto) , "TurnoverCrores": Number(Turnover)};
    
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