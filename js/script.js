var map = L.map('map').setView([54.3781, -2.8], 6);

var pastLocations = [];
var liveLocations = [];

db.collection('shows').orderBy('showDate').get().then((querysnapshot) => {
    querysnapshot.forEach((doc) => {
        const dtStr = doc.data().showDate;
        const [d, m, y] = dtStr.split(/-|\//); // splits "26-02-2012" or "26/02/2012"
        const date = new Date(d, m - 1, y);
        //console.log(date.getTime() + " " + doc.data().venueName);
        if (date.getTime() > Date.now()) {
            //console.log(doc.data());
            liveLocations.push(doc.data())
        } else {
            pastLocations.push(doc.data());
        }
        //console.log(doc.data().showDate);
    })
}).then(() => {
    console.log(liveLocations);
    pastLocations.forEach((location) => {
        //console.log(location.cityName);
        var marker = L.marker([location.latitude, location.longitude], { icon: pastIcon }).addTo(map);
    })

    liveLocations.forEach((location) => {
        //console.log(location.cityName);
        var marker = L.marker([location.latitude, location.longitude], { icon: liveIcon })
            .addTo(map)
            .bindPopup(`
        <h2>${location.venueName}</h2>
        <a href='${location.ticketLink}'>Click for Tickets</a>
        `);
    })

});


//var markers = new L.MarkerClusterGroup();

var pastIcon = L.icon({
    iconUrl: '../assets/pastShow.png',

    iconSize: [25, 25], // size of the icon
    iconAnchor: [25, 25], // point of the icon which will correspond to marker's location

});

var liveIcon = L.icon({
    iconUrl: '../assets/liveShow.png',

    iconSize: [40, 40], // size of the icon
    iconAnchor: [30, 30], // point of the icon which will correspond to marker's location

});

pastLocations.forEach((location) => {
    //console.log(location.cityName);
    var marker = L.marker([location.lat, location.long], { icon: pastIcon }).addTo(map);
})

// liveLocations.forEach((location) => {
//     //console.log(location.cityName);
//     var marker = L.marker([location.lat, location.long], { icon: liveIcon })
//         .addTo(map)
//         .bindPopup(`
//     <h2>${location.venueName}</h2>
//     <a href='${location.ticketLink}'>Click for Tickets</a>
//     `);
// })

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
    maxZoom: 10,
}).addTo(map);