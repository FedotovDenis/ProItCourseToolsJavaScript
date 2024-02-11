import LoginButton from './LoginButton';

/*
function WelcomeComponent({ user }) {
  if (user.isLoggedIn) {
    return <div>Welcome, {user.name}</div>;
  }
  return <button>Login</button>;
}
 
export default WelcomeComponent;
*/
import React from 'react';

function UserProfile({ user }) {
  if (user.isLoggedIn) {
    return <div>Профіль користувача: {user.name}</div>;
  } else {
    return <div>Користувач не увійшов у систему</div>;
  }
}

export default UserProfile;
