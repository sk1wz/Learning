/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

interface IOperationItem{
  id: number;
  type: string;
  money: number;
}

interface IUser {
  id: number;
  name: string;
  balance: number;
}

const App = () => {

  // Можно сделать декомпозицию и улучшить читабельность кода.
  // Это является тренировочным макетом и не несет в себе оптимизацию кода.
  const [user,setUser] = useState<IUser | null>(null)
  const [operations,setOperations] = useState<IOperationItem[]>([]);
  
  const changeBalanceTake = async(newBalance: number,count: number, type: string) =>{
    try {
      const {data} = await axios.post(`api`,{
        balance: newBalance
      });
      if(data){
        const {data} = await axios.post('api',{
          id: Date.now(),
          type: type,
          money: count
        });
      }
      toast.success(`Вы успешно сняли ${count} рублей.`)
    } catch (error) {
      toast.warn(`Возникла ошибка: ${error}`)
    }
 
  }

    
  const changeBalanceTransfer = async(newBalance: number,count: number, type: string) =>{
    try {
      const {data} = await axios.post(`https://237b95a84c86097c.mokky.dev/information`,{
        balance: newBalance
      });
      if(data){
        const {data} = await axios.post('https://237b95a84c86097c.mokky.dev/operations',{
          id: Date.now(),
          type: type,
          money: count
        });
      }
      toast.success(`Вы успешно перевели ${count} рублей. `)
    } catch (error) {
      toast.warn(`Возникла ошибка: ${error}`)
    }
 
  }

    
  const changeBalanceDeposit = async(newBalance: number, count: number, type: string) =>{
    try {
      const {data} = await axios.post(`api`,{
        balance: newBalance
      });
      if(data){
        const {data} = await axios.post('api',{
          id: Date.now(),
          type: type,
          money: count
        });
      }
      toast.success(`Вы успешно пополнили ${count} рублей.`)
    } catch (error) {
      toast.warn(`Возникла ошибка: ${error}`)
    }
 
  }

  // asyncs
  const fetchOperations = async(type:string) =>{
    try {
       if(type === "take"){
        let countPrompt: string | null = prompt("Введите кол-во денежных средств!")
        let count = Number(countPrompt)
        if(count < 10){
          toast.error(`Нельзя перевести ${count}. Минимум 10 рублей.`)
        } else{
          if(user && user.balance < count){
            toast.error('Недостаточно средств для снятия.')
          } else{
            const newBalance = user?.balance !== undefined ? user.balance - count : 0;
            changeBalanceTake(newBalance,count,type);
          
            
    
           
          }
        }
       }

       if(type === "deposit"){
        let countPrompt: string | null = prompt("Введите кол-во денежных средств!")
        let count = Number(countPrompt)
      
        if(count < 10){
          toast.error(`Нельзя пополнить ${count}. Минимум 10 рублей.`)
        } else if(count > 100000){
          toast.error(`Нельзя пополнять более 100.000 рублей.`)
        } else{
          const newBalance = user?.balance !== undefined ? user.balance + count : 0
          changeBalanceDeposit(newBalance,count,type)
          
        }
        
      }

      if(type === "transfer"){
        let countPrompt: string | null = prompt("Введите кол-во денежных средств!")
        let count = Number(countPrompt)
        if(count < 10){
          toast.error(`Нельзя перевести ${count}. Минимум 10 рублей.`)
        } else{
          if(user && user.balance  < count) {
            toast.error('Недостаточно средств для перевода.')
          } else{
            const newBalance = user?.balance !== undefined ? user.balance - count : 0
            changeBalanceTransfer(newBalance,count,type)
           
  
          }
         
        }
      }
    } catch (error) {
      toast.warn(`Возникла ошибка: ${error}`)
    }
  }





  const fetchInformation = async () => {
    try {

      const response = await axios.get('https://237b95a84c86097c.mokky.dev/information/1');
      setUser(response.data);
 
    } catch (error) {
      toast.warn(`Ошибка при загрузке информации: ${error}`);
    }
  };
  


  const fetchData = async() =>{
    try {
      const {data} = await axios.get('https://237b95a84c86097c.mokky.dev/operations');
      setOperations(() => [...data])
    } catch (error) {
      toast.warn(`Произошла ошибка: ${error}`);
    }
   
  }




  useEffect(() =>{
    fetchData();
    fetchInformation();
  },[])

  return (
    <div className="App">
        <ToastContainer autoClose={2000} closeOnClick/>
      <div className="container">
        <div className="left">
          <h2>Личные данные</h2>
          <div className="lc">
          {user && (
                <>
                    <h3>Пользователь:</h3>
                    <h3>Имя: {user.name}</h3>
                    <h3>Баланс: {user.balance}</h3>
                </>
            )}

          </div>
        </div>
        <div className="center">
          <h2>Платежная история</h2>
          <div className="history">
          {
              operations.length != 0 ? (
                operations.map(operation => (
                  <div className="history__item">
                    <div className="history__item__left">
                      <span>Тип операции</span>
                      <p className={operation.type === "deposit" ? "deposit" : 
                        operation.type === "transfer" ?  "transfer" : 
                        operation.type === "take" ? "take" : ""}
                      >
                        {operation.type === "deposit" ? "Пополнение" : 
                        operation.type === "transfer" ?  "Перевод" : 
                        operation.type === "take" ? "Снятие" : ""}
                      </p>
                    </div>
                    <div className="history__item__right">
                      <p className={operation.type === "deposit" ? "deposit" : 
                        operation.type === "transfer" ?  "transfer" : 
                        operation.type === "take" ? "take" : ""}
                      >
                        {operation.money} ₽
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <h4>Пока не было совершено никаких операций</h4>
              )
          }
           
          </div>
        </div>
        <div className="right">
          <h2>Действия</h2>
          <div className="actions"> 
            <button onClick={() => fetchOperations("deposit")}>Пополнить деньги</button>
            <button onClick={() => fetchOperations("transfer")}>Перевести деньги</button>
            <button onClick={() => fetchOperations("take")}>Снять деньги</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
