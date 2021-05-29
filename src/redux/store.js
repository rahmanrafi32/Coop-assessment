import { createStore, combineReducers, applyMiddleware } from "redux";
import bookReducer from "./reducers/bookReducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import teacherDashboardReducer from "./reducers/teacherDashboardReducer";
import studentDashboardReducer from "./reducers/studentDashBoardReducer";
const middleware = applyMiddleware(thunk);
const combinedReducer = combineReducers({
  books: bookReducer,
  teacherDashboardData: teacherDashboardReducer,
  studentDashboardData: studentDashboardReducer,
});

const store = createStore(combinedReducer, composeWithDevTools(middleware));

export default store;
