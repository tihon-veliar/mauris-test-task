import React, { Component, Fragment } from "react";

import CalendareApp from "./CalendarApp";
import MovieDaysList from "./MovieDaysList";
import Header from "./Header";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCalendarApp: true,
      selectedDate: [],
      loadNew: false
    };
  }

  hideCalendarApp = () => {
    this.setState({ showCalendarApp: false });
  };
  onShowCalendarApp = () => {
    this.setState({ showCalendarApp: true, loadNew: true });
  };
  onSelectedDate = newData => {
    this.setState({
      selectedDate: newData
    });
    setTimeout(() => {
      this.hideCalendarApp();
    }, 300);
  };

  endLoadNew = () => {
    this.setState({ loadNew: false });
  };

  render() {
    const { showCalendarApp } = this.state;

    return (
      <Fragment>
        <div style={{ width: "100%" }}>
          <Header
            onShowCalendarApp={this.onShowCalendarApp}
            showCalendarApp={showCalendarApp}
          />
        </div>
        <div>
          <MovieDaysList
            selectedDate={this.state.selectedDate}
            newLoad={this.state.loadNew}
            endLoadNew={this.endLoadNew}
          />
          {showCalendarApp ? (
            <CalendareApp onSelectedDate={this.onSelectedDate} />
          ) : (
            " "
          )}
        </div>
      </Fragment>
    );
  }
}
