
function App() {
    const getHeadings = () => {
        return (
            Object.keys(data[0])
        );
    }
    return (
        <div className="container">
            <Table theadData={getHeadings()} tbodyData={data}/>
        </div>
    );
}

export default App;


fetch("data.json")
    .then(response => response.json())
    .then(data => {
        console.log(data[1]["first_name"])
        console.log(data)
        document.querySelector("#json_reader").innerHTML=data[1]["first_name"]+"453"
    })