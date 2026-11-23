function Popup({ message }) {
  const buttonConfirmClick = () => {
    console.log("Confirm button clicked!");
  };
  const buttonCancelClick = () => {
    console.log("Cancel button clicked!");
  };
  return (
    <>
      <div className="popup">
        <span>{message}</span>
        <div className="popup_btns">
          <button className="popup__btn" onClick={buttonConfirmClick}>
            Confirm
          </button>
          <button
            className="popup__btn popup__btn--cancel"
            onClick={buttonCancelClick}
          >
            Cancel
          </button>
        </div>
      </div>
      <div className="backdrop"></div>
    </>
  );
}
export default Popup;
