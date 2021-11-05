
import React, { useCallback, useEffect, useState } from 'react'
import Navigation from './components/Navigation';
import Field from './components/Field';
import Button from './components/Button';
import ManipulationPanel from './components/ManipulationPanel';
import { initFields, getFoodPosition } from './utils';



const initalPosition = { x: 17, y: 17 }
const initialValues = initFields(35, initalPosition)
const defaultInterval = 100

const GameStatus = Object.freeze({
  init: 'init',
  playing: 'playing',
  suspended: 'suspended',
  gameover: 'gameover'
})


const Direction = Object.freeze({
  up: 'up',
  right: 'right',
  left: 'left',
  down: 'down',
})

const DirectionkeyCodeMap = Object.freeze({
  37: Direction.left,
  38: Direction.up,
  39: Direction.right,
  40: Direction.down
})

const OppositeDirection = Object.freeze({
  up: 'down',
  right: 'left',
  left: 'right',
  down: 'up',
})

const Delta = Object.freeze({
  up: { x: 0, y: -1 },
  right: { x: 1, y: 0 },
  left: { x: -1, y: 0 },
  down: { x: 0, y: 1 }
})

let timer = undefined

const unsubscribe = () => {
  if (!timer) {
    return
  }
  clearInterval(timer)
}

const isCollision = (fileSize, position) => {
  if (position.y < 0 || position.x < 0) {
    return true;
  }
  if (position.y > fileSize - 1 || position.x > fileSize - 1) {
    return true;
  }
  return false;
};

const isEatingMyself = (fields, position) => {
  return fields[position.y][position.x] === 'snake'
}

function App() {
  const [fields, setFields] = useState(initialValues)
  const [body, setBody] = useState([])
  const [status, setStatus] = useState(GameStatus, 'init')
  const [direction, setDirection] = useState(Direction.up)
  const [tick, setTick] = useState(0)

  useEffect(() => {
    setBody([initalPosition])
    timer = setInterval(() => {
      setTick(tick => tick + 1)
    }, defaultInterval)
    return unsubscribe
  }, [])

  useEffect(() => {
    if (body.length === 0 || status !== GameStatus.playing) {
      return
    }
    const canContinue = handleMoving()
    if (!canContinue) {
      unsubscribe()
      setStatus(GameStatus.gameover)
    }
  }, [tick])

  const onStart = () => setStatus(GameStatus.playing)

  const onStop = () => setStatus(GameStatus.suspended)

  const onRestart = () => {
    timer = setInterval(() => {
      setTick(tick => tick + 1)
    }, defaultInterval)
    setDirection(Direction.up)
    setStatus(GameStatus.init)
    setBody([initalPosition])
    setFields(initFields(35, initalPosition))
  }

  const OnChangeDirection = useCallback((newDirection) => {
    if (status !== GameStatus.playing) {
      return direction
    }
    if (OppositeDirection[direction] === newDirection) {
      return
    }
    setDirection(newDirection)
  }, [direction, status])

  useEffect(() => {
    const handlekeyDown = (e) => {
      const newDirection = DirectionkeyCodeMap[e.keyCode];
      if (!newDirection) {
        return;
      }


      OnChangeDirection(newDirection);

    };
    document.addEventListener('keydown', handlekeyDown);
    return () => document.removeEventListener('keydown', handlekeyDown)
  }, [OnChangeDirection])

  const handleMoving = () => {
    const { x, y } = body[0]
    const delta = Delta[direction]
    const newPosition = {
      x: x + delta.x,
      y: y + delta.y
    }
    if (isCollision(fields.length, newPosition) || isEatingMyself(fields, newPosition)) {
      unsubscribe()
      return false
    }
    const newBody = [...body]
    if (fields[newPosition.y][newPosition.x] !== 'food') {
      const removingTrack = newBody.pop()
      fields[removingTrack.y][removingTrack.x] = ''
    } else {
      const food = getFoodPosition(fields.length, [...newBody, newPosition])
      fields[food.y][food.x] = 'food'
    }
    fields[newPosition.y][newPosition.x] = 'snake'
    newBody.unshift(newPosition)
    setBody(newBody)
    setFields(fields)
    return true
  }



  return (
    <div className="App">
      <header className="header">
        <div className="title-container">
          <h1 className="title">Snake Game</h1>
        </div>
        <Navigation />
      </header>
      <main className="main">
        <Field fields={fields} />
      </main>
      <footer className="footer">
        <Button status={status}
          onStop={onStop}
          onStart={onStart}
          onRestart={onRestart}
        />

        <ManipulationPanel onChange={OnChangeDirection} />
      </footer>
    </div>
  );
}

export default App;