import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import createUser from "./components/createUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList/>}/>
        <Route path="add" element={<AddUser/>}/>
        <Route path="edit/:id" element={<createUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
