

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    let url = '';

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
