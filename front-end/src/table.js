import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

function Tables() {
  const [book, setBook] = useState([]);
  const [deleteBook, setDeleteBook] = useState([])
  const putMethod = {
    method: "PUT", // Method itself
    headers: {
      "Content-type": "application/json; charset=UTF-8", // Indicates the content
    },
    body: JSON.stringify(), // We send data in JSON format
  };
  const deleteMethod = {
    method: "DELETE", // Method itself
    headers: {
      "Content-type": "application/json; charset=UTF-8", // Indicates the content
    },
    body: JSON.stringify(), // We send data in JSON format
  };
  useEffect(() => {
    fetch("http://13.251.156.158:3000/api/books")
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
        setBook(res.data);
      })
      .catch((err) => console.log(err));
  }, [deleteBook]);
  const addBook = () => {};
  const handleEdit = (e, index) => {
    fetch("http://13.251.156.158:3000/api/updateBooks/id/:_id", putMethod)
      .then((response) => response.json())
      .then((data) => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
      .catch((err) => console.log(err));
  };
  const handleDelete = (e, index) => {
    console.log(e)
    fetch(`http://13.251.156.158:3000/api/deleteBooks/id/${e}`, deleteMethod)
    .then((response) => response.json())
    .then((data) => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
    .catch((err) => console.log(err));
  };
  return (
    <div className="container table">
      <Table striped hover>
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
        {book.map((data, index) => (
          <tbody>
            <tr>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>${data.price}</td>
              <td>{data.author}</td>
              <td>{data.isbn}</td>
              <td>{data.publisher}</td>
              <td>{data.published_date}</td>
              <td onClick={(e) => handleEdit(e, data._id)}>
                <img src="/img/edit.svg" alt="svg" />
              </td>
               <td onClick={(e) => handleDelete(data._id)}>
                <img src="/img/delete.svg" alt="svg" />
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
}

export default Tables;
