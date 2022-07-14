import { Routes, Route } from "react-router-dom";
import Idk from "./components/idk";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Idk />} />
      </Routes>
    </>
  );
}

export default App;
