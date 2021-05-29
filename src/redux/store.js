import { createStore, combineReducers } from "redux";
import bookReducer from "./reducers/bookReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import teacherDashboardChartReducer from "./reducers/teacherDashboardChartReducer";
const combinedReducer = combineReducers({
  books: bookReducer,
  teacherDashboardData: teacherDashboardChartReducer,
});

const store = createStore(combinedReducer, composeWithDevTools());

export default store;
