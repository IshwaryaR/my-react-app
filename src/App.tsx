import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Store from "./pages/Store";
import NavBar from "./components/NavBar";
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
      <NavBar></NavBar>
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Container>
    </div>
  );
}
export default App;
