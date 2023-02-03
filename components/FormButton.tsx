interface props {
  handleClick: React.MouseEventHandler<HTMLButtonElement>,
}

const FormButton = ({ handleClick }: props) => {
  return (
    <div className="form-toggle-box">
      <button className="form-toggle" onClick={handleClick}>
        Contact me to schedule a session
      </button>
    </div>
  )
}

export default FormButton;
