import Alert from "./components/Alert";
import Button from "./components/Button";
/* import ListGroup from "./components/ListGroup";
const ListArray = ["India", "UAE", "USA", "Sweden", "Rome"]; */
function App() {
  return (
    <div>
      {/*  <ListGroup
        list={ListArray}
        heading={"Countries"}
        onItemSelect={(item: string) => console.log(item)}
      /> */}
      <Alert></Alert>
      <Button></Button>
    </div>
  );
}
export default App;
