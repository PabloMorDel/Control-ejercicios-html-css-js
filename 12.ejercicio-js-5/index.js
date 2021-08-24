'use strict';

const getCharacters = async () => {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/episode');
        const data = await response.json();
        console.log(data);
        const januaryDrop = [];
        for (const dato of data) {
            if (dato.air_date.includes('January')) {
                januaryDrop.push(dato.characters);
            }
        }
        console.log(januaryDrop);
    } catch (error) {
        console.error('Ya la has liao');
    }
};

getCharacters();

// no funciona :(
// const januaryDrop = data.filter((month) => {
//     if (month.air_date.includes('January')) return month.characters;
// });
