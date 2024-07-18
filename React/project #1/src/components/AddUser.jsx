import React, { useContext, useEffect, useState } from 'react';
import { ModalContext } from "../Contexts/ModalContext";
import './css/AddUser.scss';
import { arrayUnion, collection, doc, getDocs, query,serverTimestamp,setDoc,updateDoc,where } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { toast } from 'react-toastify';
import { useUserStore } from '../lib/userStore';
import { useChatStore } from '../lib/chatStore';

const AddUser = () => {

    const { modal, setModal } = useContext(ModalContext);
    const [user,setUser] = useState(null);
    const {currentUser} = useUserStore();
    const [searchUsername,setSearchUsername] = useState('');
    const {chatId} = useChatStore();

    const handleSearch = async (e) => {
        e.preventDefault();
      
      
        try {
       
          const userRef = collection(db, "users");
          
   
          const q = query(userRef, where("username", "==", searchUsername));
    
          const querySnapShot = await getDocs(q);
     
          
          if (!querySnapShot.empty) {
            if(querySnapShot.docs[0].data().username == currentUser.username){
              toast.warn('Вы пытаетесь найти себя -_-');
         
      
              
              setUser(null);
            } else{
              setUser(querySnapShot.docs[0].data())
            }
          }
        } catch (error) {
            toast.error(error.message)
        } finally{
          console.log("finnaly думать")
        }
      };


      const handleAdd = async () => {
        const chatRef = collection(db, "chats");
        const userChatsRef = collection(db, "userchats");
       
    
        try {
          const newChatRef = doc(chatRef);
          
          await setDoc(newChatRef, {
            createdAt: serverTimestamp(),
            messages: [],
          });
    
          await updateDoc(doc(userChatsRef, user.id), {
            chats: arrayUnion({
              chatId: newChatRef.id,
              lastMessage: "",
              receiverId: currentUser.id,
              updatedAt: Date.now(),
            }),
          });
    
          await updateDoc(doc(userChatsRef, currentUser.id), {
            chats: arrayUnion({
              chatId: newChatRef.id,
              lastMessage: "",
              receiverId: user.id,
              updatedAt: Date.now(),
            }),
          });
          toast.success(`Вы успешно добавили чат с пользователем ${searchUsername}`)
        } catch (err) {
          toast.error(err);
        }
      };

  
      

    useEffect(() => {
  
        const handleClickOutside = (e) => {
            if (modal && e.target.classList.contains('overlay')) {
                setModal(false);
                setSearchUsername('');
               
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
            setSearchUsername('');
        };
    
    }, [modal, setModal]);

  
    return (
        <div className="overlay" style={modal ? { display: "block" } : { display: "none" }}>
            <div className='modal__addUser' onClick={(e) => e.stopPropagation()}>
                <i className="ri-close-fill modal__close__btn" onClick={() => setModal(prev => !prev)}></i>
                <form className='form__search' onSubmit={handleSearch}>
                   <h2>Добавление чата</h2>
                    <div className="search">
                        <i className="ri-search-line"></i>
                        <input type="text" placeholder='Добавить новый чат' name='username' value={searchUsername} onChange={e =>setSearchUsername(e.target.value)}/>
                        <button>Найти</button>
                    </div>
                </form>
                <div className="result__search">
                {!user ? <p style={{textAlign:"center"}}>Введите имя пользователя для поиска!</p> : 
                user && (
                    <div className="result__search__item">
                        <div className="result__search__item__info">
                            <img src={user.avatar || "../img/avatar.png"} alt="" />
                            <h4>{user.username}</h4>
                        </div>
                        <div className="result__search__item__btn">
                            <button onClick={handleAdd}>Добавить</button>
                        </div>
                        
                    </div>
                )}
                </div>
            </div>
        </div>
    );
};

export default AddUser;