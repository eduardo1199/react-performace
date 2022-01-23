import React, { useEffect, useState } from 'react';

import UserContainer from '../components/UserComponent';
import QuantityOrder from '../components/QuantityOrder';
import Button from '../components/Button';

import './styles.css';

interface Order {
  number: number,
  quantity: number,
  reference_number: string,
  price_unit: number,
  toxic: boolean
}

interface User {
  id: number,
  password: string,
  first_name: string,
  last_name: string,
  email: string,
  avatar: string,
  phone_number: string,
  order: Array<Order>
}

function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [visible, setVisible] = useState(true);
  const [seach, setSeach] = useState('');

  useEffect(() => {
    const getApidata = async () => {
      const usersApi = await fetch('http://localhost:3333/users');
      const response = await usersApi.json();
      setUsers(response);
    }
    getApidata();
  }, [])

 /*  const quantityOrder = useMemo(() => users.reduce((acc, user) => {
    acc.quantity += user.order.length;

    return acc;
  }, {
    quantity: 0
  }), [users]);
 */
  const quantityOrder = users.reduce((acc, user) => {
    acc.quantity += user.order.length;

    return acc;
  }, {
    quantity: 0
  });

  const handleSeachUser = (e: any) => {
    e.preventDefault();
    
    return;
  }

 /*  const handleVisible = useCallback(() => {
    setVisible(prev => !prev);
  }, []) */

  const handleVisible = () => {
    setVisible(prev => !prev);
  }

  return (
    <div className="Home">
      <h1>Lista de usuários</h1>
      
      <form onSubmit={handleSeachUser}>
        <input type="text" value={seach} onChange={(e) => setSeach(e.target.value)}/>
      </form>

      <QuantityOrder quantity={quantityOrder.quantity} />

      <Button onClickVisible={handleVisible} />

      {visible && (
        <div className="container-info">
        {users?.map((user) => 
            <UserContainer key={user.id} user={user} />
        )}
        </div>
      )}

    </div>
  );
}

export default Home;
