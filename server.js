const express = require('express')
const path = require('path')
const Rollbar = require('rollbar')

// const rollbar = new Rollbar({
//     accessToken: '',
//     captureUncaught: true,
//     captureUnhandledRejections: true
// })
rollbar.log("Hello world")

const app = express()
app.use(express.json())