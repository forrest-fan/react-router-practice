import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <div class='Navbar'>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/new-posts'>New Posts</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;