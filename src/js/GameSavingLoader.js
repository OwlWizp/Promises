import json from './parser.js';
import read from './reader.js';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      resolve(read().then((response) => json(response)).then((response) => {
        return JSON.parse(response);
    }));
    });
  }
}
