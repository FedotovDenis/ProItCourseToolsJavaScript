import { useContext } from 'react';
import UserContext from '../context/user';

function Footer() {
  const user = useContext(UserContext);
  return (
    <div>
      <h2>Your preferences</h2>
      <p>Theme: {user.preferences.theme}</p>
      <p>Language: {user.preferences.language}</p>
      <p>Name: {user.name}</p>
      <p>email: {user.email}</p>
    </div>
  );
}

export default Footer;
