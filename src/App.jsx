import React from 'react'
import './index.css'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  return (
    <div className="container">
      <Header text="ToDo" />
      <Tasks />
    </div>
  )
}

export default App
