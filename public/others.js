async function getData() {
    const response = await fetch('/db')
    const json = await response.json()
    
    console.log(json)

    for(let item of json) {
        const lat = item.data.coords.lat
        const lon = item.data.coords.lon
        
        const reason = item.data.reason

        const marker = L.marker([lat, lon]).addTo(map).bindPopup(reason).openPopup()
        
    }
    
}

const map = L.map('mapid').setView([-19, 30], 7);

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(map);


getData()