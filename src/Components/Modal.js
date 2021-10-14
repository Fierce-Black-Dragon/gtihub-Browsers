import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../ComponentCss/Modal.css";
import { createRepository } from "../Redux/actions/repoAction";
const initialState = {
  name: "",
};
const Modal = (props) => {
  const [form, setForm] = useState(initialState);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(createRepository(user?.gitHubUser?.data, form));
    props.close();
  };
  const { user } = useSelector((state) => state.authReducers);
  return (
    <div className="modal">
      <div className="modal__header">
        <h5>Add New Repo</h5>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="modal__body">
          <p>Owner/Organization</p>
          <input type="text" disabled value={user?.gitHubUser?.data} />
          <p>Repo Name</p>
          <input type="text" onChange={handleChange} name="name" />
        </div>
        <div className="buttons">
          <button type="submit"> Add</button>
          <button onClick={props.close}>Close</button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
