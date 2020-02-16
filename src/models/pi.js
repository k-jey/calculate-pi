const monggose = require('mongoose')

const piSchema = new monggose.Schema({
    lastValue: {
        type: Number,
        required: true,
        trim: true
    },
    lastDiviser:{
        type: Number
    },
    lastMulti: {
        type: Number
    },
    sunCircum: {
        type: Number
    }
}, {
    timestamps: true
})

const Pi = monggose.model('Pi', piSchema)

module.exports = Pi