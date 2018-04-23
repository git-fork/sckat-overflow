import express from 'express'

const app = express.Router()

const currentUser = {
  firstName: 'Nina',
  lastName: 'Scholz',
  email: 'nina@scholz.com',
  password: '123456'
}

function questionMiddleware(req, res, next) {
  const { id } = req.params
  req.question = questions.find(({ _id }) => _id === +id)
  next()
}

function userMiddleware(req, res, next) {
  req.user = currentUser
  next()
}

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
app.get('/:id', questionMiddleware, (req, res) => {
  res.status(200).json(req.question)
})

// POST /api/questions
app.post('/', userMiddleware, (req, res) => {
  const question = req.body
  question._id = +new Date() // timestamp
  question.user = req.user
  question.createdAt = new Date()
  question.answers = []
  questions.unshift(question)
  res.status(201).json(question)
})

// POST /api/questions/:id/answers
app.post('/:id/answers', questionMiddleware, userMiddleware, (req, res) => {
  const answer = req.body
  const q = req.question
  answer.createdAt = new Date()
  answer.user = req.user
  q.answers.unshift(answer)
  res.status(201).json(answer)
})

export default app
