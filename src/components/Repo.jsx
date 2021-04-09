import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Repo = ({ name, stars, lastupdate, html_url }) => {
  const [favorites, setFavorites] = useState(true);

  const favToggler = () => {
    setFavorites(!favorites);
  };

  return (
    <tr>
      <td>
        {" "}
        <a href={html_url} target="_blank">
          {name}
        </a>
      </td>

      <td>{stars}</td>
      <td>{lastupdate}</td>
      <td>
        <FaStar
          onClick={favToggler}
          style={{ color: favorites ? "grey" : "blue" }}
        />
      </td>
    </tr>
  );
};

export default Repo;
