import React, { useContext } from 'react';
import {ModalContext} from "../Contexts/ModalContext";
import './css/ChatActions.scss';


const ChatActions = () => {
    const {modal,setModal } = useContext(ModalContext);

    return (
        <div className="chats__actions">
            <div className="chats__actions__find">
                <div className="find">
                    <i className="ri-search-line"></i>
                    <input type="text" placeholder='Искать чат'/>
                </div>
            </div>
            <div className="chats__actions__add"><i onClick={() => setModal(!modal)} className={ modal ? "ri-subtract-fill" : "ri-add-fill" }></i></div>
        </div>
    );
}

export default ChatActions;
