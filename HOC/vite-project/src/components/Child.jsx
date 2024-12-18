import Grandchild from "./Grandchild"

const Child = (props) => {
  return (
    <div>
        <h1 className="text-lg">Child Component</h1>
        <Grandchild data={props.data}/>
    </div>
  )
}

export default Child