module.exports = app =>{

    app.get('/api/surveys', (req, res) => {

    })
}
    app.post('/api/surveys', (req, res) => {
        //get 4 pieces of data: Title, subject, body, recipients

    })


    app.post('/api/surveys/email-webhook', (req, res) => {
        //record feedback from respondent's action in the email
    })
}