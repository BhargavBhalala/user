import React, { useContext, useEffect, useState } from 'react';
import customerIcon from '../../images/customer.png';
import UserContext from '../../UserContext';
import { useHistory, useParams } from 'react-router-dom';

const EditUser = () => {

  // context consumer
  const { users } = useContext(UserContext);

  // Get id parameter from current route
  const { id } = useParams();

  // For Navigation
  const history = useHistory();

  //Initial object of users
  const object = {
    id: id,
    username: '',
    password: '',
    email: '',
    contact: ''
  }

  // A state for get data from user 
  const [item, setItem] = useState(object);

  // load user details into form when render first time
  useEffect(() => {
    loadUser();
  }, []);


  //Get user detail and set into item
  const loadUser = () => {
    const result = users.find((i) => { return i.id == id });
    setItem(result);
  }

  //input onChange event
  const inputChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value })
  };

  //Extract the users object
  const { username, password, email, contact } = item;

  //update users object
  const updateUser = e => {
    e.preventDefault()
    if (item !== '') {
      const userIndex = users.findIndex((i) => { return i.id == id });
      users[userIndex].username = username;
      users[userIndex].password = password;
      users[userIndex].email = email;
      users[userIndex].contact = contact;
      setItem(object);
      document.getElementById("myForm").reset();
      history.push('/');
    }

  }

  return (
    <section className='user_page'>
      <div className='container' >
        <div className="row">
          <div className="main_div col-md-4 col-9 mx-auto">
            <h2 className='heading1 text-center my-4 mx-auto text-white-50'>Update Profile Form</h2>
            <form onSubmit={(e) => updateUser(e)} className='p-5' id='myForm'>
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

              <button type="submit" className="btn btn-outline-light px-5 mx-auto mt-4">Update</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )


}

export default EditUser;