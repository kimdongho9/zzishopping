import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

const menulist = ["여성", "남성", "Divided", "유아", "아동", "Home", "Sale",];

const Navbar = () => {
    return (<div>
        <div className="login-button">
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
        </div>
        <div className="nav-section">
            <img width={100} src={'zzi.png'} alt="로고"/>
        </div>
        <div className="menu-area">

            <ul className="menu-list">
                {menulist.map((menu) => (
                    <li>{menu}</li>
                ))}
            </ul>

            <div>
                <FontAwesomeIcon icon={faSearch}/>
                <input type="text"/>
            </div>
        </div>
    </div>);
};

export default Navbar;