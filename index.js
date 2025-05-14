const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/MovieDb')
    .then(() => {
        console.log('Connected')
    })
    .catch(err => {
        console.log('Error definition:'+err)
    } )

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String,
})

const Movie = mongoose.model('movie',movieSchema)

// ----- Insert Data by Mongooes ------
// const firstMovie = new Movie({title:'Naruto',year: 1998, score: 8.1, rating:'PG-13'})
// firstMovie.save()
// Movie.insertMany([
//     {title:'One piece',year: 1998, score: 9.2, rating: 'PG'},
//     {title:'Stains Gate',year: 2005, score: 7.2, rating: 'R'},
//     {title:'Demon Slayer',year: 2022, score: 9.0, rating: 'PG-13'},
//     {title:'Goblin Slayer',year: 2021, score: 9.1, rating: 'R'},
// ])
//     .then(data => {
//     console.log(`It's WORKED`)
//     console.log(data)
//     })
//     .catch(err => {
//         console.log(err)
//     })

    
// try {
//     mongoose.connect('mongodb://127.0.0.1:27017/test')
//     console.log('Connected')
// } catch (error) {
//     console.log(error)
// }