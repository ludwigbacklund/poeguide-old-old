import React from 'react';
import styled from 'styled-components';

import { desktop } from '../../src/utils/styling';
import { Timeline } from '../../src/components/Timeline/Timeline';
import { Items } from '../../src/components/Items/Items';
import { Gems } from '../../src/components/Gems/Gems';
import { Layout } from '../../src/components/Layout/Layout';
import { useRouter } from 'next/router';

const Build = () => {
  const router = useRouter();
  let { buildId } = router.query;
  buildId = Array.isArray(buildId) ? buildId[0] : buildId;
  const buildIdAsNumber = parseInt(buildId, 10);

  return (
    <BuildWrapper>
      <Timeline buildId={buildIdAsNumber} />
      <Items buildId={buildIdAsNumber} />
      <Gems buildId={buildIdAsNumber} />
    </BuildWrapper>
  );
};

Build.getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>;

const BuildWrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin: 8px;

  @media (${desktop}) {
    display: grid;
    grid-template-columns: 2fr 3fr;
    margin: 24px;
    grid-gap: 24px;
  }
`;

export default Build;
