import PropTypes from 'prop-types';

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

Modal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default Modal;
