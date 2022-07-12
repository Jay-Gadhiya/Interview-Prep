const inputEle = document.querySelector('#inputEle');

inputEle.addEventListener('input', (e) => {
  getSearchedData(e.target.value);
});

let count = 0;

const getData = (e) => {
  console.log(e);
};

const debounce = (callback, delay) => {
  let timer = '';

  return function (arg) {
    let context = this;
    let args = arguments;

    clearTimeout(timer);

    timer = setTimeout(() => {
      // callback.apply(context, args);
      callback(arg);
    }, delay);
  };
};

const getSearchedData = debounce(getData, 500);
