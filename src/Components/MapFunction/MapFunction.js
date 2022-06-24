import React from 'react';
import {Table} from 'react-bootstrap';

function MapFunction() {
    const students=[
        {name:"Ashes", email:'ashes@gmail.com', contact: '03219715006'},
        {name:"khan", email:'khan@gmail.com', contact: '03219715006'},
        {name:"Shahbaz", email:'shah@gmail.com', contact: '03219715006'},
        {name:"Khattak", email:'khattak@gmail.com', contact: '03219715006'}
    ]


    // const students=['Ashes', 'Khan', 'khattak', 'Shahbaz'];
    //map looping
    // students.map((item)=>{
    //     console.warn("My Nmae is:",item);
    // });
    // for(let i=0;i<students.length;i++){
    //     console.warn("In For Loop My Nmae is:",students[i]);
    // }


  return (
    <div>
        <h1>Map Function</h1>
        <Table striped bordered hover variant='dark' border="1">
            <tbody>
            <tr>
                <td>Name</td>
                <td>email</td>
                <td>contact</td>
            </tr>

        {
            students.map((data,i)=>
            
                <tr key={i}>
                    <td>My name is: {data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.contact}</td>
                </tr>
            )
        }
        </tbody>
        </Table>
    </div>
  );
}

export default MapFunction;