const Grandchild = (props) => {
  return (
    <div>
        <h1 className="text-md">Grandchild Component</h1>
        <h2 className="font-extrabold">{props.data}</h2>
    </div>
  )
}

export default Grandchild