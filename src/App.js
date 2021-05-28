import Header from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TeacherDashboard from "./pages/TeacherDashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/teacher-dashboard" component={TeacherDashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
