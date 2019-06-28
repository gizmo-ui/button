import React from 'react';
import { storiesOf } from '@storybook/react';
import Demo from './buttons/demo';
import '../dist/css/button.css';
import "@fortawesome/fontawesome-free/css/all.css";
import Button, { ButtonList } from './buttons/button';
import ButtonGroupList from './buttons/button-group';
import classnames from "classnames";

const sizes = ['xxsmall', 'xsmall', 'small', 'compact', 'large', 'xlarge', 'xxlarge'];

storiesOf('Simple', module)
  .add('Default', () => (<div>
    <h1>Default button</h1>
    {Demo(ButtonList())}
  </div>))
  .add('Outline', () => (<div>
    <h1>Outline button</h1>
    {Demo(ButtonList({outline: true}))}
  </div>))
  .add('Gradient', () => (<div>
    <h1>Gradient button</h1>
    {Demo(ButtonList({gradient: true}))}
  </div>));

storiesOf('Pill', module)
  .add('Default', () => (<div>
    <h1>Default button</h1>
    {Demo(ButtonList({type: 'pill'}))}
  </div>))
  .add('Outline', () => (<div>
    <h1>Outline button</h1>
    {Demo(ButtonList({outline: true, type: 'pill'}))}
  </div>))
  .add('Gradient', () => (<div>
    <h1>Gradient button</h1>
    {Demo(ButtonList({gradient: true, type: 'pill'}))}
  </div>));

storiesOf('Rounded', module)
  .add('Default', () => (<div>
    <h1>Default button</h1>
    {Demo(ButtonList({type: 'rounded'}))}
  </div>))
  .add('Outline', () => (<div>
    <h1>Outline button</h1>
    {Demo(ButtonList({outline: true, type: 'rounded'}))}
  </div>))
  .add('Gradient', () => (<div>
    <h1>Gradient button</h1>
    {Demo(ButtonList({gradient: true, type: 'rounded'}))}
  </div>));

storiesOf('Size', module)
  .add('Default', () => Demo(sizes.map((size) => Button(`-${size}`, size))));

storiesOf('Button Group', module)
  .add('Simple', () => (<div>
    <h1>Simple Group button</h1>
    {Demo(ButtonGroupList())}
  </div>))
  .add('Pill', () => (<div>
    <h1>Pill Group button</h1>
    {Demo(ButtonGroupList({type: 'pill'}))}
  </div>))
  .add('Rounded', () => (<div>
    <h1>Rounded Group button</h1>
    {Demo(ButtonGroupList({type: 'rounded'}))}
  </div>));
