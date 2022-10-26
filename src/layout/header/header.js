import {Component} from 'react';
import Primarynav from './navbar/Primarynav';
class Header extends Component{
    render(){
        return (
            <header>
                    <Primarynav />
            </header>
        );
    }
}

export default Header;