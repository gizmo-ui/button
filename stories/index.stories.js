import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { storiesOf } from '@storybook/react';
import renderHTML from 'react-render-html';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/styles/prism";

import '../dist/css/button.css';
import "@fortawesome/fontawesome-free/css/all.css";

import SimpleButton from './buttons/simple'
import PillButton from './buttons/pill'
import RoundedButton from './buttons/rounded'

const colors = ['blue', 'purple', 'red', 'orange', 'green', 'white', 'black'];
const sizes = ['xxsmall', 'xsmall', 'small', 'compact', 'large', 'xlarge', 'xxlarge'];

const Button = (className, children = "button") => renderHTML(` <button class="button ${className}">${children}</button> `);

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
    {Demo(PillButton())}
  </div>))
  .add('Outline', () => (<div>
    <h1>Outline button</h1>
    {Demo(PillButton(true))}
  </div>))
  .add('Gradient', () => (<div>
    <h1>Gradient button</h1>
    {Demo(PillButton(false, true))}
  </div>));

storiesOf('Rounded', module)
  .add('Default', () => (<div>
    <h1>Default button</h1>
    {Demo(RoundedButton())}
  </div>))
  .add('Outline', () => (<div>
    <h1>Outline button</h1>
    {Demo(RoundedButton(true))}
  </div>))
  .add('Gradient', () => (<div>
    <h1>Gradient button</h1>
    {Demo(RoundedButton(false, true))}
  </div>));

storiesOf('Size', module)
  .add('Default', () => sizes.map((size, index) => Button(`-${size}`, size)).join(' '))
