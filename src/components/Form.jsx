import React from "react";

const Form = ({ getsearch, updatesearch, search }) => {
  return (
    <div className="container mt-5">
      <form onSubmit={getsearch} className="search-form">
        <input
          className="form-control search-bar"
          placeholder="Search repos..."
          type="text"
          value={search}
          onChange={updatesearch}
        />
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Form;
