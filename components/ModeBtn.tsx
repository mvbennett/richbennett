interface props {
  toggleMode: React.MouseEventHandler<HTMLButtonElement>,
}

const ModeBtn = ({ toggleMode }: props) => {
  return (
    <>
      <button className="toggle" onClick={toggleMode}>Mode</button>
    </>
  );
}

export default ModeBtn;
