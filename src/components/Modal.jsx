import PropTypes from 'prop-types';

Modal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired,
};

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
