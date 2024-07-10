/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../lib/firebase';
import "./css/LoginPage.scss";
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import upload from '../lib/uploads';

const LoginPage = () => {

    // states
    const [isOpen, setIsOpen] = useState(true);
    const [loading, setLoading] = useState(false)
    const [avatar,setAvatar] = useState({
        file: null,
        url: ""
    });


    // functions
    const handleAvatar = e =>{
        if(e.target.files[0]){

            setAvatar({
                file:e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }
       
    }
    // Регистрация
     const handleRegister = async (e) =>{
            e.preventDefault();
            const formData = new FormData(e.target)
            const {username,email,password} = Object.fromEntries(formData);
            setLoading(true);


               // VALIDATE UNIQUE USERNAME
            const usersRef = collection(db, "users");
            const q = query(usersRef, where("username", "==", username));
            const querySnapshot = await getDocs(q);
            if (!querySnapshot.empty) {
                return toast.error("Данный логин уже занят!");
            }
            
            try{
           
            const res = await createUserWithEmailAndPassword(auth,email,password);
            const imgUrl = await upload(avatar.file);

            // Запись в бд
            await setDoc(doc(db, "users", res.user.uid), {
                id: res.user.uid,
                username,
                email,
                avatar: imgUrl,
                blocked: [],
                password
              });

              // Чаты пользователя
                await setDoc(doc(db, "userchats", res.user.uid), {
                chats: []
              });
            
            // Успешное выполнение
            toast.success("Вы успешно зарегистрировались! Выполните вход в систему")
            setLoading(false);
        }catch(err){
            toast.error(err.message);
            setLoading(false);
            
        }finally{
            setLoading(false);
        }
    }




    const handleLogin = async (e) =>{
        e.preventDefault();
        const formData = new FormData(e.target)
        const {email,password} = Object.fromEntries(formData);
        setLoading(true);
        try{
            await signInWithEmailAndPassword(auth,email,password);
            toast.success('Вы успешно авторизовались! Через 3 секунды переадресация в кабинет.');
            setLoading(false);
        } catch(err){
            toast.error(err.message);
            setLoading(false);

        } finally{
            setLoading(false);
        }
    }


    return (
        <div className='LoginPage'>
           {
            isOpen ? (
                <form className='register' onSubmit={handleRegister} >
                    <h1>Регистрация</h1>
                    <label htmlFor="file">
                        <p>Загрузите фото, либо фото будет default</p>
                        <img src={avatar.url || '../img/avatar.png'} />
                    </label>
                    <input type="file" id='file' style={{display:"none"}} onChange={handleAvatar}/>
                    <input type="username" placeholder='Введите свой Логин' name="username" autocomplete="off" required/>
                    <input type="email" placeholder='Введите свой E-mail' name="email" autocomplete="off" required/>
                    <input type="password" placeholder='Введите свой Пароль' name="password"  autocomplete="off" required/>
                    <button disabled={loading}>{loading ? 'Загрузка...' : 'Зарегистрироваться'}</button>
                    <a onClick={() => setIsOpen(prev => !prev)}>Уже есть аккаунт?</a>
                </form>
            ) : (
                <form className='login' onSubmit={handleLogin}>
                    <h1>Вход</h1>
                    <input type="email" placeholder='Введите свой E-mail' name="email" autocomplete="off" required/>
                    <input type="password" placeholder='Введите свой Пароль' name="password" autocomplete="off" required/>
                    <button disabled={loading}>{loading ? 'Загрузка...' : 'Войти'}</button>
                    <a onClick={() => setIsOpen(prev => !prev)}>Нет аккаунта?</a>
                </form>

            )
           }
            

           
         
            
        </div>
    );
}

export default LoginPage;
