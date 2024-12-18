const InformationContext = (props) => {
    console.log(props)
  return (
    <div className="w-[80%] mx-auto mt-10 p-10 bg-zinc-300">{props.children}</div>
  )
}

export default InformationContext