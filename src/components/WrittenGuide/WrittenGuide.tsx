import React, { useState } from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            text: 'A line of text in a paragraph.',
          },
        ],
      },
    ],
  },
});

const CodeNode = (props: any) => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
};

export const WrittenGuide: React.FC = () => {
  const [editorValue, setEditorValue] = useState(initialValue);

  const onChange = ({ value }: any) => {
    setEditorValue(value);
  };

  // Define a new handler which prints the key that was pressed.
  const onKeyDown = (event: any, editor: any, next: any) => {
    // Return with no changes if it's not the "`" key with ctrl pressed.
    if (event.key != '`') return next();

    // Prevent the "`" from being inserted by default.
    event.preventDefault();

    // Otherwise, set the currently selected blocks type to "code".
    editor.setBlocks('code');
  };

  const renderBlock = (props: any, _: any, next: any) => {
    switch (props.node.type) {
      case 'code':
        return <CodeNode {...props} />;
      default:
        return next();
    }
  };

  return (
    <div>
      <h1>Guide</h1>
      <Editor
        value={editorValue}
        onChange={onChange}
        onKeyDown={onKeyDown}
        renderBlock={renderBlock}
      />
    </div>
  );
};
