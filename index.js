const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/MovieDb')
    .then(() => {
        console.log('Connected')
    })
    .catch(err => {
        console.log('Error definition:'+err)
    } )

// try {
//     mongoose.connect('mongodb://127.0.0.1:27017/test')
//     console.log('Connected')
// } catch (error) {
//     console.log(error)
// }

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String,
})
const Movie = mongoose.model('movie',movieSchema)

// --- Insert Data ---
const firstMovie = new Movie({title:'Naruto',year: 1998, score: 8.1, rating:'PG-13'})
firstMovie.save()
Movie.insertMany([
    {title:'One piece',year: 1998, score: 9.2, rating: 'PG'},
    {title:'Stains Gate',year: 2005, score: 7.2, rating: 'R'},
    {title:'Demon Slayer',year: 2022, score: 9.0, rating: 'PG-13'},
    {title:'Goblin Slayer',year: 2021, score: 9.1, rating: 'R'},
])
    .then(data => {
    console.log(`It's WORKED`)
    console.log(data)
    })
    .catch(err => {
        console.log(err)
    })
 
// --- Finding Data ---

// Movie.find({}).then(data => {
//      console.log(data)
// })
// Movie.find({year: {$gte: 2000}}).then(data => console.log(data))
// Movie.find({title: {$in: 'Naruto'}}).then(data => console.log(data))
// Movie.find({title: 'Naruto'}).then(data => console.log(data))

// Movie.findById('6824fa8715dc443a96029d5f').then(data => console.log(data))

// --- Update Data ---
//.updateOne & updateMany
// Movie.updateOne({title: 'Stains Gate'},{year: 2013}).then(m => console.log(m)) 
// This will not return updated value.
// Movie.findOneAndUpdate({title: 'Stains Gate'},{year: 2013},{new:true}).then(m => console.log(m))
// this will.

// --- Detele Data ---
//.deleteOne & .deleteMany
// Movie.findOneAndDelete({title:'Demon Slayer'}).then(m => console.log(m))
//Find with different methods will return the value you execute. So you can see the deleted data if you need.