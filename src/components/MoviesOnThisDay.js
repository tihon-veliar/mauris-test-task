import React, { Component } from "react";
import Button from "rambler-ui/Button";
import ChevronRightIcon from "rambler-ui/icons/forms/ChevronRightIcon";
import { H3 } from "rambler-ui/Typography";

import Movie from "./Movie";
export default class MoviesOnThisDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false
    };
  }
  onShowMore = () => {
    this.setState({ showMore: !this.state.showMore ? true : false });
  };


  render() {
    const { showMore } = this.state;
    const movies = this.props.moviesData;
    const { day } = this.props;
    const btnText = !showMore ? `${movies.length - 1} more TV shows` : "Hide";

    const monthes = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря"
    ];
    const datyString = `${day[2]} ${monthes[day[1]]} ${day[0]}`;
    // Style
    const iconStyle = {
      transform: !showMore ? `rotate(90deg)` : `rotate(270deg)`
    };
    const boxStyle = {
      paddingTop: "10px",
      marginBottom: "10px"
    };

    return (
      <div style={boxStyle}>
        <div>
          <H3
            style={{
              fontSize: "15px",
              margin: "0 0 15px 0",
              textAlign: "center",
              borderBottom: "1px solid #e4e3e4",
              color: "#423c36"
            }}
          >
            {datyString}
          </H3>
        </div>
        <div>
          {movies
            .map((movie, i) => {
              return <Movie movie={movie} key={movie.id} />;
            })
            .filter((arr, index) => {
              if (index >= 2 && !showMore) {
                return false;
              } else {
                return true;
              }
            })}
        </div>
        <Button
          width={"80%"}
          style={{ margin: "10px" }}
          icon={<ChevronRightIcon style={iconStyle} color={"#ccb79c"} />}
          iconPosition="right"
          type={"outline"}
          loading={false}
          onClick={this.onShowMore}
        >
          {btnText}
        </Button>
      </div>
    );
  }
}
