import {
  document,
  console
} from 'global';
import {
  storiesOf
} from '@storybook/html';
import {
  withInfo
} from '@storybook/addon-info';
import fontawesome from "@fortawesome/fontawesome-free/scss/fontawesome.scss";

const colors = ['blue', 'purple', 'red', 'orange', 'green', 'white', 'black']

storiesOf('Simple Buttons', module)
  .add('Default', () => `${colors.map(color => `<button class="button -${color}">button</button>`).join(' ')} <button class="button"><i class="fas fa-angle-left icon-left"></i>button</button>`)
  .add('Outline', () => colors.map(color => `<button class="button -outline -${color}">button</button>`).join(' '))
  .add('Gradient', () => colors.map(color => `<button class="button -gradient -${color}">button</button>`).join(' '))

storiesOf('Pill Buttons', module)
  .add('Default', () => colors.map(color => `<button class="button -pill -${color}">button</button>`).join(' '))
  .add('Outline', () => colors.map(color => `<button class="button -pill -outline -${color}">button</button>`).join(' '))
  .add('Gradient', () => colors.map(color => `<button class="button -pill -gradient -${color}">button</button>`).join(' '))


storiesOf('Rounded Buttons', module)
  .add('Default', () => colors.map(color => `<button class="button -rounded -${color}">button</button>`).join(' '))
  .add('Outline', () => colors.map(color => `<button class="button -rounded -outline -${color}">button</button>`).join(' '))
  .add('Gradient', () => colors.map(color => `<button class="button -rounded -gradient -${color}">button</button>`).join(' '))