const quizData = [
  {
    question: 'Q1: Which language runs in a web browser?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    ans: 'd',
  },
  {
    question: 'Q2: What does CSS stand for?',
    a: 'Central Style Sheets',
    b: 'Cascading Style Sheets',
    c: 'Cascading Simple Sheets',
    d: 'Cars SUVs Sailboats',
    ans: 'b',
  },
  {
    question: 'Q3: What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Hypertext Markdown Language',
    c: 'Hyperloop Machine Language',
    d: 'Helicopters Terminals Motorboats Lamborginis',
    ans: 'a',
  },
  {
    question: 'Q4: What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    ans: 'b',
  },
  {
    question: 'Q5: Inside which HTML element <> do we put the JavaScript??',
    a: 'js',
    b: 'javascript',
    c: 'script',
    d: 'scripting',
    ans: 'c',
  },
]

const question = document.querySelector('.question')

const option1 = document.querySelector('#option1')
const option2 = document.querySelector('#option2')
const option3 = document.querySelector('#option3')
const option4 = document.querySelector('#option4')

const answers = document.querySelectorAll('.answer')
const submit = document.querySelector('#submit')
const showScore = document.querySelector('#showScore')

let questionCount = 0
let score = 0

const loadQuestion = () => {
  const questionList = quizData[questionCount]
  question.innerHTML = questionList.question
  option1.innerHTML = questionList.a
  option2.innerHTML = questionList.b
  option3.innerHTML = questionList.c
  option4.innerHTML = questionList.d
}
loadQuestion()

const getCheckAnswer = () => {
  let answer
  answers.forEach((currAnswer) => {
    if (currAnswer.checked) {
      answer = currAnswer.id
    }
  })
  return answer
  //  returning id of selected answer
}

const deSelectAll = () => {
  answers.forEach((currAnswer) => (currAnswer.checked = false))
}

submit.addEventListener('click', () => {
  const checkAnswer = getCheckAnswer()
  //   checkAnswer have id of selected answer option
  console.log(checkAnswer)

  if (quizData[questionCount].ans === checkAnswer) {
    score++
  }

  questionCount++

  deSelectAll()

  if (questionCount < quizData.length) {
    loadQuestion()
  } else {
    console.log(`Score is ${score}`)

    showScore.innerHTML = `
      <h3>Your Score is ${score}/${quizData.length} 🎖️ </h3>
      <button class='btn' onclick='location.reload()'>Try Again</button>
    `

    showScore.classList.remove('scoreArea')
  }
})
