import React, { useEffect, useState, /*lazy Suspense*/  } from 'react';

import UserContainer from '../components/UserComponent';
import QuantityOrder from '../components/QuantityOrder';
import Button from '../components/Button';

import './styles.css';
//import { List, AutoSizer, ListRowRenderer } from 'react-virtualized';

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

/* const UserContainerComponent = lazy(() => {
  return import('../components/UserComponent')
}) */

function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [visible, setVisible] = useState(false);
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
   
   é melhor executar essas operações quando for obtido a lista de usuários, assim como formação de dados ou operações de cálculos
  
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

  /* const lisRowRender: ListRowRenderer = ({ index, style ,key }) => {
    return(
      <div key={index} style={style}>
        <UserContainer key={key} user={users[index]} />
      </div>
    
    )
  } */

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
      
      {/* 
      {visible && (
        <div className="container-info">
          <Suspense fallback={<div>Carregando..</div>}>
            {users?.map((user) => 
              <UserContainerComponent key={user.id} user={user} />
            )}
          </Suspense>
        </div>
      )} */}

      {/*  <div style={{width: '100%', height: '100vh'}}>
        <AutoSizer>
          {({ width, height }) => ( 
            <List 
              height={height} 
              width={width}
              rowHeight={100}
              overscanRowCount={2}
              rowCount={users.length}
              rowRenderer={lisRowRender}
            />
          )}
        </AutoSizer>
      </div> */}

    </div>
  );
}

export default Home;
