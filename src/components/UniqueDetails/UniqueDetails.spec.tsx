import React from 'react';

import { UniqueDetails } from './UniqueDetails';
import { ModifierType } from '../../graphql-types';
import { render } from '../../utils/custom-render';

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

describe('Popover', () => {
  const renderUnique = () => {
    return render(
      <UniqueDetails
        name='Test Unique'
        baseType='Test Basetype'
        iconUrl='http=//example.com/image.png'
        flavourText='Test Flavour Text'
        levelRequirement={1}
        strRequirement={2}
        dexRequirement={3}
        intRequirement={4}
        modifiers={[implicitModifier, explicitModifier]}
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
