import renderHTML from "react-render-html";

const Button = (className, children = "button") => renderHTML(` <button class="button ${className}">${children}</button> `);

export default Button;
