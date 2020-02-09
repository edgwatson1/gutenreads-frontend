import React from "react";
import "./reviewcard.css";

class ReviewCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var hex = "#";
    var profileColor = hex.concat(this.props.profileColor);
    console.log(profileColor);
    return (
      <>
        <div class="card-container">
          <div class="div1">
            <span
              style={{ backgroundColor: profileColor }}
              class="profile-circle"
            ></span>
          </div>
          <div class="div2">
            <h2 id="name">{this.props.name}</h2>
            <h2 id="time">{this.props.dateTime}</h2>
          </div>
          <div class="div3">
            <h3 id="reviewspecifics">
              Reviewed <a href="/">{this.props.bookTitle}</a> by{" "}
              <a href="/">{this.props.bookAuthor}</a>
            </h3>
          </div>
          <div class="rating">
            <i class="fas fa-star" />
            <i class="fas fa-star" />
            <i class="fas fa-star" />
            <i class="fas fa-star" />
          </div>
          <div class="div5">
            <p>{this.props.review}</p>
          </div>
        </div>
      </>
    );
  }
}

export default ReviewCard;
