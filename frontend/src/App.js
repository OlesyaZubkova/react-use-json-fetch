import "./App.css";
import Success from "./components/Success";
import Error from "./components/Error";
import Loading from "./components/Loading";

function App() {
  return (
    <div className="App">
      <Success />
      <Error />
      <Loading />
    </div>
  );
}

export default App;
