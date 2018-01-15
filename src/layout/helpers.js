import JSCookies from 'js-cookie';

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
    const now = Date.now();
    const key = `${LS_PREFIX + name}`;

    const expire = localStorage.getItem(`${key}-expire`);

    if (expire && expire < now) {
      Helpers.deleteLS(key);
      Helpers.deleteLS(`${key}-expire`);
    } else {
      const data = localStorage.getItem(key);

      if (data) {
        if (data === '{}') return;

        // Naive object/array check
        if (
          (data.indexOf('{') >= 0 && data.indexOf('}') >= 0)
            || (data.indexOf('[') >= 0 && data.indexOf(']') >= 0)
        ) {
          return JSON.parse(data);
        }

        return data;
      }
    }
  }

  static setLS(name, value, expires) {
    const key = `${LS_PREFIX + name}`;

    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }

    localStorage.setItem(key, value);

    if (expires) {
      const now = Date.now();

      localStorage.setItem(
        `${key}_expire`,
        now + (expires * 1000),
      );
    }
  }

  static deleteLS(name) {
    const key = `${LS_PREFIX + name}`;

    localStorage.removeItem(key);
    localStorage.removeItem(`${key}_expire`);
  }

  static getCookie(name) {
    return JSCookies.get(name);
  }

  static setCookie(name, value, params) {
    JSCookies.set(name, value, params);
  }

  static deleteCookie(name, params) {
    JSCookies.remove(name, params);
  }

  static deleteAllCookies() {
    document
      .cookie
      .split(';')
      .forEach((cookie) => {
        Helpers.deleteCookie(
          cookie.split('=')[0],
        );
      });
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
