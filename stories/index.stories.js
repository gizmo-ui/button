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

const colors = ['blue', 'purple', 'red', 'orange', 'green', 'white', 'black']

storiesOf('Simple Buttons', module)
  .add('Default', () => `${colors.map(color => `<button class="button -${color}">button</button>`).join(' ')} <button class="button -blue"><i class="fas fa-angle-left icon-left"></i>button</button> <button class="button -purple">button<i class="fas fa-angle-right icon-right"></i></button> <button class="button -red"><i class="fas fa-cog"></i></button>`)
  .add('Outline', () => `${colors.map(color => `<button class="button -outline -${color}">button</button>`).join(' ')} <button class="button -outline -blue"><i class="fas fa-angle-left icon-left"></i>button</button> <button class="button -outline -purple">button<i class="fas fa-angle-right icon-right"></i></button> <button class="button -outline -red"><i class="fas fa-cog"></i></button>`)
  .add('Gradient', () => `${colors.map(color => `<button class="button -gradient -${color}">button</button>`).join(' ')} <button class="button -gradient -blue"><i class="fas fa-angle-left icon-left"></i>button</button> <button class="button -gradient -purple">button<i class="fas fa-angle-right icon-right"></i></button> <button class="button -gradient -red"><i class="fas fa-cog"></i></button>`)

storiesOf('Pill Buttons', module)
  .add('Default', () => `${colors.map(color => `<button class="button -pill -${color}">button</button>`).join(' ')} <button class="button -pill -blue"><i class="fas fa-angle-left icon-left"></i>button</button> <button class="button -pill -purple">button<i class="fas fa-angle-right icon-right"></i></button> <button class="button -pill -red"><i class="fas fa-cog"></i></button>`)
  .add('Outline', () => `${colors.map(color => `<button class="button -pill -outline -${color}">button</button>`).join(' ')} <button class="button -pill -outline -blue"><i class="fas fa-angle-left icon-left"></i>button</button> <button class="button -pill -outline -purple">button<i class="fas fa-angle-right icon-right"></i></button> <button class="button -pill -outline -red"><i class="fas fa-cog"></i></button>`)
  .add('Gradient', () => `${colors.map(color => `<button class="button -pill -gradient -${color}">button</button>`).join(' ')} <button class="button -pill -gradient -blue"><i class="fas fa-angle-left icon-left"></i>button</button> <button class="button -pill -gradient -purple">button<i class="fas fa-angle-right icon-right"></i></button> <button class="button -pill -gradient -red"><i class="fas fa-cog"></i></button>`)


storiesOf('Rounded Buttons', module)
  .add('Default', () => `${colors.map(color => `<button class="button -rounded -${color}">button</button>`).join(' ')} <button class="button -rounded -blue"><i class="fas fa-angle-left icon-left"></i>button</button> <button class="button -rounded -purple">button<i class="fas fa-angle-right icon-right"></i></button> <button class="button -rounded -red"><i class="fas fa-cog"></i></button>`)
  .add('Outline', () => `${colors.map(color => `<button class="button -rounded -outline -${color}">button</button>`).join(' ')} <button class="button -rounded -outline -blue"><i class="fas fa-angle-left icon-left"></i>button</button> <button class="button -rounded -outline -purple">button<i class="fas fa-angle-right icon-right"></i></button> <button class="button -rounded -outline -red"><i class="fas fa-cog"></i></button>`)
  .add('Gradient', () => `${colors.map(color => `<button class="button -rounded -gradient -${color}">button</button>`).join(' ')} <button class="button -rounded -gradient -blue"><i class="fas fa-angle-left icon-left"></i>button</button> <button class="button -rounded -gradient -purple">button<i class="fas fa-angle-right icon-right"></i></button> <button class="button -rounded -gradient -red"><i class="fas fa-cog"></i></button>`)