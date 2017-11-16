import devConfig from '../../builder/env/dev.json';
import prodConfig from '../../builder/env/prod.json';


const LS_PREFIX = 'entity:';
const ENV = {
  dev: 'development',
  prod: 'production',
};

export default class Helpers {
  static setCaretPosition(input, caretPos) {
    if (input.createTextRange) {
      const range = input.createTextRange();

      range.move('character', caretPos);
      range.select();
    } else {
      input.focus();

      setTimeout(() => {
        input.setSelectionRange(caretPos, caretPos);
      }, 0);
    }
  }

  static normalizeControlledInputCursor(params) {
    let shift = 0;

    if (params.prevValue.length > params.value.length) {
      if (params.prevValue.length - params.value.length > 1) {
        shift = 1;
      }
    } else if (params.value.length - params.prevValue.length > 1) {
      shift = -1;
    }

    if (!params.valid) {
      shift = 1;
    }

    this.prototype.constructor.setCaretPosition(params.input, params.input.selectionStart - shift);
  }

  static getLS(name) {
    const data = localStorage.getItem(`${LS_PREFIX + name}`);

    if (typeof data === 'string') {
      return data;
    }

    return JSON.parse(data);
  }

  static setLS(name, value, params) {
    if (params && params.rewrite) {
      localStorage.setItem(
        `${LS_PREFIX + name}`,
        JSON.stringify(value),
      );
    } else {
      let currentData =
        Helpers.getLS(
          `${LS_PREFIX + name}`,
        );

      if (!currentData) {
        currentData = {};
      }

      let data;

      if (typeof value === 'string') {
        data = value;
      } else if (typeof currentData === 'string') {
        data = JSON.stringify(value);
      } else {
        data =
          JSON.stringify(
            Object.assign(currentData, value),
          );
      }

      localStorage.setItem(
        `${LS_PREFIX + name}`,
        data,
      );
    }
  }

  static deleteLS(name) {
    localStorage.setItem(`${LS_PREFIX + name}${name}`, '');
  }

  static getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);

    if (parts.length === 2) {
      return parts.pop().split(';').shift();
    }
  }

  static getEnv() {
    // env from Webpack
    return process.env.NODE_ENV;
  }

  static isDev() {
    return Helpers.getEnv() === ENV.dev;
  }

  static isProd() {
    return Helpers.getEnv() === ENV.prod;
  }

  static getEnvConfig() {
    if (Helpers.isProd()) {
      return prodConfig;
    }

    return devConfig;
  }
}
