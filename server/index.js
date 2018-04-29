import http from 'http'
import Debug from 'debug'
import app from './app'
import mongoose from 'mongoose'
import { mongoUrl } from './config'

const PORT = 3000
const debug = new Debug('sckat-overflow:root')

async function start() {
  await mongoose.connect(mongoUrl)

  app.listen(PORT, () => {
    debug(`Server running at port ${PORT}`)
  })
}

start()
