import React, { Component } from 'react';
import styled from 'styled-components';

import { Select, Button, Input, Tooltip } from 'antd';

import Modal from '../Modal/Modal';

const Toolbar = styled.div`
  padding-bottom: 10px;
  display: flex;
  align-items: center;
`;

// The selection dropdown styling is in the global styles, not sure how to do it otherwise
const CharacterSelect = styled(Select)`
  flex: 1;

  & .ant-select-selection {
    background-color: #424242;
    border: 1px solid #212121;
    color: rgba(255, 255, 255, 0.7);
  }

  & .ant-select-arrow {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const IconButton = styled(Button)`
  background-color: #424242;
  border: 1px solid #212121;

  &:hover {
    background-color: #515151;
  }

  &:focus {
    background-color: #515151;
  }

  & .anticon {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const DarkInput = styled(Input)`
  background-color: #424242;
  border: 1px solid #303030;
`;

class TimelineToolbar extends Component {
  state = {
    showNewCharacterModal: false,
    newCharacterInputValue: '',
    showDeleteModal: false,
  };

  onCharacterSelect = characterId => {
    const { selectCharacter } = this.props;

    selectCharacter(characterId);
  };

  saveInputOnChange = e => {
    this.setState({ newCharacterInputValue: e.target.value });
  };

  newCharacterOnOk = () => {
    const { addCharacter } = this.props;
    const { newCharacterInputValue } = this.state;

    addCharacter(newCharacterInputValue);
    this.setState({ newCharacterInputValue: '' });
    this.handleCloseNewCharacterModal();
  };

  deleteOnOk = () => {
    const { selectedCharacterId, removeCharacter } = this.props;

    removeCharacter(selectedCharacterId);
    this.handleCloseDeleteModal();
  };

  handleOpenNewCharacterModal = () => {
    this.setState({ showNewCharacterModal: true });
  };

  handleCloseNewCharacterModal = () => {
    this.setState({ showNewCharacterModal: false });
  };

  handleOpenDeleteModal = () => {
    this.setState({ showDeleteModal: true });
  };

  handleCloseDeleteModal = () => {
    this.setState({ showDeleteModal: false });
  };

  renderDeleteIcon = selectedCharacterId => (
    <IconButton
      icon="delete"
      onClick={() => {
        if (selectedCharacterId.toString() !== '0') {
          this.handleOpenDeleteModal();
        }
      }}
    />
  );

  render() {
    const {
      showNewCharacterModal,
      newCharacterInputValue,
      showDeleteModal,
    } = this.state;
    const { characters, selectedCharacterId } = this.props;

    return (
      <Toolbar>
        <CharacterSelect
          value={selectedCharacterId.toString()}
          onChange={value => this.onCharacterSelect(value)}
        >
          {Object.entries(characters).map(character => (
            <Select.Option key={character[0]} value={character[0]}>
              {character[1].name || character[0]}
            </Select.Option>
          ))}
        </CharacterSelect>
        <IconButton icon="save" onClick={this.handleOpenNewCharacterModal} />
        {selectedCharacterId.toString() === '0' ? (
          <Tooltip title="You cannot delete the default character">
            {this.renderDeleteIcon(selectedCharacterId)}
          </Tooltip>
        ) : (
          this.renderDeleteIcon(selectedCharacterId)
        )}

        <Modal
          title="New character"
          showModal={showNewCharacterModal}
          handleCloseModal={this.handleCloseNewCharacterModal}
          onOk={this.newCharacterOnOk}
        >
          <DarkInput
            placeholder="Character name..."
            value={newCharacterInputValue}
            onChange={this.saveInputOnChange}
            maxLength="28"
          />
        </Modal>
        <Modal
          title="Delete"
          showModal={showDeleteModal}
          handleCloseModal={this.handleCloseDeleteModal}
          onOk={this.deleteOnOk}
        >
          <p>Are you sure you want to delete this character?</p>
        </Modal>
      </Toolbar>
    );
  }
}

export default TimelineToolbar;
