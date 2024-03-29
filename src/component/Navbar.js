import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";

const menulist = ["여성", "남성", "Divided", "유아", "아동", "Home", "Sale",];


const Navbar = () => {
    const nagivate = useNavigate();

    const goTologin = () => {
        nagivate("/login");
    };

    const search = (event) => {
        if (event.key === "Enter") {
            let keyword = event.target.value;
            nagivate(`/?q=${keyword}`);
        }
    };

    return (
        <div>
            <div className="login-button" onClick={goTologin}>
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                <div>로그인</div>
            </div>
            <div className="nav-section">
                <img width={100} src={'zzi.png'} alt="로고"/>
            </div>
            <div className="menu-area">
                <ul className="menu-list">
                    {menulist.map((menu, index) => (
                        <li key={index}>{menu}</li>
                    ))}
                </ul>
                <div className="menu-search">
                    <FontAwesomeIcon icon={faSearch}/>
                    <input type="text" className="input-style" placeholder="검색" onKeyPress={(event) => search(event)} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
