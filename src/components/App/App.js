import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Items from '../Items/Items';
import Timeline from '../Timeline/Timeline';
import { getTimelineItems } from '../../features/selectors';
import { removeItem, addItem } from '../../features/timeline/actions';

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const App = ({
  uniquesData, gemsData, timelineItems, removeItem, addItem,
}) => (
  <MainContainer>
    <Items
      header="Uniques"
      items={uniquesData}
      type="unique"
      onClick={addItem}
    />
    <Timeline items={timelineItems} onClick={removeItem} />
    <Items header="Gems" items={gemsData} type="gem" onClick={addItem} />
  </MainContainer>
);

const mapState = state => ({
  uniquesData: state.uniques.uniquesData,
  gemsData: state.gems.gemsData,
  timelineItems: getTimelineItems(state),
});

export default connect(mapState, { removeItem, addItem })(App);
