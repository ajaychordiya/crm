import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTicket, updateTicket } from "../db";

import { postData } from "../db";

const TicketPage = ({ editMode }) => {
  const navigate = useNavigate();
  let { id } = useParams();
  const [formData, setFormData] = useState({
    status: "not started",
    progress: 0,
    timestamp: new Date().toISOString(),
  });

  const fetchData = async () => {
    const response = await getTicket(id);
    //console.log("AAAAAA", response);
    setFormData(response.data);
  };

  useEffect(() => {
    if (editMode) {
      fetchData();
    }
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (editMode) {
      const massage = await updateTicket(id, formData);
      if (massage.documentId) {
        navigate("/");
      } else {
        alert("something went wrong");
      }
      console.log(massage);
    } else {
      const massage = await postData(formData);
      if (massage.documentId) {
        navigate("/");
      } else {
        alert("something went wrong");
      }
    }
    //console.log(formData);
  };
  const changeHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log("change");
  };
  const categories = ["test1", "test2", "test3", "test4"];
  console.log(formData);
  return (
    <div className="ticket">
      <h1>{editMode ? "Update Your Ticket" : "Create a new Ticket"}</h1>
      <div className="ticket-container">
        <form onSubmit={submitHandler}>
          <section>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="title"
              onChange={changeHandler}
              value={formData.title}
            />

            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="description"
              onChange={changeHandler}
              value={formData.description}
            />
            <label>Category</label>
            <select
              name="category"
              id="category"
              value={formData.category}
              onChange={changeHandler}
            >
              {categories.map((category, index) => (
                <option value={category} key={index}>
                  {category}
                </option>
              ))}
            </select>
            <label htmlFor="new-category">New Category</label>
            <input
              type="text"
              name="category"
              id="new-category"
              placeholder="new-category"
              onChange={changeHandler}
              value={formData.category}
            />

            <label>Priority</label>
            <div className="multiple-input-container">
              <input
                id="priority-1"
                name="priority"
                type="radio"
                onChange={changeHandler}
                value={1}
                checked={formData.priority === 1}
              />
              <label htmlFor="priority-1">1</label>
              <input
                id="priority-2"
                name="priority"
                type="radio"
                onChange={changeHandler}
                value={2}
                checked={formData.priority === 2}
              />
              <label htmlFor="priority-2">2</label>
              <input
                id="priority-3"
                name="priority"
                type="radio"
                onChange={changeHandler}
                value={3}
                checked={formData.priority === 3}
              />
              <label htmlFor="priority-3">3</label>
              <input
                id="priority-4"
                name="priority"
                type="radio"
                onChange={changeHandler}
                value={4}
                checked={formData.priority === 4}
              />
              <label htmlFor="priority-4">4</label>
              <input
                id="priority-5"
                name="priority"
                type="radio"
                onChange={changeHandler}
                value={5}
                checked={formData.priority === 5}
              />
              <label htmlFor="priority-5">5</label>
            </div>

            {editMode && (
              <>
                <input
                  type="range"
                  id="progress"
                  name="progress"
                  value={formData.progress}
                  min="0"
                  max="100"
                  onChange={changeHandler}
                />
                <label htmlFor="progress">Progress</label>

                <label>Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={changeHandler}
                >
                  <option selected={formData.status === "done"} value="done">
                    Done
                  </option>
                  <option
                    selected={formData.status === "working on it"}
                    value="working on it"
                  >
                    Working on it
                  </option>
                  <option selected={formData.status === "stuck"} value="stuck">
                    Stuck
                  </option>
                  <option
                    selected={formData.status === "not started"}
                    value="not started"
                  >
                    Not Started
                  </option>
                </select>
              </>
            )}

            <input type="submit" />
          </section>

          <section>
            <label htmlFor="owner">Owner</label>
            <input
              id="owner"
              name="owner"
              type="owner"
              onChange={changeHandler}
              required={true}
              value={formData.owner}
            />

            <label htmlFor="avatar">Avatar</label>
            <input
              id="avatar"
              name="avatar"
              type="url"
              onChange={changeHandler}
            />
            <div className="img-preview">
              {formData.avatar && (
                // eslint-disable-next-line jsx-a11y/img-redundant-alt
                <img src={formData.avatar} alt="image" />
              )}
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};

export default TicketPage;
