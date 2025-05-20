//          VALIDATIONS

const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/ProductDb')
    .then(() => {
        console.log('Connected')
    })
    .catch(err => {
        console.log(err)
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        maxLength: 25
    },
    price: {
        type: Number,
        require: true,
        default: 0,
        min: 0,
        max: 2000,
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        onlineStock: {
            type: Number,
            default: 0
        },
        storeStock: {
            type: Number,
            default: 0
        }
    }
})
const Product = new mongoose.model('Product',productSchema)

// const newProduct = new Product({name: 'Rtx 5080', price: 999, onSale: true, categories: ['Hardware','GPU']})
// newProduct.save()

// Product.insert({name: 'Rtx 5090', price: 1999, onSale: true, categories: ['Hardware','GPU']})
// Product.save()

//This will be failed only because runValidators included. Otherwise, update method will skip and update validations
// Product.findOneAndUpdate({name: 'Rtx 5090'},{price: -1899},{runValidators: true, new: true})
//     .then(p => console.log(p))
//     .catch(err=> console.log(err))

// --- Middleware Example ---
    
productSchema.pre('save', async function () {
    console.log(`About the save: ${this.name}`)
})

productSchema.post('save', async function () {
    console.log(`This saved!!! ${this.name}`)
})

Product.insert({name: 'RX 7900', price: 899, onSale: true, categories: ['Hardware','GPU','AMD']})
    .then(() => {
        console.log('its worked')
    })
    .catch((err) => {
        console.log(err)
    })
Product.save()

