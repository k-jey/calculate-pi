const express = require('express')
require('./db/mongoose')
const Pi = require('./models/pi')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/pi', async (req, res)=> {
    // res.send('testing')
    const pie = new Pi({
        lastValue: 3,
        lastDiviser: 2,
        lastMulti: -1,
        sunCircum: 3
    })

    try{
        await pie.save()
        res.status(201).send(pie)
    }catch(e){
        res.status(400).send()
    }
})

app.get('/pi', async (req, res)=> {
    
    try{
        const pie = await Pi.find()
        console.log(pie)
        res.send(pie)
    }catch(e){
        res.status(400).send()
    }
})

app.patch('/pi', async (req, res)=> {
    
    try{
        const pi = await Pi.findOne()

        let {lastValue, lastDiviser, lastMulti} = pi

        let devision = 0

        for (let i = 0; i < 3; i++){
            if (devision === 0)
            devision = lastDiviser
            else {
                lastDiviser = lastDiviser + 1
                devision = devision * (lastDiviser)
            }
            // console.log(devision)
        }

        const newMulti = lastMulti *(-1)
        const newValue = lastValue + ((4/devision)*newMulti)

        pi.lastValue = newValue
        pi.lastDiviser = devision
        pi.lastMulti = newMulti
        pi.sunCircum = newValue*432288*2
        await pi.save()
        res.send(pi)
    }catch(e){
        res.status(400).send()
    }
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})