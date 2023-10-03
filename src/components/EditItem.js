import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data";
// import { v4 as uuid } from "uuid";
import {/*  Link, */ useNavigate } from "react-router-dom";


const EditItem = () => {
    const [listItem, setListItem] = useState("");
    const [status, setStatus] = useState("");
    const [id, setId] = useState("")
    
    let history = useNavigate();
    
    
    const editIndex = data.map(e=>{
        return(e.id)

    }).indexOf(id)



    const handleListChange=(e)=>{
        setListItem(e.target.value);
        
      }
      const handleStatusChange=(e)=>{
        setStatus(e.target.value);
      }

const handleUpdate=(e)=>{
    e.preventDefault();
    let item = data[editIndex];
    item.listItem = listItem;
    item.status = status;
    history('/')
  }


  useEffect(() => {
  setListItem(localStorage.getItem('listItem'));
  setStatus(localStorage.getItem('status'));
  setId(localStorage.getItem('id'));
  },[])


  return (
    <>
    <Form className="d-grid gap-2" style={{margin:"15rem"}}>
        <Form.Group className="md-3" constrolId="formName" >
            <Form.Control type="text" placeholder="Enter List Item " value={listItem} required onChange={handleListChange}>
            </Form.Control>
        </Form.Group>
        <Form.Group className="md-3" constrolId="formAge">
            <Form.Control type="text" placeholder="Enter status " value={status} required onChange={handleStatusChange}>
            </Form.Control>
        </Form.Group>
        <Button type="submit" onClick={(e)=>handleUpdate(e)}>Update</Button>
    </Form>
    </>
  )
}

export default EditItem