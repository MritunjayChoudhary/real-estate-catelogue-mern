import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './listing.css'
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

const listData = [
    {
        'id':"PPD123",
        'image':"https://res.cloudinary.com/dib4h0jcp/image/upload/v1711478540/im7ioaxwzrvl0wn3i6cs.jpg",
        'property':"PLOT",
        'contact':"0909090909",
        'area':"1200",
        'views':"03",
        'status':"Sold",
        'daysLeft':"15"
    },
    {
        'id':"PPD123",
        'image':"https://res.cloudinary.com/dib4h0jcp/image/upload/v1711478540/im7ioaxwzrvl0wn3i6cs.jpg",
        'property':"PLOT",
        'contact':"0909090909",
        'area':"1200",
        'views':"03",
        'status':"Sold",
        'daysLeft':"15"
    },
    {
        'id':"PPD123",
        'image':"https://res.cloudinary.com/dib4h0jcp/image/upload/v1711478540/im7ioaxwzrvl0wn3i6cs.jpg",
        'property':"PLOT",
        'contact':"0909090909",
        'area':"1200",
        'views':"03",
        'status':"Sold",
        'daysLeft':"15"
    },
    {
        'id':"PPD123",
        'image':"https://res.cloudinary.com/dib4h0jcp/image/upload/v1711478540/im7ioaxwzrvl0wn3i6cs.jpg",
        'property':"PLOT",
        'contact':"0909090909",
        'area':"1200",
        'views':"03",
        'status':"Sold",
        'daysLeft':"15"
    },
    {
        'id':"PPD123",
        'image':"https://res.cloudinary.com/dib4h0jcp/image/upload/v1711478540/im7ioaxwzrvl0wn3i6cs.jpg",
        'property':"PLOT",
        'contact':"0909090909",
        'area':"1200",
        'views':"03",
        'status':"Sold",
        'daysLeft':"15"
    },
    {
        'id':"PPD123",
        'image':"https://res.cloudinary.com/dib4h0jcp/image/upload/v1711478540/im7ioaxwzrvl0wn3i6cs.jpg",
        'property':"PLOT",
        'contact':"0909090909",
        'area':"1200",
        'views':"03",
        'status':"Sold",
        'daysLeft':"15"
    },
    {
        'id':"PPD123",
        'image':"https://res.cloudinary.com/dib4h0jcp/image/upload/v1711478540/im7ioaxwzrvl0wn3i6cs.jpg",
        'property':"PLOT",
        'contact':"0909090909",
        'area':"1200",
        'views':"03",
        'status':"Sold",
        'daysLeft':"15"
    },
    {
        'id':"PPD123",
        'image':"https://res.cloudinary.com/dib4h0jcp/image/upload/v1711478540/im7ioaxwzrvl0wn3i6cs.jpg",
        'property':"PLOT",
        'contact':"0909090909",
        'area':"1200",
        'views':"03",
        'status':"Sold",
        'daysLeft':"15"
    }
]
const Listing = () => {
    const [list,setList] = useState([])
    useEffect(()=>{

    },[])
  return (
    <div>
        <div className='sec_header'>
            <div className='search_bar'>
                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </div>
            <Link to='/form' >
                <button className='add_property'>+ ADD PROPERTY</button>
            </Link>
        </div>
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>PPD ID</th>
                    <th>Image</th>
                    <th>Property</th>
                    <th>Contact</th>
                    <th>Area</th>
                    <th>Views</th>
                    <th>Status</th>
                    <th>Days Left</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {listData.map((data,idx)=>{
                    return (
                        <tr>
                            <td>{data.id}</td>
                            <td><a href={data.image}>image</a></td>
                            <td>{data.property}</td>
                            <td>{data.contact}</td>
                            <td>{data.area}</td>
                            <td>{data.views}</td>
                            <td>{data.status}</td>
                            <td>{data.daysLeft}</td>
                            <td>ToolTip + View</td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
        </div>
    </div>
  )
}

export default Listing