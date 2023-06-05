



const App = () => {
  //pure JS 

 // const myArr = [5,6,7,8,9]

  //const newArr = myArr.map( (oneNumber) => {
   // return oneNumber + 10
  //} )
  //console.log(newArr);
  // pure JS 

  /*const Data = [
    {id: 1, name: "vyvencit psa"},
    {id: 2, name: "upratat kuchynu"},
    {id: 3, name: "Nakupit"},
    {id: 4, name: "Ist do fitka"},
    {id: 5, name: "uvarit obed"}
]

  const newArr = Data.map( (oneElement) => {
    return oneElement.name
  } )

  console.log(newArr)  */

  const Data = [
    {id: 1, name: "vyvencit psa"},
    {id: 2, name: "upratat kuchynu"},
    {id: 3, name: "Nakupit"},
    {id: 4, name: "Ist do fitka"},
    {id: 5, name: "uvarit obed"}
]

const deletedID = 3

const newArr = Data.filter( (oneElement) => {
    return oneElement.id != deletedID
})
  console.log(newArr);
  return (
    <h1>Test</h1>
  )
}
export default App