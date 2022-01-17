export function jsx(type, props) {
  let { children } = props;
  //   if (typeof children === 'object') {
  //     children = [children];
  //   }

  let arrChildren;
  if (Array.isArray(children)) {
    children = [...children];
  } else {
    children = [children];
  }
  console.log('typeof children', typeof children);
  console.log('props: ', props);
  function createTextElement(text) {
    return {
      type: 'TEXT_ELEMENT',
      props: {
        nodeValue: text,
        children: [],
      },
    };
  }
  console.log('JSX: ', {
    type,
    props: {
      ...props,
      children: [...children].map((child) =>
        typeof child === 'object' ? child : createTextElement(child)
      ),
    },
  });

  console.log('typeof', typeof children);
  return {
    type,
    props: {
      ...props,
      children: [...children].map((child) =>
        typeof child === 'object' ? child : createTextElement(child)
      ),
    },
  };
}

export const jsxs = jsx;
