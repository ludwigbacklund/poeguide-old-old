import React, { Fragment } from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';

import Button from 'material-ui/Button';

function ReactModalAdapter({
  className,
  overlayClassName,
  modalClassName,
  ...props
}) {
  return (
    <ReactModal
      className={modalClassName}
      overlayClassName={overlayClassName}
      portalClassName={className}
      {...props}
    />
  );
}

const StyledModal = styled(ReactModalAdapter).attrs({
  overlayClassName: 'Overlay',
  modalClassName: 'Modal',
})`
  .Overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .Modal {
    display: flex;
    flex-direction: column;
    padding: 35px;
    background-color: white;
  }
`;

const SaveInput = styled.input`
  border-top: none;
  border-left: none;
  border-right: none;
  font-size: 16px;
  margin-bottom: 10px;
`;

const ButtonHolder = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ModalButton = styled(Button)`
  margin: 10px 10px 10px;
`;

const Modal = ({
  showModal,
  handleCloseModal,
  inputValue,
  inputOnChange,
  inputOnSubmit,
}) => (
  <div>
    <StyledModal
      isOpen={showModal}
      onRequestClose={handleCloseModal}
      ariaHideApp={false}
    >
      <SaveInput
        placeholder="Save as..."
        value={inputValue}
        onChange={inputOnChange}
        maxLength="20"
      />
      <ButtonHolder>
        <ModalButton
          variant="raised"
          color="secondary"
          size="small"
          onClick={handleCloseModal}
        >
          Cancel
        </ModalButton>
        <ModalButton
          variant="raised"
          color="primary"
          size="small"
          onClick={inputOnSubmit}
        >
          Save
        </ModalButton>
      </ButtonHolder>
    </StyledModal>
  </div>
);

export default Modal;
