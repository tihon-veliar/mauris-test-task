import React, { Component } from "react";
import MoviesOnThisDay from "./MoviesOnThisDay";
import Button from "rambler-ui/Button";
import { Description } from "rambler-ui/Typography";

import TvApi from "../services/TvApi";
import ErrorBun from "./ErrorBun";
import { dataParser, plussOneDay } from "../utils/parserDate";

export default class MovieDaysList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      lastDate: null,
      movies: [],
      showDay: [],
      error: false
    };
  }
  componentDidUpdate = prevProps => {
    const parsSelectedDate = dataParser(this.props.selectedDate);
    if (dataParser(prevProps.selectedDate) !== parsSelectedDate) {
      this.setState({
        lastDate: this.props.selectedDate,
        showDay: [this.props.selectedDate]
      });
      this.loadMovies(parsSelectedDate);
    }
  };
  componentDidCatch() {
    this.state({ error: true });
  }

  loadMovies = async date => {
    this.setState({ loading: true });
    const movies = this.state.movies;
    const res = await TvApi.getMoviesList(date);
    if (res == "error") {
      this.setState({ error: true });
    } else {
      movies.push(this.transformData(res));
      this.setState({ movies: movies });
      this.setState({ loading: false });
    }
  };

  transformData = data => {
    const trDate = data.map(current => {
      const {
        season,
        number,
        show: { id, image, name, premiered }
      } = current;
      const newItem = {
        season,
        number,
        id,
        image,
        name,
        premiered
      };

      return newItem;
    });
    return trDate;
  };

  onShowNext = () => {
    const nextDay = plussOneDay(this.state.lastDate);
    let nShowDay = this.state.showDay;
    nShowDay.push(nextDay);
    this.loadMovies(dataParser(nextDay));
    this.setState({
      lastDate: nextDay
    });
  };
  clear = () => {
    this.setState({
      loading: false,
      lastDate: null,
      movies: [],
      showDay: [],
      error: false
    });
  };
  render() {
    const { movies, showDay } = this.state;
    if (this.props.newLoad) {
      this.clear();
      this.props.endLoadNew();
    }
    if (this.state.error) {
      return <ErrorBun />;
    }
    if (this.state.movies.length === 0) {
      return (
        <div style={{ textAlign: "center", paddingTop: "20px" }}>
          <img
            src="https://png2.kisspng.com/sh/8acffa89ffd823fa7aaffc3b14ff0186/L0KzQYm3V8A0N5DtfpH0aYP2gLBuTglwfaV6etc2dHXvdcfwkBlwdl5mfOhucoTsg7b0hf51NaRqittqbD33db3slvl0cZDzRadrM3LlQoG6hPE2bZI4RqkEM0C8RoO3UcU0OGc4UKoAMUi8RIa1kP5o/kisspng-youtube-television-advertisement-serial-television-5b3bb203da5ea3.7930962015306388518945.png"
            alt="TV"
            style={{ width: "40%" }}
          />
          <Description style={{ textAlign: "center" }}>
            Для получения списка сериалов, <br />
            пожалуйста, выберите <br />
            необходимый месяц и день
          </Description>
        </div>
      );
    }
    return (
      <div style={{ textAlign: "center" }}>
        <div>
          {movies.map((movD, i) => {
            return <MoviesOnThisDay moviesData={movD} day={showDay[i]} />;
          })}
        </div>
        <Button
          width={"80%"}
          iconPosition="right"
          type={"outline"}
          onClick={this.onShowNext}
        >
          Седуюший день
        </Button>
      </div>
    );
  }
}
