import axios from "axios";

class TvApi {
  constructor() {
    this._apiBase = " http://api.tvmaze.com";
  }
  getMoviesList = async date => {
    try {
      const res = await axios.get(
        `${this._apiBase}/schedule?country=US&date=${date}`
      );
      return res.data;
    } catch (err) {
      return "error";
    }
  };
}

export default new TvApi();
