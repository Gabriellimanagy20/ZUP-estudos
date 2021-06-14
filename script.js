const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');
const img3 = document.querySelector('#img3');
const img4 = document.querySelector('#img4');

const char1 = document.querySelector('#char1');
const char2 = document.querySelector('#char2');
const char3 = document.querySelector('#char3');
const char4 = document.querySelector('#char4');


gerarRandom = () => {
    return Math.floor(Math.random() * 671);
}

reqAPI = () => {
    const allIDs = gerarRandom() + "," + gerarRandom() + "," + gerarRandom() + "," + gerarRandom();
    return fetch(`https://rickandmortyapi.com/api/character/${allIDs}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        console.log(data);
        img1.src = data[0].image; 
        img2.src = data[1].image; 
        img3.src = data[2].image; 
        img4.src = data[3].image; 

        img1.alt = "Nome do personagem: " + data[0].name; 
        img2.alt = "Nome do personagem: " + data[1].name; 
        img3.alt = "Nome do personagem: " + data[2].name; 
        img4.alt = "Nome do personagem: " + data[3].name;

        char1.innerHTML = data[0].name;
        char2.innerHTML = data[1].name;
        char3.innerHTML = data[2].name;
        char4.innerHTML = data[3].name;
    })
}

reqAPI();