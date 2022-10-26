import {Component} from 'react';
import { Link } from "react-router-dom";
import './nav.css';
import NewUser from '../../../pages/user/newuser';

class Primarynav extends Component{
    render(){
        return <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user/new">New</Link>
        </li>
        <li>
          <Link to="/users">List</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>;
    }
}

export default Primarynav;