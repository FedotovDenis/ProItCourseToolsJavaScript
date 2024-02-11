import styles from './Button.module.css';

const StyledButton = ({ type }) => {
  const className = type === 'danger' ? styles.dangerButton : styles.baseButton;

  return (
    <div>
      <button className={className}>Button</button>

      <p className={styles.newChangingTheColorOfTheTextToRed}>Зміна кольору тексту на червоний</p>

      <p className={styles.settingTheIndentToTheLeft}>Відступ зліва в 10px</p>

      <p className={styles.fontChangesToArial}>Зміна шрифту на Arial</p>

    </div>
  );
};

export default StyledButton;

/*
const StyledButton = styled.button`
  background-color: ${(props) => (props.active ? 'blue' : 'red')};
  color: white;
  padding: 10px;
  border-radius: 5px;
  font-size: 19px;

  &:active {
    background-color: green;
  }
`;

const ButtonClickMe = ({ active }) => {
  return (
    <div>
      <StyledButton active={active}>Click Me</StyledButton>
    </div>
  );
};
export default ButtonClickMe;
*/

// <StyledButton type="danger" />
