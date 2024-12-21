import { useState } from 'react'
import Child from './components/Child'

const App = () => {

  return (
    <div className="rounded w-[80%] mx-auto p-10 bg-red-400">
      <h1 className="text-5xl">HOC (Higher Order Component)</h1>
    <div className="rounded w-[80%] mx-auto p-10 bg-zinc-200">
      <h1 className='text-xl'>App Component</h1>
      <Child />
    </div>
    </div>
  )
}

export default App

