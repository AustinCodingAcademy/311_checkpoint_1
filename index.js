const express = require('express')
const bodyParser = require("body-parser");

const app = express()
const port = process.env.PORT || 4000

app.get('/', (req, res) => res.send('default route'))

app.use("/", express.static('4000'));
app.use(bodyParser.json());


app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
}); 


