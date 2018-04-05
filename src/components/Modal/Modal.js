import React, { Fragment } from 'react';

import AntModal from 'antd/lib/modal';
import Input from 'antd/lib/input';

const Modal = ({
  showModal,
  handleCloseModal,
  inputValue,
  inputOnChange,
  inputOnSubmit,
}) => (
  <div>
    <AntModal
      title="New character"
      visible={showModal}
      onCancel={handleCloseModal}
      onOk={inputOnSubmit}
      ariaHideApp={false}
    >
      <Input
        placeholder="Character name..."
        value={inputValue}
        onChange={inputOnChange}
        maxLength="28"
      />
    </AntModal>
  </div>
);

export default Modal;
