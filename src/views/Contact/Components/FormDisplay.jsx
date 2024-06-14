import {Prism as SyntaxHighlighter}  from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const customStyle = {
  background: 'none',
  fontFamily: 'Fira Code, monospace !important',
  width: '100%',
  fontSize: '14px',
};

const FormDisplay = ({ formValues }) => {
  return (
    <SyntaxHighlighter
      wrapLongLines
      wrapLines
      language='javascript'
      style={solarizedlight}
      customStyle={customStyle}
    >
      {` const button = document.querySelector('#sendBtn');

    const message = {
        name: "${formValues.name || ''}",
        email: "${formValues.email || ''}",
        message: "${formValues.message || ''}",
        date: "Thu 21 Apr"
    }

    button.addEventListener('click', () => {
        form.send(message);
    })`}
    </SyntaxHighlighter>
  );
};

export default FormDisplay;
