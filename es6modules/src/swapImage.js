// eslint-disable-next-line import/prefer-default-export
export function swapImage(elements, name) {
  const nodes = document.querySelectorAll(elements);
  nodes.forEach((ele) => {
    const title = document.createElement('h1');
    title.innerText = name;
    // eslint-disable-next-line no-param-reassign
    ele.replaceWith(title);
  });
}
