import React, { useEffect, useState } from "react";
import "../ComponentCss/Dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { FetchBranches, getRepos } from "../Redux/actions/repoAction";
import { FetchRepoIssues } from "./../Redux/actions/repoAction";
import Modal from "./Modal";
const Dashboard = () => {
  const { user } = useSelector((state) => state.authReducers);
  const dispatch = useDispatch();
  const [clickedIssues, setClickedIssues] = useState(false);
  const [clickedBranches, setClickedBranches] = useState(true);
  const [create, setCreate] = useState(false);
  useEffect(() => {
    if (user?.gitHubUser?.data) {
      dispatch(getRepos(user?.gitHubUser?.data));
    }
  }, [dispatch, user?.gitHubUser?.data]);
  const checkIssues = () => {
    setClickedIssues(!clickedIssues);
    setClickedBranches(false);
  };
  const checkBranches = () => {
    setClickedIssues(false);
    setClickedBranches(!clickedBranches);
  };
  const createRepo = () => {
    setCreate(!create);
  };
  const { Repos, Branches, Issues } = useSelector(
    (state) => state.repoReducers
  );

  return (
    <div>
      <div className="navbar">
        <h2>Github Browser</h2>
      </div>
      <div className="mainBody">
        <div className="sidebar">
          <div className="sidebar__allRepos">
            {Repos?.map((repo) => (
              <div
                className="sidebar__repo"
                key={repo._id}
                onClick={() => {
                  dispatch(FetchBranches(user?.gitHubUser?.data, repo.name));
                  dispatch(FetchRepoIssues(user?.gitHubUser?.data, repo.name));
                }}
              >
                <h4>{repo.name}</h4>
                <p>{repo.description}</p>
              </div>
            ))}

            <button className="addRepo" onClick={createRepo}>
              <p>Add</p> {/* will use icon */}
            </button>
          </div>
        </div>
        {create ? <Modal close={createRepo} /> : ""}

        {/* mainbody */}
        <div className="second_mainbody">
          <div className="delete">
            <button>Delete</button>
          </div>

          <div className="branches_issues">
            <nav>
              <button onClick={checkBranches}>Branches</button>

              <button onClick={checkIssues}>Issues</button>
            </nav>
            {clickedBranches ? (
              <div className="allBranches">
                {Branches?.length !== 0
                  ? Branches?.map((branch) => (
                      <div className="Branches" key={branch._id}>
                        <h4>{branch.name}</h4>
                        <p>{branch.description}</p>
                      </div>
                    ))
                  : "no branches"}
              </div>
            ) : (
              ""
            )}
            {clickedIssues ? (
              <div className="allIssues">
                {Issues?.length !== 0
                  ? Issues?.map((issue) => (
                      <div className="Issue" key={issue._id}>
                        <h4>{issue.title}</h4>
                      </div>
                    ))
                  : "no Issues"}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
