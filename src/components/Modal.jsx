const Modal = ({ isVisible }) => {
  return (
    <section
      className={
        isVisible
          ? 'modal-container modal-container--visible'
          : 'modal-container'
      }
    ></section>
  );
};

export default Modal;
