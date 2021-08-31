const express = require('express')
const path = require('path')
const Rollbar = require('rollbar')

const rollbar = new Rollbar({
    accessToken: 'b8e3a32e1f684be495c8e577606c9582',
    captureUncaught: true,
    captureUnhandledRejections: true
})

rollbar.log("Hello world")

const app = express()
app.use(express.json())

const port = process.env.PORT || 4550

app.use(rollbar.errorHandler())

app.listen(port, () => console.log(`Take us to warp ${port}`))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
    rollbar.info('html file served successfully.')
})

app.post('/api/cats', (req, res) => {
    function isValidJSON(text){
        try{
        nonExistentFunction()
    } catch (error) {
        console.error(error)
    }
}
})