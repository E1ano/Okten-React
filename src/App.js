import Posts from "./components/Posts";
import Launches from "./components/Launches";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
        <Posts/>
        <hr/>
        <Launches/>
        <hr/>
        <Users/>
    </div>
  );
}

export default App;
