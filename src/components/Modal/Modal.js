import React from 'react';
import styled from 'styled-components';

import { Modal as AntModal } from 'antd';

const DarkModal = styled(AntModal)`
  background-color: #303030;
  padding-bottom: 0;

  & .ant-modal-content {
    background-color: #303030;
  }

  & .ant-modal-header {
    background-color: #303030;
    border-bottom: 1px solid #212121;
  }

  & .ant-modal-title,
  .ant-modal-close-x,
  .ant-input,
  p {
    color: rgba(255, 255, 255, 0.7);
  }

  & .ant-modal-footer {
    border-top: 1px solid #212121;
  }

  & .ant-btn {
    color: rgba(255, 255, 255, 0.7);
    background-color: #424242;
    border-color: #424242;
  }

  & .ant-btn:hover {
    border-color: #40a9ff;
  }

  & .ant-btn-primary {
    color: rgba(255, 255, 255, 0.7);
    background-color: #424242;
    border-color: #40a9ff;
  }
`;

const Modal = ({
  title, showModal, handleCloseModal, onOk, children,
}) => (
  <DarkModal
    title={title}
    visible={showModal}
    onCancel={handleCloseModal}
    onOk={onOk}
    ariaHideApp={false}
  >
    {children}
  </DarkModal>
);

export default Modal;
