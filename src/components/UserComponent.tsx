import React from 'react';

interface Order {
  number: number,
  quantity: number,
  reference_number: string,
  price_unit: number,
  toxic: boolean
}

export interface UserContainerProps {
  user: {
    id: number,
    password: string,
    first_name: string,
    last_name: string,
    email: string,
    avatar: string,
    phone_number: string,
    order: Array<Order> 
  }
}

/* function UserContainerComponent ({ user }: UserContainerProps) {
  return (
    <div>
      <h2>{user.first_name} - <span>{user.id}</span></h2>

      <p>{user.email}</p>

      <p>{user.phone_number}</p>
    </div>
  )
} */

function UserContainer ({ user }: UserContainerProps) {
  return (
    <div>
      <h2>{user.first_name} - <span>{user.id}</span></h2>

      <p>{user.email}</p>

      <p>{user.phone_number}</p>
    </div>
  )
}

/* export const UserContainer = memo(UserContainerComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.user, nextProps.user);
});
 */

export default UserContainer;