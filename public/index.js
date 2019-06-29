document.getElementById('submit').addEventListener('click', event => {
    if('geolocation' in navigator) {
        console.log('Geolocation available')
        navigator.geolocation.getCurrentPosition( async position => {
            console.log(position)
            const lat = position.coords.latitude
            const lon = position.coords.longitude
            const reason = document.getElementById('reason').value
            const data = {reason: reason, coords: {lat,lon}}     
            
            const options = { 
                method: 'Post',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(data)
            }

            const response = await fetch('/reason',options)
            const json = await response.json()
            console.log(json)
        }  )
    } else {
        console.log('Geolocatin not available')
    }
})   

