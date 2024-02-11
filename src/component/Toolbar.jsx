import { useContext } from 'react';
import ThemeContext from '../context/theme';

function Toolbar() {
  const theme = useContext(ThemeContext);
  return (
    <div>
      style={{
        background: theme === 'dark' ? 'turquoise' : 'white',
        height: '500px',
      }}
      Активна тема
    </div>
  );
}

export default Toolbar;
