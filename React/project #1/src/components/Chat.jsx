import React, { useEffect, useRef, useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import { useChatStore } from '../lib/chatStore';
import { useUserStore } from '../lib/userStore';
import './css/Chat.scss';

import { arrayUnion, doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { toast } from 'react-toastify';

const Chat = () => {
    const [openEmo,setOpenEmo] = useState(false);
    const [text,setText] = useState('');
    const [chat,setChat] = useState()
    const {currentUser} = useUserStore();
    const {chatId, user} = useChatStore();
    const endRef = useRef(null);
  

    const handleEmoji = (e) =>{
        setText((prev) => prev + e.emoji);
        setOpenEmo(prev => !prev)
        
    }

    const handleSend = async (e) =>{
        e.preventDefault();
        if(text === "") return;
       

        try {
            await updateDoc(doc(db,"chats", chatId),{
                messages:arrayUnion({
                    senderId: currentUser.id,
                    text,
                    createdAt: new Date()
                }),
            });
            
            const userIDs = [currentUser.id, user.id];

            userIDs.forEach(async (id) =>{

                const userChatsRef = doc(db,"userchats", id)
                const userChatsSnapshot = await getDoc(userChatsRef)

                if(userChatsSnapshot.exists()){
                    const userChatsData = userChatsSnapshot.data()
                    const chatIndex = userChatsData.chats.findIndex(c => c.chatId === chatId)
                
                    userChatsData.chats[chatIndex].lastMessage = text;
                    userChatsData.chats[chatIndex].isSeen = id === currentUser.id ? true : false;
                    userChatsData.chats[chatIndex].updatedAt = Date.now();
                    await updateDoc(userChatsRef,{
                    chats: userChatsData.chats,
                })
            }
        });

        } catch (error) {
            toast.error(error)
        } finally{
            setText('');
        }
    }

    useEffect(() =>{
        endRef?.current?.scrollIntoView({behavior: "smooth"});
    },[])

    useEffect(() =>{
        const unSub = onSnapshot(doc(db, "chats", chatId), (res) =>{
            setChat(res.data())
        })
        return () =>{
            unSub();
        }
    },[chatId])

    return (
        <div className='chat'>

            {/* CHAT TOP  */}

            <div className="chat__top">
                <div className="chat__top__info">
                    <img src={user?.avatar || "../img/avatar.png"} alt="" />
                   
                   <div className="chat__top__info__userInfo">
                        <h5>{user?.username}</h5>
                        <span>Online</span>
                   </div>

                </div>
                <div className="chat__top__btns">
                    <i className="ri-phone-line"></i>
                    <i className="ri-live-line"></i>
                    <i className="ri-information-line"></i>
                </div>
            </div>

            {/* CHAT CENTER  */}


            <div className="chat__center">
                {chat?.messages.length == 0 ? <div className='nado'><p>Пока сообщений нет. Будь первым - напиши.</p></div> : 
                chat?.messages.map((message) =>(
                <div className={message.senderId === currentUser?.id ? "message own" : "message"} key={message?.createdAt}>
                
                    <div className="texts">
                        {message.img && <img 
                        src={message.img}
                        alt="" />}
                        <p>
                        {message.text}
                        </p>
                        {/* <span>{message.createdAt.toDate()}</span> */}
                        
                    </div>
                </div>
                ))}

                <div ref={endRef}></div>

            </div>

            {/* CHAT BOTTOM  */}

            <div className="chat__bottom">
                <div className="chat__bottom__file">
                    <i className="ri-file-add-line"></i>
                </div>
                <form className="chat__bottom__send" onSubmit={handleSend}>
                    <input type="text" placeholder='Напишите сообщение...' value={text} onChange={(e) => setText(e.target.value)} />
                </form>
                <div className="chat__bottom__btns">

                    <div className="emoji">
                        <i className="ri-emoji-sticker-line" onClick={() => setOpenEmo(prev => !prev)}></i>
                        <div className="picker">
                            <EmojiPicker open={openEmo} onEmojiClick={handleEmoji} />
                        </div>
                    </div>
                    <i className="ri-send-plane-fill" onClick={handleSend}></i>
                </div>
            </div>




        </div>
    );
}

export default Chat;
