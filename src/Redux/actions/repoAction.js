import {
  createRepo,
  fetchRepos,
  getRepoBranches,
  getRepoIssues,
} from "./../../Api/githubapi";
import {
  FETCH_ALL,
  CREATE,
  GETCOMMITS,
  BYID,
  START_LOADING,
  END_LOADING,
  GETBRANCHES,
  GETISSUES,
} from "../../constants/ActionTypes";

export const getRepos = (user) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await fetchRepos(user);

    dispatch({ type: FETCH_ALL, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    alert(error);
  }
};
export const FetchBranches = (user, repo) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await getRepoBranches(user, repo);

    dispatch({ type: GETBRANCHES, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    alert(error);
  }
};
export const FetchRepoIssues = (user, repo) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await getRepoIssues(user, repo);
    console.log(data);
    dispatch({ type: GETISSUES, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    alert(error);
  }
};
export const createRepository = (user, Fromdata) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await createRepo(user, Fromdata);

    dispatch({ type: CREATE, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    alert(error);
  }
};
