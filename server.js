const express = require('express');
const bodyParser = require('body-parser')
const connectDB = require('./config/db')
const path = require('path')

const cors = require('cors')
const app = express();

connectDB()
app.use(bodyParser.json())
app.use(cors())

app.use('/api/posts', require('./routes/api/posts'))

//production assets

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server starting at ${PORT}`))