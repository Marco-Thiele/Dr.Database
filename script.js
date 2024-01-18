let url = 'https://marco-thiele.com/Dr.Database/doctors.json';
let doctors;


fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonResponse) {
        // Hier kannst du auf die JSON-Daten zugreifen, z.B. jsonResponse.property
        doctors = jsonResponse;
        console.log('doctors',doctors);
       
    })
    .catch(function(error) {
        console.log('Fehler beim Laden der JSON-Daten: ', error);
    });