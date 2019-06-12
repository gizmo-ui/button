import Button from './button';
import classnames from 'classnames';

const colors = ['blue', 'purple', 'red', 'orange', 'green', 'white', 'black'];

const SimpleButton = (outline = false, gradient = false) => {
  const buttonStyle = classnames({'-outline': outline}, {'-gradient': gradient});

  return [
    colors.map(color => Button(classnames(`-${color}`, buttonStyle))),
    Button(classnames('-blue', buttonStyle), '<i class="fas fa-angle-left icon-left"></i>button'),
    Button(classnames('-purple', buttonStyle), 'button<i class="fas fa-angle-right icon-right"></i>'),
    Button(classnames('-white', buttonStyle, '-loading'), 'button'),
    Button(classnames('-black', buttonStyle, '-loading'), 'button'),
    Button(classnames('-green', buttonStyle, '-loading'), 'button')
  ]
};

export default SimpleButton;
