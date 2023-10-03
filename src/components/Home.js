import React from "react";
import data from "./data";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";


const Home = () => {
  const history = useNavigate();

  const handleEdit = (id, listItem, status) => {
    localStorage.setItem("listItem", listItem);
    localStorage.setItem("status", status);
    localStorage.setItem("id", id);
  };

  const handleDelete = (id) => {
    var DltIndex = data.map((e) => {
      console.log("check  ", e.id);
      return e.id;
    }).indexOf(id);

    data.splice(DltIndex, 1);

    history("/");
  };
  return (
    <>
      {/* striped borded hover size="sm" */}
      <div style={{ margin: "10rem" }}>
        <Table className="table-striped table-bordered table-hover table-sm">
          <thead>
            <tr>
              <th>List Item</th>
              <th>Item</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0
              ? data.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.listItem}</td>
                      <td>{item.status}</td>
                      <td>
                        <Link to={`/edit`}>
                          <Button
                            onClick={() => {
                              handleEdit(item.id, item.listItem, item.status);
                            }}
                          >
                            Edit
                          </Button>
                        </Link>
                        &nbsp;
                        <Button onClick={() => handleDelete(item.id)}>
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })
              : "no data available"}
          </tbody>
        </Table>
        <Link className="d-grid gap-2" to="create">
          <Button size="lg">Create</Button>
        </Link>
      </div>
    </>
  );
};

export default Home;
