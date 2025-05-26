import json from './parser.js';
import read from './reader.js';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, regret) => {
      resolve(read().then(json).then(JSON.parse));
      regret(new Error('Network error'))
    });
  }
}
