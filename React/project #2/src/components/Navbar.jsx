/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import { useState } from 'react';


// styles
import './css/Navbar.scss';
import { useUserStore } from '../lib/userStore';
import { auth } from '../lib/firebase';

const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false);

    const {currentUser} = useUserStore();

    const handleLogout = () => {
        auth.signOut();
       
      };
   
    return (
        <nav className={isOpen ? "navbar open" : "navbar"}>
           
            <div className="navbar__top">
                <div className="navbar__top__logotype">
                    <h1>Live-Chat</h1>
                    <span>Онлайн чат</span>
                </div>

                <div className="navbar__top__info">
                    <img src={currentUser.avatar || "../img/avatar.png"} alt="" />
                    <h5>{currentUser.username} <span>#0000</span></h5>
                </div>

                <button onClick={() => setIsOpen(!isOpen)}><i className={isOpen ? "ri-arrow-left-line" : "ri-arrow-right-line"} ></i></button>
            
            </div>

            <div className="navbar__center">
                <ul>
                    <Link to="/main"><li><i className="ri-home-4-fill"></i> Главная</li></Link>
                    <Link to=""><li><i className="ri-account-circle-fill"></i> Профиль</li></Link>
                    <Link to="/chats"><li><i className="ri-message-3-fill"></i> Мои чаты</li></Link>
                    <Link to=""><li><i className="ri-team-fill"></i> Список друзей</li></Link>
                    <Link to=""><li><i className="ri-settings-4-fill"></i> Настройки</li></Link>
                </ul>
            </div>

            <div className="navbar__hidden"></div>

            <div className="navbar__bottom">

                <div className="navbar__bottom__question__items">
                    <h4>Есть вопросы?</h4>
                    <a href="#"><i className="ri-question-mark"></i> Частые вопросы</a>
                    <a href="#"><i className="ri-customer-service-line"> </i> Связаться с нами</a>
                </div>

                <div className="navbar__bottom__btns">
                    <h4>Действия</h4>
                    <a href="#"><i className="ri-swap-line"></i> Сменить аккаунт</a>
                    <a onClick={handleLogout}><i className="ri-logout-box-r-line"></i> Выйти из системы</a>
                </div>

            </div>

        </nav>
    );
}

export default Navbar;
