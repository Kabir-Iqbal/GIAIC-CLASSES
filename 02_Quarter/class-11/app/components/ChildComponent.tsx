const ChildComponent = (props: any) => {
    console.log(props)
    return (
        <div>
            <h1 className="text-7xl">{props.name}</h1>
        </div>
    )
}

export default ChildComponent
