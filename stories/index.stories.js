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
const Simple = (outline = false) => ([
  colors.map(color => Button(`-${color} ${outline && '-outline'}`)),
  Button(`-blue ${outline && '-outline'}`, '<i class="fas fa-angle-left icon-left"></i>button'),
  Button(`-purple ${outline && '-outline'}`, 'button<i class="fas fa-angle-right icon-right"></i>'),
  Button(`-red ${outline && '-outline'}`, '<i class="fas fa-cog"></i>'),
  Button(`-white ${outline && '-outline'} -loading`, 'button'),
  Button(`-black ${outline && '-outline'} -loading`, 'button'),
  Button(`-green ${outline && '-outline'} -loading`, 'button')
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
    <h1>Default button</h1>
    {Simple(true)}
    <SyntaxHighlighter language={'html'} style={darcula} showLineNumbers={true}>
      {`${ReactDOMServer.renderToStaticMarkup(Simple(true)).replace(/<\/button> /g, '<\/button>\n')}`}
    </SyntaxHighlighter>
  </div>))
  .add('Gradient', () => `${colors.map(color => Button(`-gradient -${color}`))}
    ${Button('-blue -gradient', '<i class="fas fa-angle-left icon-left"></i>button')}
    ${Button('-purple -gradient', 'button<i class="fas fa-angle-right icon-right"></i>')}
    ${Button('-red -gradient', '<i class="fas fa-cog"></i>')}
    ${Button('-white -gradient -loading', 'button')}
    ${Button('-black -gradient -loading', 'button')}
    ${Button('-green -gradient -loading', 'button')}`)

storiesOf('Pill', module)
  .add('Default', () => `${colors.map(color => Button(`-pill -${color}`))}
    ${Button('-blue -pill', '<i class="fas fa-angle-left icon-left"></i>button')}
    ${Button('-purple -pill', 'button<i class="fas fa-angle-right icon-right"></i>')}
    ${Button('-red -pill', '<i class="fas fa-cog"></i>')}
    ${Button('-white -pill -loading', 'button')}
    ${Button('-black -pill -loading', 'button')}
    ${Button('-green -pill -loading', 'button')}`)
  .add('Outline', () => `${colors.map(color => Button(`-pill -outline -${color}`))}
    ${Button('-blue -pill -outline', '<i class="fas fa-angle-left icon-left"></i>button')}
    ${Button('-purple -pill -outline', 'button<i class="fas fa-angle-right icon-right"></i>')}
    ${Button('-red -pill -outline', '<i class="fas fa-cog"></i>')}
    ${Button('-white -pill -outline -loading', 'button')}
    ${Button('-black -pill -outline -loading', 'button')}
    ${Button('-green -pill -outline -loading', 'button')}`)
  .add('Gradient', () => `${colors.map(color => Button(`-pill -${color}`))}
    ${Button('-blue -pill -gradient', '<i class="fas fa-angle-left icon-left"></i>button')}
    ${Button('-purple -pill -gradient', 'button<i class="fas fa-angle-right icon-right"></i>')}
    ${Button('-red -pill -gradient', '<i class="fas fa-cog"></i>')}
    ${Button('-white -pill -gradient -loading', 'button')}
    ${Button('-black -pill -gradient -loading', 'button')}
    ${Button('-green -pill -gradient -loading', 'button')}`);

storiesOf('Rounded', module)
  .add('Default', () => `${colors.map(color => Button(`-rounded -${color}`)).join(' ')}
      ${Button('-blue -rounded', '<i class="fas fa-angle-left icon-left"></i>button')}
      ${Button('-purple -rounded', 'button<i class="fas fa-angle-right icon-right"></i>')}
      ${Button('-red -rounded', '<i class="fas fa-cog"></i>')}
      ${Button('-white -rounded -loading', 'button')}
      ${Button('-black -rounded -loading', 'button')}
      ${Button('-green -rounded -loading', 'button')}`)
  .add('Outline', () => `${colors.map(color => Button(`-rounded -outline -${color}`)).join(' ')}
      ${Button('-blue -rounded -outline', '<i class="fas fa-angle-left icon-left"></i>button')}
      ${Button('-purple -rounded -outline', 'button<i class="fas fa-angle-right icon-right"></i>')}
      ${Button('-red -rounded -outline', '<i class="fas fa-cog"></i>')}
      ${Button('-white -rounded -outline -loading', 'button')}
      ${Button('-black -rounded -outline -loading', 'button')}
      ${Button('-green -rounded -outline -loading', 'button')}`)
  .add('Gradient', () => `${colors.map(color => Button(`-rounded -${color}`)).join(' ')}
      ${Button('-blue -rounded -gradient', '<i class="fas fa-angle-left icon-left"></i>button')}
      ${Button('-purple -rounded -gradient', 'button<i class="fas fa-angle-right icon-right"></i>')}
      ${Button('-red -rounded -gradient', '<i class="fas fa-cog"></i>')}
      ${Button('-white -rounded -gradient -loading', 'button')}
      ${Button('-black -rounded -gradient -loading', 'button')}
      ${Button('-green -rounded -gradient -loading', 'button')}`)


storiesOf('Size', module)
  .add('Default', () => sizes.map((size, index) => Button(`-${size}`, size)).join(' '))
