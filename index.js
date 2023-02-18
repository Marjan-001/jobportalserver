const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());

const freshersJobs = require('./data/allFresherJobs.json')
const experienceJobs = require('./data/allExperience.json')
const topCompany = require('./data/topcompany.json')

app.get('/', (req, res) => {
    res.send('running')
})

app.get('/freshers-jobs', (req, res) => {
    res.send(freshersJobs)
})
app.get('/experience-jobs', (req, res) => {
    res.send(experienceJobs)
})
app.get('/topcom', (req, res) => {
    res.send(topCompany)
})
app.listen(port, () => {
    console.log('api running', port)
})