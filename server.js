let app = require("express")()

app.set("view engine", "ejs")

app.get('/', (request, response) => {
  response.send('Coucou')
});


app.listen(8080)
