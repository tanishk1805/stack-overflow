import React,{useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import logo from '../../assets/logo.png'
import decode from 'jwt-decode'
import search from '../../assets/search-solid.svg'
import { useSelector,useDispatch } from 'react-redux'

import Avatar from '../../components/Avatar/Avatar'
import './Navbar.css'
import { setCurrentUser } from '../../actions/currentUser'

const Navbar = () => {
  const dispatch=useDispatch();
  var User= useSelector((state)=>state.currentUserReducer);
  const navigate=useNavigate();
  const handleLogout =()=>{
    dispatch({type:'LOGOUT'});
    navigate('/');
    dispatch(setCurrentUser(null))
  }
  useEffect(()=>{
    const token=User?.token;
    if(token){
        const decodedToken=decode(token);
        if(decodedToken.exp * 1000 < new Date().getTime()){
            handleLogout();
        }
    }
      dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
  },[dispatch]);

  return (
 <nav className='main-nav'>
    <div className='navbar'>
        <Link className='nav-item nav-logo' to='/'><img src={logo}  alt='Home'/></Link>
        <Link className='nav-item nav-btn' to='/about'>About</Link>
        <Link className='nav-item nav-btn' to='/products'>Products</Link>
        <Link className='nav-item nav-btn' to='/team'>For Teams</Link>
        <form>
            <input type="text"  placeholder='Search...'/>
            <img src={search} alt='Search' className='search-icon' width='18' />
        </form>
        {User===null?<Link to='/Auth' className='nav-item nav-links'>Log in</Link> :
        <> <Link to={`/Users/${User?.result?._id}`} style={{textDecoration:'none'}}><Avatar backgroundColor='#009dff' px='16px' py='12px' borderRadius='50%' color='white' child={User.result.name.charAt(0).toUpperCase()} ></Avatar>  </Link>
        <button className='nav-item nav-btn' onClick={handleLogout}>Log Out</button>
        </>}
    </div>
 </nav>
  )
}

export default Navbar

//Problem:avatar case
//T here is not workinbg therefore I kept it in avatar.jsx
//Link is not going to