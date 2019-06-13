import renderHTML from "react-render-html";

const ButtonGroup = (children) => renderHTML(` <div class="grouped">${children}</div> `);

export default ButtonGroup;
