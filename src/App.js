import Checklist from "./components/Checklist";
import Form from "./components/Form";
import Logo from "./components/Logo";
import Stats from "./components/Stats";
import './App.css'

function App() {
  return (
    <div className="app">
      <Logo/>
      <Form/>
      <Checklist/>
      <Stats/>
    </div>
  );
}

export default App;
