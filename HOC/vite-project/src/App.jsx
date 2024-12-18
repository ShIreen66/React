import { useState } from 'react'
import Child from './components/Child'

const App = () => {
  const [data, setdata] =useState("important dataa")
  return (
    <div className="rounded w-[80%] mx-auto p-10 bg-red-400">
      <h1 className="text-5xl">HOC</h1>
    <div className="rounded w-[80%] mx-auto p-10 bg-zinc-200">
      <h1 className='text-xl'>App Component</h1>
      <Child data={data}/>
    </div>
    </div>
  )
}

export default App