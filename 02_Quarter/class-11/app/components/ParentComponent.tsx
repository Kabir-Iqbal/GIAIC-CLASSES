import ChildComponent from "./ChildComponent"

const ParentComponent = () => {
    let name = "Ali Jawwad"

    return (
        <div className="mt-10">
            <ChildComponent name={name} />
        </div>
    )
}

export default ParentComponent
