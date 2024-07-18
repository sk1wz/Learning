/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react';

import "./css/Chats.scss";
import { useUserStore } from '../lib/userStore';
import { useChatStore } from '../lib/chatStore';
import { db } from '../lib/firebase';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import ChatActions from './ChatActions';

const Chats = () => {
    
    const [chats,setChats] = useState([]);
    const {currentUser} = useUserStore();
    const {changeChat} = useChatStore();

    useEffect(() =>{
        const unsub = onSnapshot(doc(db, "userchats", currentUser.id), async (res) => {
            const items = res.data().chats
            const promisses = items.map(async (item) =>{
                const userDocRef = doc(db, "users", item.receiverId);
                const userDocSnap = await getDoc(userDocRef);
                const user = userDocSnap.data()
                return {...item,user};
            })
            const chatData = await Promise.all(promisses)
            setChats(chatData.sort((a,b) => b.updatedAt - a.updatedAt));
        }
    );

        return () =>{
            unsub()
        }
    },[currentUser.id])

    const handleSelect =  async (chat) =>{
        changeChat(chat.chatId, chat.user)
    }
    return (
        
        <div className='chats'>
            <div className="chats__top">
                <h2>Мои сообщения</h2>
                <ChatActions />
            </div>
            <div className="chats__list">
                {chats.length == 0 ? <div><p style={{textAlign:"center"}}>Добавьте чат, чтобы начать общаться!</p></div> : 
                chats.map((chat) =>
                <div className="chats__item" key={chat.chatId} onClick={() => handleSelect(chat)}>
                    <div className="chats__item__image">
                        <img src={chat.user.avatar || "../img/avatar.png"} alt="" />
                    </div>

                    <div className="chats__item__info">
                        <h5>{chat.user.username}</h5>   {/* username */}
                        <span>{chat.lastMessage == "" ? "Пока сообщений нет." : chat.lastMessage}</span> {/* last message */}
                    </div>
                    <time><i className="ri-time-line"></i>{chat.updatedAt}</time> 
                </div>
                )
                }


                
            </div>
            
        </div>
    );
}

export default Chats;
