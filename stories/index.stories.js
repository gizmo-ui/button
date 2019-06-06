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
import '../dist/css/button.css';
import fontawesome from "@fortawesome/fontawesome-free/css/all.css";

const colors = ['blue', 'purple', 'red', 'orange', 'green', 'white', 'black'];
const sizes = ['xxsmall', 'xsmall', 'small', 'compact', 'large', 'xlarge', 'xxlarge'];

const Button = (className, children = "button") => `<button class="button ${className}">${children}</button>`

storiesOf('Simple', module)
  .add('Default', () => `${colors.map(color => Button(`-${color}`)).join(' ')}
    ${Button('-blue', '<i class="fas fa-angle-left icon-left"></i>button')}
    ${Button('-purple', 'button<i class="fas fa-angle-right icon-right"></i>')}
    ${Button('-red', '<i class="fas fa-cog"></i>')}`)
  .add('Outline', () => `${colors.map(color => Button(`-outline -${color}`)).join(' ')}
    ${Button('-blue -outline', '<i class="fas fa-angle-left icon-left"></i>button')}
    ${Button('-purple -outline', 'button<i class="fas fa-angle-right icon-right"></i>')}
    ${Button('-red -outline', '<i class="fas fa-cog"></i>')}`)
  .add('Gradient', () => `${colors.map(color => Button(`-gradient -${color}`)).join(' ')}
    ${Button('-blue -gradient', '<i class="fas fa-angle-left icon-left"></i>button')}
    ${Button('-purple -gradient', 'button<i class="fas fa-angle-right icon-right"></i>')}
    ${Button('-red -gradient', '<i class="fas fa-cog"></i>')}`)

storiesOf('Pill', module)
  .add('Default', () => `${colors.map(color => Button(`-pill -${color}`)).join(' ')}
    ${Button('-blue -pill', '<i class="fas fa-angle-left icon-left"></i>button')}
    ${Button('-purple -pill', 'button<i class="fas fa-angle-right icon-right"></i>')}
    ${Button('-red -pill', '<i class="fas fa-cog"></i>')}`)
  .add('Outline', () => `${colors.map(color => Button(`-pill -outline -${color}`)).join(' ')}
    ${Button('-blue -pill -outline', '<i class="fas fa-angle-left icon-left"></i>button')}
    ${Button('-purple -pill -outline', 'button<i class="fas fa-angle-right icon-right"></i>')}
    ${Button('-red -pill -outline', '<i class="fas fa-cog"></i>')}`)
  .add('Gradient', () => `${colors.map(color => Button(`-pill -${color}`)).join(' ')}
    ${Button('-blue -pill -gradient', '<i class="fas fa-angle-left icon-left"></i>button')}
    ${Button('-purple -pill -gradient', 'button<i class="fas fa-angle-right icon-right"></i>')}
    ${Button('-red -pill -gradient', '<i class="fas fa-cog"></i>')}`)

storiesOf('Rounded', module)
  .add('Default', () => `${colors.map(color => Button(`-rounded -${color}`)).join(' ')}
      ${Button('-blue -rounded', '<i class="fas fa-angle-left icon-left"></i>button')}
      ${Button('-purple -rounded', 'button<i class="fas fa-angle-right icon-right"></i>')}
      ${Button('-red -rounded', '<i class="fas fa-cog"></i>')}`)
  .add('Outline', () => `${colors.map(color => Button(`-rounded -outline -${color}`)).join(' ')}
      ${Button('-blue -rounded -outline', '<i class="fas fa-angle-left icon-left"></i>button')}
      ${Button('-purple -rounded -outline', 'button<i class="fas fa-angle-right icon-right"></i>')}
      ${Button('-red -rounded -outline', '<i class="fas fa-cog"></i>')}`)
  .add('Gradient', () => `${colors.map(color => Button(`-rounded -${color}`)).join(' ')}
      ${Button('-blue -rounded -gradient', '<i class="fas fa-angle-left icon-left"></i>button')}
      ${Button('-purple -rounded -gradient', 'button<i class="fas fa-angle-right icon-right"></i>')}
      ${Button('-red -rounded -gradient', '<i class="fas fa-cog"></i>')}`)


storiesOf('Size', module)
  .add('Default', () => sizes.map((size, index) => Button(`-${size}`, size)).join(' '))