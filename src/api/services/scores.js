import scoresApi from '../scoresApi';
import {SCORES_API} from '../apiConstants';

class Scores {
  fnGetScores = async date => {
    try {
      return await scoresApi.get(
        `${SCORES_API}&apiKey=${SCORES_API.PUBLICKEY}`,
      );
    } catch (error) {
      return error;
    }
  };
}

Scores.api = new Scores();
export default Scores;
