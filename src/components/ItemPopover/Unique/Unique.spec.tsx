import React from 'react';
import { render } from 'react-testing-library';
import { ModifierType } from '../../../../__generated__/globalTypes';

import Unique from './Unique';

describe('Popover', () => {
  const implicitModifier = {
    type: ModifierType.IMPLICIT,
    text: 'Test Implicit Modifier',
    optional: false,
  };

  const explicitModifier = {
    type: ModifierType.EXPLICIT,
    text: 'Test Explicit Modifier',
    optional: false,
  };

  const renderUnique = () => {
    return render(
      <Unique
        data={{
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
        }}
      />,
    );
  };

  it('displays the modifiers separated by modifier type', async () => {
    const { getByTestId } = renderUnique();

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
