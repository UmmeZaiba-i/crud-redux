import { useSelector } from 'react-redux' //it will give access to the reducers we have
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Home() {
    const users = useSelector((state:any)=> state.users);
    console.log(users)
  return (
    <div className='container'>
      <h2>Crud App with JSON Server</h2>
      <Link to='/create' className='btn btn-success my-3'>Create +</Link>
      <table className="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        {
            users.map((user: any, index: any)=>{
              return(
                <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    <button className='btn btn-sm btn-primary'>Edit</button>
                    <button className='btn btn-sm btn-danger ms-2'>Delete</button>
                </td>
               </tr> 
              )
            })
        }
        </tbody>
      </table>
    </div>
  )
}

export default Home
