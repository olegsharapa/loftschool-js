/* ДЗ 5 - DOM Events */

/**
 * Функция должна добавлять обработчик fn события eventName к элементу target
 *
 * @param {string} eventName - имя события, на которое нужно добавить обработчик
 * @param {Element} target - элемент, на который нужно добавить обработчик
 * @param {function} fn - обработчик
 */
function addListener(eventName, target, fn) {
  target.addEventListener(eventName, fn);
}

/**
 * Функция должна удалять обработчик fn события eventName у элемента target
 *
 * @param {string} eventName - имя события, для которого нужно удалить обработчик
 * @param {Element} target - элемент, у которого нужно удалить обработчик
 * @param {function} fn - обработчик
 */
function removeListener(eventName, target, fn) {
  let handler = fn;
  target.removeEventListener(eventName, handler);
}

/**
 * Функция должна добавлять к target обработчик события eventName, который должен отменять действие по умолчанию
 *
 * @param {string} eventName - имя события, для которого нужно удалить обработчик
 * @param {Element} target - элемент, на который нужно добавить обработчик
 */
function skipDefault(eventName, target) {
  target.addEventListener(eventName, e => {
    e.preventDefault();
  });
}

/**
 * Функция должна эмулировать событие click для элемента target
 *
 * @param {Element} target - элемент, на который нужно добавить обработчик
 */
function emulateClick(target) {
  target.dispatchEvent(new CustomEvent("click"));
}

/**
 * Функция должна добавить такой обработчик кликов к элементу target
 * который реагирует (вызывает fn) только на клики по элементам BUTTON внутри target
 *
 * @param {Element} target - элемент, на который нужно добавить обработчик
 * @param {function} fn - функция, которую нужно вызвать при клике на элемент BUTTON внутри target
 */
function delegate(target, fn) {
  target.addEventListener("click", event => {
    if (event.target.tagName === "BUTTON") {
      fn();
    }
  });
}

/**
 * *** Со звездочкой ***
 * Функция должна добавить такой обработчик кликов к элементу target
 * который сработает только один раз и удалится
 * Постарайтесь не создавать глобальных переменных
 *
 * @param {Element} target - элемент, на который нужно добавить обработчик
 * @param {function} fn - обработчик
 */
function once(target, fn) {
  let handler = fn;
  target.addEventListener("click", handler);
  target.addEventListener("click", () => {
    let clicked = 1;
    return clicked;
  });
  if (clicked == 1) {
    target.removeEventListener("click", handler);
  }
}

const button = document.querySelector("#one");
function once(target, fn) {
  let handler = fn;
  let clicked = 0;
  target.addEventListener("click", handler);
  target.addEventListener("click", () => {
    clicked = 1;
    return clicked;
  });
  if (clicked == 1) {
    target.removeEventListener("click", handler);
  }
}
once(button, () => {
  console.log("кнопка нажата");
});

export {
  addListener,
  removeListener,
  skipDefault,
  emulateClick,
  delegate,
  once
};
