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