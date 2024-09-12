import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddEvent from "./components/Add_Events";
import AddEventsHome from "./components/AddEvents_Home/AddEventsHome"
import Login from "./components/LogIn/index.js"
const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        {/* // <Route path="/top" element={<TopEvent />}></Route> */}
        {/* // <Route path="/venue" element={<Venues />}></Route> */}
        {/* // <Route path="/event" element={<EventTarget />}></Route> */}
        <Route path="/add-event" element={<AddEvent />}></Route>
        <Route path="/add-event-home" element={<AddEventsHome />}></Route>
      </Routes>
    </BrowserRouter>
  </>
);
export default App;
