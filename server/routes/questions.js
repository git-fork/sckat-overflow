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

// GET /api/questions
app.get('/', (req, res) => res.status(200).json(questions))

// GET /api/questions/:id
app.get('/:id', (req, res) => {
  const { id } = req.params
  const q = questions.find(({ _id }) => _id === +id)
  res.status(200).json(q)
})

// POST /api/questions
app.post('/', (req, res) => {
  const question = req.body
  question._id = +new Date() // timestamp
  question.user = {
    email: 'nina@scholz.com',
    password: '123456',
    firstName: 'Nina',
    lastName: 'Scholz'
  }
  question.createdAt = new Date()
  question.answers = []
  questions.unshift(question)
  res.status(201).json(question)
})

export default app
