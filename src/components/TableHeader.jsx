import React from "react";
import * as ReactBootStrap from "react-bootstrap";

const TableHeader = () => {
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
      </ReactBootStrap.Table>
    </div>
  );
};

export default TableHeader;
