import { createContext, useState} from "react"
// 2. create the context and export it outside the function
  export const datacontext = createContext(null);
  const InformationContext = (props) => {

    // 1. generate / create the global data
    const [data, setdata] =useState("important dataa")
  
 
  
  return (
    // 3. wrap the children and pass the value with context provider
   <datacontext.Provider value={[data, setdata]}>
    {props.children}
   </datacontext.Provider> 
  )
}

export default InformationContext