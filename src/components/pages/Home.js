import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../UserContext';

const Home = () => {

  const { users, setUsers } = useContext(UserContext);

  const removeUser = (e, id) => {
    e.preventDefault();
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <>
      <section className='user_page'>
        <div className='container bg-color' >
          <div className="row">
            <div className="main_div col-md-12 col-12 overflow-auto">
              <Link rel="stylesheet" exact to="/AddUser">
                <button className='btn btn-outline-light m-2 float-end '> Add User </button>
              </Link>
              <table className="table">
                <thead className='text-center'>
                  <tr className='table_head'>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Contact</th>
                    <th scope='col'>Action</th>
                  </tr>
                </thead>
                <tbody className='table-light'>

                  {users.map((user, index) =>
                    <tr key={index} className='text-center'>
                      <th scope="row">{index + 1}</th>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.contact}</td>
                      <td className='d-grid' style={{ gridTemplateColumns: '1fr 1fr', gridGap: '10px' }}>
                        <Link rel="stylesheet" exact='true' to={`/editUser/${user.id}`} className='grid-item'>
                          <i className="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i>
                        </Link>
                        <Link rel='stylesheet' onClick={(e) => removeUser(e, user.id)} exact='true' to='/' className='grid-item'>
                          <i className="fa fa-trash fa-2x" aria-hidden="true"></i>
                        </Link>
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  )

}

export default Home;
