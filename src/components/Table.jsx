import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import Repo from "./Repo";

const Table = ({ repos, org }) => {
  return (
    <div>
      <ReactBootStrap.Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Stars</th>
            <th>Last Updated</th>
            <th>Favorites</th>
          </tr>
        </thead>

        <tbody>
          {repos.map((repo) => (
            <Repo
              key={repo.id}
              id={repo.id}
              name={repo.name}
              stars={repo.stargazers_count}
              lastupdate={repo.updated_at}
              html_url={repo.html_url}
            />
          ))}
        </tbody>
      </ReactBootStrap.Table>
    </div>
  );
};

export default Table;
