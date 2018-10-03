let express = require("express")
let app = express()
let bodyParser = require("body-parser")
let session = require("express-session")


// template
app.set("view engine", "ejs")


// middleware
app.use("/assets", express.static("public"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({
  secret: 'parapluie',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
app.use(require('./middlewares/flash'))

// routes
app.get('/', (request, response) => {
  console.log(request.session)
  response.render('pages/index')
});

app.post('/', (request, response) => {
  if (request.body.message === undefined || request.body.message ==="") {
    request.flash('error', "Erreur 😖")
    response.redirect('/')
  }
})


app.listen(8080)
