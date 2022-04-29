import mongodb from 'mongodb';
const client = new mongodb.MongoClient('mongodb+srv://admin:Password@cluster0.bfg4u.mongodb.net?retryWrites=true&w=majority');

await client.connect();

const db = client.db('Client_Streaming');
const tv = db.collection('Tv Shows');
const characters = db.collection('Characters');
const streaming = db.collection('Streaming Platform');

// await streaming.insertOne({
//     Name: 'Netflix'
// });
// await streaming.insertOne({
//     Name: 'Crunchyroll'
// });
// await streaming.insertOne({
//     Name: 'Hulu'
// });
// await characters.insertOne({
//     name: 'Eren',
//     Age: '18',
//     gender: 'Male',
//     tvShow: 'Attack on Titan',
// });
// await characters.insertOne({
//     name: 'Mikasa',
//     Age: '17',
//     gender: 'Female',
//     tvShow: 'Attack on Titan',
// });
// await characters.insertOne({
//     name: 'Armen',
//     Age: '18',
//     gender: 'Male',
//     tvShow: 'Attack on Titan',
// });
// await characters.insertOne({
//     name: 'Luffy',
//     Age: 17,
//     gender: 'Male',
//     tvShow: 'One Piece',
// });
// await characters.insertOne({
//     name: 'Zoro',
//     Age: 25,
//     gender: 'Male',
//     tvShow: 'One Piece',
// });
// await characters.insertOne({
//     name: 'Sanji',
//     Age: 23,
//     gender: 'Male',
//     tvShow: 'One Piece',
// });
// await characters.insertOne({
//     name: 'Dio',
//     Age: '305',
//     gender: 'Male',
//     tvShow: 'Jojo',
// });
// await characters.insertOne({
//     name: 'Giorno',
//     Age: '15',
//     gender: 'Male',
//     tvShow: 'Jojo',
// });
// await characters.insertOne({
//     name: 'Joseph',
//     Age: '21',
//     gender: 'Male',
//     tvShow: 'Jojo',
// });
// await tv.insertOne({
//     showName : 'Attack on Titan',
//     genre: 'Horror',
//     streamingPlatform: 'Crunchyroll',
//     year: '2013',
// });
// await tv.insertOne({
//     showName : 'One Piece',
//     genre: 'Adventure',
//     streamingPlatform: 'Crunchyroll',
//     year: '1999',
// });
// await tv.insertOne({
//     showName : 'JoJo',
//     genre: 'Adventure',
//     streamingPlatform: 'Netflix',
//     year: '2012',
// });

async function addStreaming(streamingName){
    await streaming.insertOne({
        Name: `${streamingName}`, 
})};

// addStreaming("Apple Tv");

async function addTvShow(showName, genre, streamingPlatform, year ){
    await tv.insertOne({
    showName : `${showName}`,
    genre: `${genre}`,
    streamingPlatform: `${streamingPlatform}`,
    year: `${year}`,
})};

// addTvShow('Hunter x Hunter','Adventure','Apple Tv','2014');

// const arrOfObj = [
//     {
//         name: 'todd',
//         age: '44'
//     },
//     {
//         name: 'zach',
//         age:'30',
//         gender: 'male'
//     },
//     {

//     },
// ]

// function addFileToCollection (collectionName,arrOfObj){
//     for(let i = 0; i < arrOfObj.length; i++){
//         await collectionName.insertOne(arrOfObj[i])
//     }
// }

async function addCharacter(name, Age, gender, tvShow ){
    await characters.insertOne({
        name: `${name}`,
        Age: `${Age}`,
        gender: `${gender}`,
        tvShow: `${tvShow}`,
})};

// addCharacter('Sasha', '19', 'Female', 'Attack on Titan')


async function showCharacters(){
    const characterfound = characters.find({})
    const results = await characterfound.toArray()
    return results
};

const allCharacters = await showCharacters()
// console.log(allCharacters)


async function showTv(){
    const tvFound = tv.find({})
    const results = await tvFound.toArray()
    return results
};

const allTv = await showTv()
// console.log(allTv)

async function showStreaming(){
    const streamingFound = streaming.find({})
    const results = await streamingFound.toArray()
    return results
};

const allStreaming = await showStreaming()
// console.log(allStreaming)



console.log('Connect');
await client.close();