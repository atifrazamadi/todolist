import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data";
import { v4 as uuid } from "uuid";
import {/*  Link, */ useNavigate } from "react-router-dom";

const AddItem = () => {
  const [listItem, setListItem] = useState("");
  const [status, setStatus] = useState("");

  const handleListChange=(e)=>{
    setListItem(e.target.value);
    console.log(listItem)
  }
  const handleStatusChange=(e)=>{
    setStatus(e.target.value);
  }


  const handleSubmit=(e)=>{
    e.preventDefault();
    const ids=uuid();
    let uniqueId=ids.slice(0,8)
    let a=listItem;
    let b=status;
    data.push({id:uniqueId,listItem:a,status:b})
    history('/')
  }

  let history = useNavigate();

  return(
    <>
    <Form className="d-grid gap-2" style={{margin:"15rem"}}>
        <Form.Group className="md-3" constrolId="formName">
            <Form.Control type="text" placeholder="Enter list " required onChange={handleListChange}>
            </Form.Control>
        </Form.Group>
        <Form.Group className="md-3" constrolId="formAge">
            <Form.Control type="text" placeholder="Enter status " required onChange={handleStatusChange}>
            </Form.Control>
        </Form.Group>
        <Button type="submit" onClick={(e)=>handleSubmit(e)}>Submit</Button>
    </Form>
    </>
  );
};

export default AddItem;