import express from 'express'
import { questions } from './routes'

const app = express()

app.use('/api/questions', questions)

export default app
