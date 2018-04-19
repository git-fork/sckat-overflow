import express from 'express'

const app = express.Router()

const question = {
  _id: 1,
  title: 'How do JavaScript closures work?',
  description: 'How would you explain JavaScript closures to someone with a knowledge of the concepts they consist of (for example functions, variables and the like), but does not understand closures themselves? I ...',
  createdAt: new Date(),
  icon: 'devicon-javascript-plain colored',
  answers: [],
  user: {
    firstName: 'Luis',
    lastName: 'Mendoza',
    email: 'luis@mendoza.com',
    password: '123456'
  }
}

const questions = new Array(10).fill(question)

// /api/questions
app.get('/', (req, res) => res.status(200).json(questions))

// /api/questions/:id
app.get('/:id', (req, res) => res.status(200).json(question))

export default app
