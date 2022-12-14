export function templateEngine(block) {
  if (block === undefined || block === null || block === false) {
    return document.createTextNode("");
  }

  if (typeof block === "string" || typeof block === "number") {
    return document.createTextNode(block);
  }

  const result = document.createElement(block.tag);

  if (Array.isArray(block)) {
    const fragment = document.createDocumentFragment();

    block.forEach((element) => {
      fragment.appendChild(templateEngine(element));
    });

    return fragment;
  }

  const content = templateEngine(block.content);

  if (block.cls) {
    const classes = [].concat(block.cls);
    classes.forEach((cls) => {
      result.classList.add(cls);
    });
  }

  if (block.attrs) {
    const keys = Object.keys(block.attrs);

    keys.forEach((key) => {
      result.setAttribute(key, block.attrs[key]);
    });
  }

  result.appendChild(content);

  return result;
}
