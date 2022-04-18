import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Modals from "./modal";
function Tables() {
  const [book, setBook] = useState([]);
  const [render,setRender]=useState(false)
  useEffect(() => {
    
    fetch("http://13.251.156.158:3000/api/books")
      .then((data) => data.json())
      .then((res) => {
        setBook(res.data);
        
      })
      .catch((err) => setRender(!render));
  }, [render]);
  console.log(book)
  return (
    <>
   
    <div className="container table">
      <Table striped hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Authors</th>
            <th>isbn</th>
            <th>Published on</th>
          </tr>
        </thead>
        <tbody>
        {book.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>${data.price}</td>
              <td>{data.author}</td>
              <td>{data.isbn}</td>
              <td>{data.published_date}</td>
              <td><Modals data={data} type="edit" baatraaRender={{render,setRender}}/>
              </td>
               <td>
                <Modals data={data} type="delete" baatraaRender={{render,setRender}} />
              </td>
            </tr>
        ))}
        </tbody>
      </Table>
    </div>
      <Modals book={book} type="submit" baatraaRender={{render,setRender}} />
      </>
  );
}

export default Tables;
