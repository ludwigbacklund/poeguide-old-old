import React, { memo, useState } from 'react';
import styled from 'styled-components';
import { Popover } from '../../Popover/Popover';
import { UniqueConnector } from '../../Unique/UniqueConnector';
import { ItemSelector } from '../../ItemSelector/ItemSelector';

interface ItemProps {
  uniqueName: string;
  slot: string;
  iconUrl: string;
  onReplace: (newUniqueName: string) => void;
}

const ItemComponent: React.SFC<ItemProps> = ({
  uniqueName,
  slot,
  iconUrl,
  onReplace,
}) => {
  const [replaceMode, setReplaceMode] = useState(false);

  const quitReplaceMode = () => {
    setReplaceMode(false);
  };

  const quitReplaceModeIfEscapePressed = (e: KeyboardEvent) => {
    if (e.keyCode === 27) setReplaceMode(false);
  };

  return (
    <ItemSelector
      visible={replaceMode}
      onSelect={item => {
        onReplace(item.name || '');
        setReplaceMode(false);
      }}
      onClickOutside={quitReplaceMode}
      onKeyUp={quitReplaceModeIfEscapePressed}
    >
      <Popover
        content={replaceMode ? null : <UniqueConnector name={uniqueName} />}
      >
        <Icon
          slot={slot}
          src={iconUrl}
          onClick={() => setReplaceMode(true)}
          scaleOnHover={!replaceMode}
        />
      </Popover>
    </ItemSelector>
  );
};

export const Item = memo(ItemComponent);

interface IconProps {
  scaleOnHover: boolean;
  slot: string;
}

const Icon = styled.img`
  grid-area: ${({ slot }: IconProps) => slot};
  align-self: center;
  justify-self: center;
  object-fit: scale-down;
  max-width: 100%;
  max-height: 100%;
  transition: all 0.3s ease-in-out;
  ${({ slot }: IconProps) => slot.startsWith('flask') && 'margin-left: -100%;'}

  ${({ scaleOnHover }: IconProps) =>
    scaleOnHover &&
    `
    :hover {
      transform: scale(1.2, 1.2);
      cursor: pointer;
    }
  `}
`;
