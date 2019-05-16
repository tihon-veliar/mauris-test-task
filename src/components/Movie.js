import React, { Component } from "react";
import { Timestamp, Description, Source } from "rambler-ui/Typography";
export default class Movie extends Component {
  render() {
    const imgStyle = {
      width: "80px",
      boxShadow: "1px 3px 3px 3px rgba(214,214,214,1)",
      backgrounColor: "#EEEEEE",
      display: "inline-block",
      marginRight: "20px"
    };
    const containerStyle = {
      display: "flex",
      flexDirection: "row",
      Width: "100%",
      alignItems: "stretch",
      paddingLeft: "10px",
      paddingRight: "10px",
      marginBottom: "40px"
    };

    const { movie } = this.props;
    const primerYear = movie.premiered.split("-")[0];

    return (
      <div style={containerStyle}>
        <div style={imgStyle}>
          <img
            src={
              movie.image
                ? movie.image.medium
                : "https://cdn.browshot.com/static/images/not-found.png"
            }
            alt={movie.name}
            style={{ width: "100%" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            justifyContent: "space-between"
          }}
        >
          <div>
            <Timestamp style={{ color: "#423c36", fontSize: "0.8rem" }}>
              {movie.name}
            </Timestamp>
            <Description
              style={{
                margin: "0 0 0 0",
                color: "#423c36",
                fontSize: "0.6rem"
              }}
            >
              {primerYear}
            </Description>
          </div>
          <div style={{ alignSelf: "stretch" }}>
            <Source style={{ color: "#423c36", fontSize: "0.6rem" }}>
              Season: {movie.season} Episode: {movie.number}
            </Source>
          </div>
        </div>
      </div>
    );
  }
}
