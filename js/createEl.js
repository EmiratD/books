const creatElement = (
  el = "div",
  className = "",
  attr = null,
  attrVal = null,
  attr2 = null,
  attrVal2 = null
) => {
  const elem = document.createElement(`${el}`);
  className ? elem.classList.add(`${className}`) : null;
  attr && attrVal ? elem.setAttribute(`${attr}`, `${attrVal}`) : null;
  attr2 && attrVal2 ? elem.setAttribute(`${attr2}`, `${attrVal2}`) : null;
  return elem;
};

export default creatElement;