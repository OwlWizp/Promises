import GameSavingLoader from './GameSavingLoader.js';

export default GameSavingLoader.load().then((saving) => {return saving}, (error) => {
  return error;
});
