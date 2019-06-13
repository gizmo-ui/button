import Button from './button';
import classnames from 'classnames';

const colors = ['blue', 'purple', 'red', 'orange', 'green', 'white', 'black'];

const RoundedButton = ({ outline = false, gradient = false } = {}) => {
  const buttonStyle = classnames({ '-outline': outline }, { '-gradient': gradient });

  return [
    colors.map(color => Button(classnames(`-${color} -rounded`, buttonStyle))),
    Button(classnames('-blue -rounded', buttonStyle), '<i class="fas fa-angle-left icon-left"></i>button'),
    Button(classnames('-purple -rounded', buttonStyle), 'button<i class="fas fa-angle-right icon-right"></i>'),
    Button(classnames('-white -rounded', buttonStyle, '-loading'), 'button'),
    Button(classnames('-black -rounded', buttonStyle, '-loading'), 'button'),
    Button(classnames('-green -rounded', buttonStyle, '-loading'), 'button')
  ]
};

export default RoundedButton;
