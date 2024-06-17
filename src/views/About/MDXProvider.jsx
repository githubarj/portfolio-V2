import { MDXProvider } from '@mdx-js/react';

const components = {
  // Example: Customize the <h1> tag
  h1: (props) => <h1 style={{ color: 'tomato' }} {...props} />,
  // You can add more custom components for other Markdown elements
  // p: (props) => <p style={{ fontSize: '18px' }} {...props} />,
  // a: (props) => <a style={{ textDecoration: 'underline' }} {...props} />,
  // img: (props) => <img style={{ maxWidth: '100%' }} {...props} />
};

const MDXWrapper = ({ children }) => {
  return <MDXProvider components={components}>{children} </MDXProvider>;
};

export default MDXWrapper;
