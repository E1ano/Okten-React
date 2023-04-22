import {Link, Route, Routes} from "react-router-dom";
import Todos from "./components/Todos";
import Albums from "./components/Albums";
import Comments from "./components/Comments";
import Post from "./components/Post";
function App() {
  return (
    <>
      <h1>Choose route!</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/todos">Todos</Link></li>
        <li><Link to="/albums">Albums</Link></li>
        <li><Link to="/comments">Comments</Link></li>
      </ul>

      <Routes>
          <Route path="/"/>
          <Route path="/todos" element={<Todos/>}/>
          <Route path="/albums" element={<Albums/>}/>
          <Route path="/comments" element={<Comments/>}/>
          <Route path="/posts/:id" element={<Post/>}/>
      </Routes>
    </>
  );
}

export default App;
