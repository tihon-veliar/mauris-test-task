import React, { Component } from "react";
import IconButton from "rambler-ui/IconButton";
import ChevronLeftIcon from "rambler-ui/icons/forms/ChevronLeftIcon";
import { H1 } from "rambler-ui/Typography";
export default class Header extends Component {
  render() {
    const containerStyle = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      height: "50px",
      backgroundColor: "#e4e3e4",
      position: "relative"
    };
    return (
      <div style={containerStyle}>
        {!this.props.showCalendarApp ? (
          <IconButton
            style={{ position: "absolute", left: "5%" }}
            type={"flat"}
            size={"small"}
            onClick={this.props.onShowCalendarApp}
          >
            <ChevronLeftIcon color={"#937d68"} />
          </IconButton>
        ) : (
          ""
        )}
        <H1 style={{ fontSize: "20px", color: "#937d68" }}> SUPER FILM</H1>
      </div>
    );
  }
}
