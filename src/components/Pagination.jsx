import React, { useRef } from "react";
import axios from "axios";

const Pagination = ({ org, page, setpage, setrepos }) => {
  const url = `https://api.github.com/orgs/${org}/repos?per_page=10&page=${page}`;

  const getRepos = useRef(() => {});

  const nextPage = () => {
    page++;
    setpage(page);
    getRepos.current();

    console.log(page);
  };

  const previousPage = () => {
    page--;
    setpage(page);
    getRepos.current();
    console.log(page);
  };

  getRepos.current = async () => {
    try {
      await axios.get(url).then((res) => {
        const datares = res.data;
        console.log(datares);
        setrepos(datares);
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <nav>
      <button
        onClick={previousPage}
        type="submit"
        className="btn btn-secondary"
      >
        Previous
      </button>
      <button onClick={nextPage} type="submit" className="btn btn-secondary">
        Next
      </button>
    </nav>
  );
};

export default Pagination;
