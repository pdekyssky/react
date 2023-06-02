import "./Example.css"

const Example = () => {
    //pure JavaScript

    const myArr = ["Peter", "David", "Tomas"]
    //console.log(myArr[0])

    const [stundet1, student2, student3] = myArr

   /* console.log(stundet1)
    console.log(student2)
    console.log(student3)*/
    
    //pure JavaScript
    let title = "My first title"

    const buttonHandler = () => {
        console.log("click")
    }

    return(
        <div>
            <h1>{title}</h1>
            <button type="button" onClick={buttonHandler}>Change title</button>
        </div>
    )
}

export default Example