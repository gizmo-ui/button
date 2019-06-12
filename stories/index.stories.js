import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { storiesOf } from '@storybook/react';
import {
  withInfo
} from '@storybook/addon-info';
import renderHTML from 'react-render-html';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/styles/prism";

import '../dist/css/button.css';
import "@fortawesome/fontawesome-free/css/all.css";

const colors = ['blue', 'purple', 'red', 'orange', 'green', 'white', 'black'];
const sizes = ['xxsmall', 'xsmall', 'small', 'compact', 'large', 'xlarge', 'xxlarge'];

const Button = (className, children = "button") => renderHTML(` <button class="button ${className}">${children}</button> `);
const Simple = (outline = false, gradient = false) => ([
  colors.map(color => Button(`-${color} ${outline ? '-outline' : ""} ${gradient ? '-gradient' : ""}`)),
  Button(`-blue ${outline ? '-outline' : ""} ${gradient ? '-gradient' : ""}`, '<i class="fas fa-angle-left icon-left"></i>button'),
  Button(`-purple ${outline ? '-outline' : ""} ${gradient ? '-gradient' : ""}`, 'button<i class="fas fa-angle-right icon-right"></i>'),
  Button(`-red ${outline ? '-outline' : ""} ${gradient ? '-gradient' : ""}`, '<i class="fas fa-cog"></i>'),
  Button(`-white ${outline ? '-outline' : ""} ${gradient ? '-gradient' : ""} -loading`, 'button'),
  Button(`-black ${outline ? '-outline' : ""} ${gradient ? '-gradient' : ""} -loading`, 'button'),
  Button(`-green ${outline ? '-outline' : ""} ${gradient ? '-gradient' : ""} -loading`, 'button')
]);

const Pill = (outline = false, gradient = false) => ([
  colors.map(color => Button(`-${color} -pill ${outline ? '-outline' : ""} ${gradient ? '-gradient' : ""}`)),
  Button(`-blue -pill ${outline ? '-outline' : ""} ${gradient ? '-gradient' : ""}`, '<i class="fas fa-angle-left icon-left"></i>button'),
  Button(`-purple -pill ${outline ? '-outline' : ""} ${gradient ? '-gradient' : ""}`, 'button<i class="fas fa-angle-right icon-right"></i>'),
  Button(`-red -pill ${outline ? '-outline' : ""} ${gradient ? '-gradient' : ""}`, '<i class="fas fa-cog"></i>'),
  Button(`-white -pill ${outline ? '-outline' : ""} ${gradient ? '-gradient' : ""} -loading`, 'button'),
  Button(`-black -pill ${outline ? '-outline' : ""} ${gradient ? '-gradient' : ""} -loading`, 'button'),
  Button(`-green -pill ${outline ? '-outline' : ""} ${gradient ? '-gradient' : ""} -loading`, 'button')
]);

const Rounded = (outline = false, gradient = false) => ([
  colors.map(color => Button(`-${color} -rounded ${outline ? '-outline' : ""} ${gradient ? '-gradient' : ""}`)),
  Button(`-blue -rounded ${outline ? '-outline' : ""} ${gradient ? '-gradient' : ""}`, '<i class="fas fa-angle-left icon-left"></i>button'),
  Button(`-purple -rounded ${outline ? '-outline' : ""} ${gradient ? '-gradient' : ""}`, 'button<i class="fas fa-angle-right icon-right"></i>'),
  Button(`-red -rounded ${outline ? '-outline' : ""} ${gradient ? '-gradient' : ""}`, '<i class="fas fa-cog"></i>'),
  Button(`-white -rounded ${outline ? '-outline' : ""} ${gradient ? '-gradient' : ""} -loading`, 'button'),
  Button(`-black -rounded ${outline ? '-outline' : ""} ${gradient ? '-gradient' : ""} -loading`, 'button'),
  Button(`-green -rounded ${outline ? '-outline' : ""} ${gradient ? '-gradient' : ""} -loading`, 'button')
]);

storiesOf('Simple', module)
  .add('Default', () => (<div>
    <h1>Default button</h1>
    {Simple()}
    <SyntaxHighlighter language={'html'} style={darcula} showLineNumbers={true}>
      {`${ReactDOMServer.renderToStaticMarkup(Simple()).replace(/<\/button> /g, '<\/button>\n')}`}
    </SyntaxHighlighter>
  </div>))
  .add('Outline', () => (<div>
    <h1>Outline button</h1>
    {Simple(true)}
    <SyntaxHighlighter language={'html'} style={darcula} showLineNumbers={true}>
      {`${ReactDOMServer.renderToStaticMarkup(Simple(true)).replace(/<\/button> /g, '<\/button>\n')}`}
    </SyntaxHighlighter>
  </div>))
  .add('Gradient', () => (<div>
    <h1>Gradient button</h1>
    {Simple(false, true)}
    <SyntaxHighlighter language={'html'} style={darcula} showLineNumbers={true}>
      {`${ReactDOMServer.renderToStaticMarkup(Simple(false, true)).replace(/<\/button> /g, '<\/button>\n')}`}
    </SyntaxHighlighter>
  </div>));

storiesOf('Pill', module)
  .add('Default', (<div>
    <h1>Default button</h1>
    {Pill()}
    <SyntaxHighlighter language={'html'} style={darcula} showLineNumbers={true}>
      {`${ReactDOMServer.renderToStaticMarkup(Pill()).replace(/<\/button> /g, '<\/button>\n')}`}
    </SyntaxHighlighter>
  </div>))
  .add('Outline', () => (<div>
    <h1>Outline button</h1>
    {Pill(true)}
    <SyntaxHighlighter language={'html'} style={darcula} showLineNumbers={true}>
      {`${ReactDOMServer.renderToStaticMarkup(Pill(true)).replace(/<\/button> /g, '<\/button>\n')}`}
    </SyntaxHighlighter>
  </div>))
  .add('Gradient', () => (<div>
    <h1>Gradient button</h1>
    {Pill(false, true)}
    <SyntaxHighlighter language={'html'} style={darcula} showLineNumbers={true}>
      {`${ReactDOMServer.renderToStaticMarkup(Pill(false, true)).replace(/<\/button> /g, '<\/button>\n')}`}
    </SyntaxHighlighter>
  </div>));

storiesOf('Rounded', module)
  .add('Default', (<div>
    <h1>Default button</h1>
    {Rounded()}
    <SyntaxHighlighter language={'html'} style={darcula} showLineNumbers={true}>
      {`${ReactDOMServer.renderToStaticMarkup(Rounded()).replace(/<\/button> /g, '<\/button>\n')}`}
    </SyntaxHighlighter>
  </div>))
  .add('Outline', () => (<div>
    <h1>Outline button</h1>
    {Rounded(true)}
    <SyntaxHighlighter language={'html'} style={darcula} showLineNumbers={true}>
      {`${ReactDOMServer.renderToStaticMarkup(Rounded(true)).replace(/<\/button> /g, '<\/button>\n')}`}
    </SyntaxHighlighter>
  </div>))
  .add('Gradient', () => (<div>
    <h1>Gradient button</h1>
    {Rounded(false, true)}
    <SyntaxHighlighter language={'html'} style={darcula} showLineNumbers={true}>
      {`${ReactDOMServer.renderToStaticMarkup(Rounded(false, true)).replace(/<\/button> /g, '<\/button>\n')}`}
    </SyntaxHighlighter>
  </div>));

storiesOf('Size', module)
  .add('Default', () => sizes.map((size, index) => Button(`-${size}`, size)).join(' '))