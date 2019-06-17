import React,{Fragment} from 'react';
import classnames from "classnames";

const colors = ['blue', 'purple', 'red', 'orange', 'green', 'white', 'black'];

const Button = (className, children = "button") => <button className={classnames('button',className)}>{children}</button>;

export const ButtonList = ({outline = false, gradient = false, type = ""} = {}) => {
  const buttonStyle = classnames({'-outline': outline}, {'-gradient': gradient}, {[`-${type}`]: type});

  return [
    ...colors.map(color => Button(classnames(`-${color}`, buttonStyle))),
    Button(classnames('-blue', buttonStyle), <Fragment><i className="fas fa-angle-left icon-left"></i>button</Fragment>),
    Button(classnames('-purple', buttonStyle), <Fragment>button<i className="fas fa-angle-right icon-right"></i></Fragment>),
    Button(classnames('-white', buttonStyle, '-loading'), 'button'),
    Button(classnames('-black', buttonStyle, '-loading'), 'button'),
    Button(classnames('-green', buttonStyle, '-loading'), 'button'),
    Button(classnames('-green', buttonStyle, '-icon'), <i className="fas fa-align-justify"></i>)
  ]
};

export default Button;
