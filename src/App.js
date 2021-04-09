import React, { useState, useEffect, useRef } from "react";
import "./styles/style.scss";
import axios from "axios";
import Form from "./components/Form";
import Table from "./components/Table";
import Pagination from "./components/Pagination";
import TableHeader from "./components/TableHeader";
import * as ReactBootStrap from "react-bootstrap";

const App = () => {
  const image = require("./images/error.png");
  const errorimage = { image };
  const [repos, setRepos] = useState([]);
  const [search, setSearch] = useState("");
  const [org, setOrg] = useState("");
  const [page, setPage] = useState("1");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [errorstate, setErrorState] = useState(false);

  const url = `https://api.github.com/orgs/${org}/repos?per_page=10&page=${page}`;

  const getRepos = useRef(() => {});

  useEffect(() => {
    if (org !== "") {
      setLoading(true);
      setTimeout(() => {
        getRepos.current();
        setLoading(false);
      }, 2000);
    }
  }, [org]);

  getRepos.current = async () => {
    try {
      await axios.get(url).then((res) => {
        const datares = res.data;
        console.log(...datares);
        setRepos(datares);
      });
    } catch (e) {
      console.log(e);
      setErrorState(true);
      setError(errorimage.image);
    }
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setOrg(search);
    setSearch("");
  };

  return (
    <div className="container">
      {errorstate ? (
        <img src={error} alt="" />
      ) : (
        <>
          {" "}
          <h1 className="text-primary mb-3" style={{ marginTop: "40px" }}>
            Github Organization Repos
          </h1>{" "}
          <Form
            getsearch={getSearch}
            updatesearch={updateSearch}
            search={search}
          ></Form>
          {loading ? (
            <>
              <TableHeader />
              <ReactBootStrap.Spinner
                animation="grow"
                variant="primary"
                style={{ marginTop: "30px" }}
              />
            </>
          ) : (
            <>
              <Table org={org} repos={repos}></Table>

              <Pagination
                setrepos={setRepos}
                org={org}
                getrepos={getRepos}
                page={page}
                setpage={setPage}
              />
            </>
          )}{" "}
        </>
      )}
    </div>
  );
};

export default App;
