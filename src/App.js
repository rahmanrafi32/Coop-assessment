//http://preview.themeforest.net/item/pathshala-responsive-school-management-template/full_screen_preview/20335933?_ga=2.53411176.1336993914.1622144576-442426411.1597595355&fbclid=IwAR19qcW9S0cZkvjrGOdq1M3Zv2_9BJo4WDTVNQuNhs5zNVJV9Duao7of8eY
import Header from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import AdminPage from "./pages/AdminPage/AdminPage";
import AllBooks from "./pages/library/AllBooks";
import ReadingList from "./pages/library/ReadingList";
import CompletedList from "./pages/library/CompletedList";
import firebase from "firebase/app";
import "firebase/auth";
import Footer from "./components/Footer/Footer";
import MainHome from "./components/Home/MainHome/MainHome";
import Login from "./pages/Login/Login";
import Signin from "./pages/Login/Signin";
import PrivateRoute from "./privateRoute/PrivateRoute";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/actions/userLogin";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        let userDetails = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        };
        dispatch(setUser(userDetails));
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={MainHome} />
          <PrivateRoute path="/teacher-dashboard">
            <TeacherDashboard />
          </PrivateRoute>
          <PrivateRoute path="/student-dashboard">
            <StudentDashboard />
          </PrivateRoute>
          {/* <Route path="/teacher-dashboard" component={TeacherDashboard} /> */}
          {/* <Route path="/student-dashboard" component={StudentDashboard} /> */}
          <PrivateRoute path="/admin-dashboard">
            {/* <Route path="/admin-dashboard" component={AdminPage} /> */}
            <AdminPage />
          </PrivateRoute>
          <PrivateRoute path="/library/all-books">
            <AllBooks />
          </PrivateRoute>
          {/* <Route path="/library/all-books" component={AllBooks} /> */}
          <PrivateRoute path="/library/reading-list">
            <ReadingList />
          </PrivateRoute>
          {/* <Route path="/library/reading-list" component={ReadingList} /> */}
          <PrivateRoute path="/library/completed-list">
            <CompletedList />
          </PrivateRoute>
          {/* <Route path="/library/completed-list" component={CompletedList} /> */}
          <Route path="/login" component={Login} />
          <Route path="/signin" component={Signin} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
