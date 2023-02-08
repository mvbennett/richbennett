interface props {
  handleClick: React.MouseEventHandler<HTMLButtonElement>,
}

const FormButton = ({ handleClick }: props) => {
  return (
    <div className="form-toggle-box">
      <button className="form-toggle" onClick={handleClick}>
        Contact
      </button>
    </div>
  )
}

export default FormButton;
