import React from 'react';
import Chats from '../components/Chats';
import {useChatStore} from '../lib/chatStore';
import './css/ChatPage.scss';
import Chat from '../components/Chat';


const ChatPage = () => {
    const {chatId} = useChatStore();
    return (
        <div className='ChatPage'>
            <div className="left">
            <Chats />
            </div>
            <div className="right">
                {!chatId ? 
                <div className='centerNado'><p style={{textAlign:"center"}}>Выберите чат и начните общаться!</p></div> : 
                chatId && <Chat />
                }
            </div>
        
     
            
        </div>
    );
}

export default ChatPage;
