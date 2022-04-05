import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

function Tables() {
    const [book,setBook] = useState([])
    useEffect(()=>{
        fetch("http://13.251.156.158:3000/api/books")
        .then((data)=> data.json())
        .then((res)=> console.log(res))
        .catch((err)=> console.log(err))

    })
  return (
    <div className="container table">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Authors</th>
            <th>isbn</th>
            <th>Publisher</th>
            <th>Published on</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td><img src="/img/edit.svg" alt="svg" /></td>
            <td><img src="/img/delete.svg" alt="svg" /></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td><img src="/img/edit.svg" alt="svg" /></td>
            <td><img src="/img/delete.svg" alt="svg" /></td>
          </tr>
          <tr>
            <td>3</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td><img src="/img/edit.svg" alt="svg" /></td>
            <td><img src="/img/delete.svg" alt="svg" /></td>
          </tr>
        </tbody>
      </Table>
      <button className="addButton">+ Add Book</button>
    </div>
  );
}

export default Tables;
