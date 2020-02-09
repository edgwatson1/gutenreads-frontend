import React from "react";
import "./Nav.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSticky: 0
    };
  }

  render() {
    return (
      <>
        <nav className="sticky">
          <header>
            <div id="logo">Gutenreads</div>
            <div class="searchbar">
              <div class="ui search">
                <div class="ui icon input">
                  <input
                    class="prompt"
                    type="text"
                    placeholder="Search for a book"
                  ></input>
                  <i class="search icon"></i>
                </div>
                <div class="results"></div>
              </div>
            </div>
            <ul class="nav_links">
              <li>
                <a href="">
                  <i class="fas fa-home"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fas fa-hashtag"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fas fa-book"></i>
                </a>
              </li>
            </ul>
          </header>
        </nav>
      </>
    );
  }
}

export default Nav;
