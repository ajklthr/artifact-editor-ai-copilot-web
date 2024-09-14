// ArtifactPanel.js
import React, { useState } from 'react';
import { Editor, EditorState, ContentState } from 'draft-js';
import 'draft-js/dist/Draft.css';

function ArtifactPanel({ content }) {
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(ContentState.createFromText(content))
  );

  // Update editorState when new content arrives
  React.useEffect(() => {
    setEditorState(
      EditorState.createWithContent(ContentState.createFromText(content))
    );
  }, [content]);

  return (
    <div style={{ padding: '10px' }}>
      <Editor editorState={editorState} readOnly={true} />
    </div>
  );
}

export default ArtifactPanel;
