

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    let url = 'http://api.openweathermap.org/data/2.5/weather?zip=12222&appid=94599f14bd184627cda123469c9d525d&units=metric';

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch(url)
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        document.getElementById('results').innerHTML = "temperature:"+data.main.temp+"<br> wather description:"+data.weather[0].description;
        
    })
}

export { handleSubmit }
