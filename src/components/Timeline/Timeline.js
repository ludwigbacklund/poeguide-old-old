import React from 'react';
import styled from 'styled-components';

import SectionHeader from '../SectionHeader/SectionHeader';
import Item from '../Item/Item';
import Act from '../Act/Act';

const TimelineContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const TimelineItems = styled.div`
  flex: 1;
  overflow: scroll;
  padding: 15px;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.14);
`;

const acts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Timeline = ({ items, onClick }) => (
  <TimelineContainer>
    <SectionHeader text="Timeline" />
    <TimelineItems>
      {acts.map(act => (
        <Act key={act} number={act}>
          {items[act]
            ? items[act].map(item => (
              <Item
                key={item.name}
                id={item.id}
                name={item.name}
                levelRequirement={item.level_req}
                onClick={onClick}
              />
              ))
            : null}
        </Act>
      ))}
    </TimelineItems>
  </TimelineContainer>
);

export default Timeline;
