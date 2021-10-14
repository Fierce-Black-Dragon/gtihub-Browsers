import {
  FETCH_ALL,
  CREATE,
  START_LOADING,
  GETBRANCHES,
  GETISSUES,
  END_LOADING,
  UPDATE,
  DELETE,
  GETCOMMITS,
} from "../../constants/ActionTypes";
const repoReducers = (
  state = {
    isLoading: true,
    created: false,
    Repos: [],
    Branches: [],
    Issues: [],
    Commits: [],
  },
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return {
        ...state,
        Repos: action.payload.data,
      };
    case GETBRANCHES:
      return {
        ...state,
        Branches: action.payload.data,
      };
    case GETCOMMITS:
      return {
        ...state,
        Commits: action.payload.data,
      };
    case GETISSUES:
      return {
        ...state,
        Issues: action.payload.data,
      };

    case CREATE:
      return {
        ...state,
        created: true,
        Repos: [...state.Repos, action.payload],
      };

    case DELETE:
      return {
        ...state,
        Repos: state.Repos.filter((repo) => repo._id !== action.payload),
      };
    default:
      return state;
  }
};
export default repoReducers;
