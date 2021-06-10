import React, { useContext, useState } from 'react';
import customerIcon from '../../images/customer.png';
import UserContext from '../../UserContext';
import { useHistory } from 'react-router-dom';

const AddUser = () => {

  // context consumer
  const { users, setUsers } = useContext(UserContext);

  // For Navigation
  const history = useHistory();

  //Initial object of users
  const object = {
    id: Math.floor(Math.random() * 1232),
    username: '',
    password: '',
    email: '',
    contact: ''
  }

  // A state for get data from user 
  const [item, setItem] = useState(object);

  //Extract the users object
  const { username, password, email, contact } = item;

  //input onChange event
  const inputChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value })
  };

  //add user into users context
  const addUser = e => {
    e.preventDefault()
    if (item !== '') {
      setUsers([...users, item])
      setItem(object);
      history.push('/');
    }

  }

  return (
    <section className='user_page'>
      <div className='container' >
        <div className="row">
          <div className="main_div col-md-4 col-9 mx-auto">
            <h2 className='heading1 text-center my-4 mx-auto text-white-50'>User Profile Form</h2>
            <form onSubmit={(e) => addUser(e)} className='p-5'>
              <figure className='d-flex justify-content-center'>
                <img src={customerIcon} alt="users" />
              </figure>
              <h4 className='mb-5 text-white-50 text-center'>Signup Here</h4>
              <div className="mb-4">
                <span className='addon'><i className="addon fa fa-user-circle text-white"></i></span>
                <input type="text" name="username" onChange={(e) => inputChange(e)} placeholder='Usersname' value={username} required />
              </div>
              <div className="mb-4">
                <span className='addon'><i className="fa fa-lock text-white"></i></span>
                <input type="password" name="password" onChange={(e) => inputChange(e)} placeholder='Password' value={password} required />
              </div>
              <div className="mb-4">
                <span className='addon'><i className="fa fa-envelope text-white"></i></span>
                <input type="email" name="email" onChange={(e) => inputChange(e)} placeholder='info@example.com' value={email} required />
              </div>
              <div className="mb-4">
                <span className='addon'><i className="fa fa-phone text-white"></i></span>
                <input type="contact" name="contact" onChange={(e) => inputChange(e)} placeholder='Contact' value={contact} required />
              </div>

              <button type="submit" className="btn btn-outline-light px-5 mx-auto mt-4">SignUp</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )

}

export default AddUser;