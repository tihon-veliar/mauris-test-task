import React, { Component } from "react";
import Calendar from "rambler-ui/Calendar";

export default class CalendarApp extends Component {
  state = {
    dateFrom: null
  };

  dateParser = data => {
    const month = data.getMonth();
    const day = data.getDate();
    const newFormst = [data.getFullYear(), month, day];
    return newFormst;
  };

  onChangeRange = (event, dateFrom) => {
    this.setState({
      dateFrom
    });
  };

  onChangeNotRange = (event, dateFrom) => {
    this.setState({
      dateFrom
    });
  };
  componentDidUpdate(p, precState) {
    if (this.state.dateFrom !== precState.dateFrom) {
      this.props.onSelectedDate(this.dateParser(this.state.dateFrom));
    }
  }

  render() {
    const { dateFrom } = this.state;

    const calendarStyle = {
      position: "fixed",
      bottom: "0",
      width: "100%",
    };
    const today = new Date();
    return (
      <div style={calendarStyle}>
        <Calendar
          variation={"service"}
          visibleMonths={1}
          today={today}
          value={dateFrom}
          onChange={this.onChangeRange}
          style={{ width: "100%" }}
        />
      </div>
    );
  }
}
