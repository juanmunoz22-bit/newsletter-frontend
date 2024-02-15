import { useRef } from 'react';

import EmailEditor from 'react-email-editor';

const EmailBuilder = () => {

  const emailEditorRef = useRef(null);

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { html } = data;
      console.log('exportHtml', html);
    });
  };

  return (
    <>
      <div>
        <button onClick={exportHtml}>Export HTML</button>
      </div>

      <EmailEditor
        ref={emailEditorRef}
      />
    </>
  )
}

export default EmailBuilder;