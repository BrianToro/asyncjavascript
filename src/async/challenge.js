const fetchData = require('../utils/fetchData')
const API = 'https://rickandmortyapi.com/api/character/'

const anotherFunc = async  (url_api) => {
    try {
        const data = await fetchData(url_api)
        const pers = await fetchData(url_api + data.results[0].id)
        const origin = await fetchData(pers.origin.url)
        console.log(data.info.count)
        console.log(pers.name)
        console.log(origin.dimension)
    } catch(err){
        console.error(err);
    }
}

console.log('Hola')
anotherFunc(API)
console.log('Adios')