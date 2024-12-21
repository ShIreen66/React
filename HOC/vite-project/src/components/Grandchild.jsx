import { useContext, useState } from "react"
import { datacontext } from "../context/InformationContext"

const Grandchild = (props) => {
  const [data, setdata] = useContext(datacontext);
  return (
    <div>
        <h1 className="text-md">Grandchild Component</h1>
        <h2 className="font-extrabold">{data}</h2>
    </div>
  )
}

export default Grandchild