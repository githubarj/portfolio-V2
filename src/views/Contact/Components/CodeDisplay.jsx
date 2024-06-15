import {Prism as SyntaxHighlighter}  from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const customStyle = {
  background: 'none',
  fontFamily: 'Fira Code, monospace !important',
  width: '100%',
  fontSize: '14px',
};

// #TODO add todays date in place of the random date

const today = new Date();
const formattedDate = `${today.toLocaleString('en', {
  weekday: 'short',
})} ${today.getDate()} ${today.toLocaleString('en', { month: 'short' })}`;

const CodeDisplay = ({ formValues }) => {
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
        date: "${formattedDate}"
    }

    button.addEventListener('click', () => {
        form.send(message);
    })`}
    </SyntaxHighlighter>
  );
};

export default CodeDisplay;
