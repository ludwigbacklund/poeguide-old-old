import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import wait from 'waait';

import Unique, { POPOVER_UNIQUE } from './Unique';
import { ModifierType } from '../../../../graphql-types';
import { render } from '../../../../utils/custom-render';
import { act } from 'react-dom/test-utils';

const implicitModifier = {
  type: ModifierType.Implicit,
  text: 'Test Implicit Modifier',
  optional: false,
};

const explicitModifier = {
  type: ModifierType.Explicit,
  text: 'Test Explicit Modifier',
  optional: false,
};

const mocks = [
  {
    request: {
      query: POPOVER_UNIQUE,
      variables: {
        name: 'Test Unique',
      },
    },
    result: {
      data: {
        uniqueByName: {
          name: 'Test Unique',
          baseType: 'Test Basetype',
          iconUrl: 'http://example.com/image.png',
          flavourText: 'Test Flavour Text',
          levelRequirement: 1,
          strRequirement: 2,
          dexRequirement: 3,
          intRequirement: 4,
          modifiers: {
            nodes: [implicitModifier, explicitModifier],
          },
        },
      },
    },
  },
];

describe('Popover', () => {
  const renderUnique = () => {
    return render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Unique name='Test Unique' />
      </MockedProvider>,
    );
  };

  it('displays the modifiers separated by modifier type', async () => {
    const { getByTestId } = renderUnique();

    await act(async () => {
      await wait(0);
    });

    expect(getByTestId('implicit-modifiers').children.length).toBe(1);
    expect(getByTestId('implicit-modifiers')).toHaveTextContent(
      implicitModifier.text,
    );
    expect(getByTestId('explicit-modifiers').children.length).toBe(1);
    expect(getByTestId('explicit-modifiers')).toHaveTextContent(
      explicitModifier.text,
    );
  });
});
