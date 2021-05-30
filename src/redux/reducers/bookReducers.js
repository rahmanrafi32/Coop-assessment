//import allBooks from "../../fakeData/AllBooks.json";

const primaryState = {
  readingList: [],
  allBooks: [],
  finishedList: [],
};

const bookReducer = (state = primaryState, action) => {
  switch (action.type) {
    case "LOAD_ALL_BOOKS": {
      const newState = { ...state, allBooks: action.payload };
      return newState;
    }
    case "ADD_TO_READING_LIST": {
      const isAlreadySelected = state.readingList.find(
        (b) => b._id === action.payload._id
      );

      if (!isAlreadySelected) {
        const newState = {
          ...state,
          readingList: [...state.readingList, action.payload],
        };
        return newState;
      } else {
        return state;
      }
    }

    case "DELETE_FROM_READING_LIST": {
      const newState = {
        ...state,

        readingList: state.readingList.filter((b) => b._id !== action.payload),
      };

      return newState;
    }

    case "ADD_TO_FINISHED_LIST": {
      const isAlreadyFinished = state.finishedList.find(
        (b) => b._id === action.payload._id
      );

      if (!isAlreadyFinished) {
        const newState = {
          ...state,
          readingList: state.readingList.filter(
            (b) => b._id !== action.payload._id
          ),
          finishedList: [
            ...state.finishedList,
            {
              ...state.allBooks.find((b) => b._id === action.payload._id),
              reader: action.payload.reader,
            },
          ],
        };

        return newState;
      } else {
        return {
          ...state,
          readingList: state.readingList.filter(
            (b) => b._id !== action.payload
          ),
        };
      }
    }

    case "REMOVE_FROM_FINISHED_LIST": {
      const newState = {
        ...state,

        finishedList: state.finishedList.filter(
          (b) => b._id !== action.payload
        ),
      };

      return newState;
    }

    default: {
      return state;
    }
  }
};

export default bookReducer;
