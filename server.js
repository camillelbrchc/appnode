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


// routes
app.get('/', (request, response) => {
  response.render('pages/index')
});

app.post('/', (request, response) => {
  if (request.body.message === "undifined" || request.body.message ==="") {
    request.session.error = "Erreur 😖"
    response.render('pages/index', {error: "Pas de message 😢"})
  }
})


app.listen(8080)
