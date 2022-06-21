import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Route path="/">
          <Navbar />
        </Route>
      </Router>
    </>
  );
}

export default App;
