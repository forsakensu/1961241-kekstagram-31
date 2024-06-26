const DEFAULT_TIMEOUT_DELAY = 500;

/**
 * проверяет, является ли клавиша события клавиатуры клавишей Escape
 * @param {KeyboardEvent} evt объект события клавиатуры
 * @returns {Boolean} если клавиша Escape, условие вернет true, если нет - false
 */
const isEscapeKey = (evt) => evt.key === 'Escape';

// Функция взята из интернета и доработана
// Источник - https://www.freecodecamp.org/news/javascript-debounce-example


const debounce = (callback, timeoutDelay = DEFAULT_TIMEOUT_DELAY) => {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
};

export {isEscapeKey, debounce, DEFAULT_TIMEOUT_DELAY};
