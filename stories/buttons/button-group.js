import React, {Fragment} from 'react';
import Button from "./button";
import classnames from "classnames";


const ButtonGroup = (children) => <div className="grouped">{children}</div>;


  const ButtonGroupList =  ({type = ""} = {})=>{
    const buttonStyle = classnames({[`-${type}`]: type});

    return ([
      ButtonGroup([Button(classnames('-blue',buttonStyle)), Button(classnames('-blue',buttonStyle)), Button(classnames('-blue',buttonStyle))]),
      ButtonGroup([Button(classnames('-purple -outline',buttonStyle)), Button(classnames('-purple -outline',buttonStyle)), Button(classnames('-purple -outline',buttonStyle))]),
      ButtonGroup([Button(classnames('-green -gradient',buttonStyle)), Button(classnames('-green -gradient',buttonStyle)), Button(classnames('-green -gradient',buttonStyle))]),
      ButtonGroup([Button(classnames('-purple -green',buttonStyle),<Fragment><i className="fas fa-heart icon-left"></i>Like</Fragment>), Button(classnames('-green -outline',buttonStyle),234)]),
      ButtonGroup([Button(classnames('-red -outline',buttonStyle),<Fragment><i className="fas fa-heart icon-left"></i>Like</Fragment>), Button(classnames('-red -outline',buttonStyle),<Fragment><i className="fas fa-align-center icon-left"></i>Like</Fragment>),Button(classnames('-red -outline',buttonStyle),<Fragment><i className="fas fa-heart icon-left"></i>Like</Fragment>)])
])
  };

export default ButtonGroupList;
