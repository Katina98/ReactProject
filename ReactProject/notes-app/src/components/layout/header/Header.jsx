import React, { useState } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { logout } from '../../../core/api/users.api';
import { getLoggedUser } from '../../../core/api/users.api';
import './Header.css';
import { UsersList } from '../../users/users-list/UsersList';

const logoutStyle = {
  cursor: 'pointer'
};

export const Header = withRouter((props) => {
  console.log('HEADER PROPS +>', props);
  const [isLoggedOut, setLogoutFlag] = useState(false);
  const [searchParam, setSearchParam] = useState('');

  const onLogout = (event) => {
    logout();
    setLogoutFlag(true);
  }

  const onSearchChange = (event) => {
    event.persist();
    setSearchParam(event.target.value);
  }

  const onSearchClick = (event) => {
    event.preventDefault();
    const pathNameUrl = props.location.pathname.substr(1);

    const historyObj = { pathname: `/${pathNameUrl}` };
    if (searchParam) {
      historyObj['search'] = `?q=${searchParam}`;
    }

    props.history.push(historyObj);
  }

    return (
      <>
        { isLoggedOut && <Redirect to="/login" /> }
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <img src="https://picsum.photos/180/80?random=100" alt="img" className="nav-img"/>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
       <Link to="/" className="fonts">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/users" className="fonts">Users</Link>
      </li>
      <li className="nav-item">
        <Link to="/users/create" className="fonts">Create user</Link>
      </li>
      <li className="nav-item">
        <Link to="/notes" className="fonts">All notes</Link>
      </li>
      <li className="nav-item">
        <Link to="/notes/my-notes" className="fonts">My notes</Link>
      </li>
      <li className="nav-item">
        <Link to="/notes/create" className="fonts">Create note</Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0" onSubmit={onSearchClick}>
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={onSearchChange}/>
      <button  className="search-btn" type="submit"><h3 className="search-font">Search</h3></button>
    </form>
    <span className="logout-btn" style={logoutStyle} onClick={onLogout} ><h3 className="logout-font">Logout</h3></span>
  </div>
</nav>

<div className="container">
  <div className="box">
      <div className="imgBox">
      <img src="https://www.wikihow.com/images/thumb/1/18/Take-Better-Notes-Step-1-Version-2.jpg/aid11032-v4-728px-Take-Better-Notes-Step-1-Version-2.jpg.webp" alt="img"/>
      </div>
      <div className="imgBox1">
        <img src="https://i.pinimg.com/736x/37/35/99/373599e96567fc095ba60c042fa4eb14.jpg" alt="img1"/>
      </div>
      {/* <div className="imgBox2">
        <img src="https://static.vecteezy.com/system/resources/previews/000/162/777/original/free-unique-weekly-calendar-vectors.jpg" alt="img2"/>
      </div> */}
      <div className="imgBox3">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Paper-notes.svg/1200px-Paper-notes.svg.png" alt="img4"/>
      </div>
</div>
</div>


</>
    );
})