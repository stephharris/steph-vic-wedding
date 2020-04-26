const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const {
  NODE_ENV = 'development',
} = process.env;

if (NODE_ENV === 'development') {
  // pulls in environment variables from `.env` in the app's root
  require('dotenv').config();
}

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json())

  server.post('/api/crossword', (req, res) => {
    const { data } = req.body
    const secret = process.env.SECRET
    const secretUrl = process.env.SECRET_URL

    if(req.body.data === secret) {
      res.set('Content-Type', 'application/json');
      res.send({ message: 'You did it!', link: secretUrl })
    } else {
      res.set('Content-Type', 'application/json');
      res.send({ message: 'Not quite! Try again.' })
    }
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Read on http://localhost:3000')
  })
})
