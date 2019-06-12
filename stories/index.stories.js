import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { storiesOf } from '@storybook/react';
import renderHTML from 'react-render-html';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/styles/prism";

import '../dist/css/button.css';
import "@fortawesome/fontawesome-free/css/all.css";

import SimpleButton from './buttons/simple'

const colors = ['blue', 'purple', 'red', 'orange', 'green', 'white', 'black'];
const sizes = ['xxsmall', 'xsmall', 'small', 'compact', 'large', 'xlarge', 'xxlarge'];

const Button = (className, children = "button") => renderHTML(` <button class="button ${className}">${children}</button> `);

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

const Demo = (src) => (
  <div>
    {src}
    <SyntaxHighlighter language={'html'} style={darcula} showLineNumbers={true}>
      {`${ReactDOMServer.renderToStaticMarkup(src).replace(/<\/button> /g, '<\/button>\n')}`}
    </SyntaxHighlighter>
  </div>);

storiesOf('Simple', module)
  .add('Default', () => (<div>
    <h1>Default button</h1>
    {Demo(SimpleButton())}
  </div>))
  .add('Outline', () => (<div>
    <h1>Outline button</h1>
    {Demo(SimpleButton(true))}
  </div>))
  .add('Gradient', () => (<div>
    <h1>Gradient button</h1>
    {Demo(SimpleButton(false, true))}
  </div>));

storiesOf('Pill', module)
  .add('Default', () => (<div>
    <h1>Default button</h1>
    {Demo(Pill())}
  </div>))
  .add('Outline', () => (<div>
    <h1>Outline button</h1>
    {Demo(Pill(true))}
  </div>))
  .add('Gradient', () => (<div>
    <h1>Gradient button</h1>
    {Demo(Pill(false, true))}
  </div>));

storiesOf('Rounded', module)
  .add('Default', () => (<div>
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
