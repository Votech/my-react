import MyReact from './myReact/myReact';
import App from './App';

const container = document.getElementById('root');

MyReact.render(App, container);

const updateValue = (e) => {
  rerender(e.target.value);
};

const rerender = (value) => {
  const index = (
    <div>
      {App}
      <input onInput={updateValue} value={value} />
      {value}
    </div>
  );
  MyReact.render(index, container);
};

rerender('World');
