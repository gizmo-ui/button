import Button from './button';
import classnames from 'classnames';

const colors = ['blue', 'purple', 'red', 'orange', 'green', 'white', 'black'];

const PillButton = ({ outline = false, gradient = false } = {}) => {
  const buttonStyle = classnames({ '-outline': outline }, { '-gradient': gradient });

  return [
    colors.map(color => Button(classnames(`-${color} -pill`, buttonStyle))),
    Button(classnames('-blue -pill', buttonStyle), '<i class="fas fa-angle-left icon-left"></i>button'),
    Button(classnames('-purple -pill', buttonStyle), 'button<i class="fas fa-angle-right icon-right"></i>'),
    Button(classnames('-white -pill', buttonStyle, '-loading'), 'button'),
    Button(classnames('-black -pill', buttonStyle, '-loading'), 'button'),
    Button(classnames('-green -pill', buttonStyle, '-loading'), 'button')
  ]
};

export default PillButton;
