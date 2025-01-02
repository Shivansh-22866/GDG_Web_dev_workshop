import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(5)

  const cardList = [
    {
      "id": 1,
      "title": "Card 1",
      "subtitle": "Lorem Ipsum dfsa"
    },
    {
      "id": 2,
      "title": "Card 2",
      "subtitle": "Lorem Ipsum dfsa"
    },
    {
      "id": 3,
      "title": "Card 3",
      "subtitle": "Lorem Ipsum dfsa"
    },
    {
      "id": 4,
      "title": "Card 4",
      "subtitle": "Lorem Ipsum dfsa"
    },
    {
      "id": 5,
      "title": "Card 5",
      "subtitle": "Lorem Ipsum dfsa"
    },
    {
      "id": 6,
      "title": "Card 6",
      "subtitle": "Lorem Ipsum dfsa"
    },
    {
      "id": 7,
      "title": "Card 7",
      "subtitle": "Lorem Ipsum dfsa"
    },
    {
      "id": 8,
      "title": "Card 8",
      "subtitle": "Lorem Ipsum dfsa"
    },
    {
      "id": 9,
      "title": "Card 10",
      "subtitle": "Lorem Ipsum dfsa"
    },
    {
      "id": 10,
      "title": "Card 10",
      "subtitle": "Lorem Ipsum dfsa"
    },
  ]

  const decrement = () => {
    if(count > 0) setCount(count - 1)
    else return;
  }

  const increment = () => {
    if(count >= 20) return;
    setCount(count + 1)
  }


  return (
    <>
      <div>
        Counter 1: {count}
      </div>
      <div>
        Counter 2: {count}
      </div>
      <div>
        Counter 3: {count}
      </div>

      <button onClick={() => increment()}>
        Increment
      </button>

      <button onClick={() => decrement()}>
        Decrement
      </button>

      {
        cardList.map((item) => (
          <Card key={item.id} title={item.title} subtitle={item.subtitle}>
          </Card>
        ))
      }

    </>
  )
}

export default App
