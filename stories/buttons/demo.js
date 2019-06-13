import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/styles/prism";

const Demo = (src) => (
  <div>
    {src}
    <SyntaxHighlighter language={'html'} style={darcula} showLineNumbers={true}>
      {`${ReactDOMServer.renderToStaticMarkup(src).replace(/<\/button> /g, '<\/button>\n')}`}
    </SyntaxHighlighter>
  </div>);

export default Demo;