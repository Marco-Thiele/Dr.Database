let url = 'https://marco-thiele.com/Dr.Database/doctors.json';
let doctors;


fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonResponse) {
        // Hier kannst du auf die JSON-Daten zugreifen, z.B. jsonResponse.property
        doctors = jsonResponse;
        console.log('doctors', doctors);

    })
    .catch(function (error) {
        console.log('Fehler beim Laden der JSON-Daten: ', error);
    });


function renderDocs() {
    
    doctors.forEach(doc => {
        let singleDoc = document.getElementById('allDoctors');
        singleDoc.innerHTML += /*html*/`
                    <div class="doc-contant" onclick="showOverlay(${`doc.id`})">
                        <div class="profil-img">
                            <img src="${doc.img}" alt="">
                        </div>
                        <div class="text-center-width">
                            <div>
                            ${doc.title} ${doc.first_name} ${doc.last_name}
                            </div>
                            <div>
                            ${doc.zipcode} ${doc.city} ${doc.street}
                            </div>
                        </div>
                        <div class="text-center-width">
                        ${doc.specialities}
                        </div>
                    </div>`
    });
} 

function showOverlay(i) {
    let overlay = document.getElementById('overlay');
    overlay.classList.remove('d-none');
    let doc = doctors[i];
    overlay.innerHTML = /*html*/ `
        <div >
        <img class="overlay-profil-img" src="${doc.img}" alt="">
        </div>
        <div class="title">
            ${doc.title}
        </div>
        <div class="name">
            ${doc.first_name} ${doc.last_name}
        </div>
        <div class="addresse">
            ${doc.zipcode} ${doc.city} ${doc.street}
        </div>
        <div class="open">

        </div>`
}