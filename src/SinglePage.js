import React, { Component } from "react";
import DataService from "./service/dataservice";
import Error from "./Error";
import Loader from "react-loader-spinner";
import ReactTooltip from "react-tooltip";

import "./css/SinglePage.css";

export default class SinglePage extends Component {
  constructor(props) {
    super();
    this.state = {
      id: props.id,
      saveInBookshelf: props.saveInBookshelf,
      bookshelf: props.bookshelf,
      data: "",
      error: false,
      errorType: "",
      loading: true
    };
  }
  componentWillReceiveProps(props) {
    this.setState({
      bookshelf: props.bookshelf
    });
  }
  componentDidMount() {
    const key = "AIzaSyAOaVBnu7fgtzZVvuSjWw9MaGmDE3P73sA";
    fetch(
      `https://www.googleapis.com/books/v1/volumes/${this.state.id}?key=${key}`
    )
      .then(data => data.json())
      .then(data => new DataService(data.volumeInfo, this.state.id))
      .then(data => {
        this.setState({
          data: data,
          loading: false,
          error: false,
          errorType: ""
        });
      })
      .catch(eror => {
        this.setState({
          error: true,
          errorType: "something went wrong"
        });
      });
  }
  render() {
    var style = "white";
    /// checking if there is some book in bookshelf to set up red stars in view
    ///
    if (this.state.bookshelf.length > 0) {
      this.state.bookshelf.forEach(book => {
        if (book.id == this.state.id) {
          style = "#ff3d02";
          return;
        }
      });
    }
    if (this.state.error === true) {
      return <Error error="something went wrong" />;
    } else {
      if (this.state.loading === true) {
        return (
          <div style={{ marginTop: "100px" }}>
            <Loader
              type="Circles"
              color="#ff6f00"
              marginTop="100px"
              marginTop={100}
              height={200}
              width={200}
              className="loader"
            />{" "}
          </div>
        );
      } else {
        const {
          categories,
          description,
          pageCount,
          publishedDate,
          image,
          title,
          publisher,
          author
        } = this.state.data;
        // console.log(author);
        return (
          <div
            style={{
              marginTop: "50px"
            }}
            className="single-page"
          >
            <div className="card " style={{ margin: "0 auto" }}>
              <img src={image} alt="" />
              <div className="card-right">
                <div className="card-rigth-top">
                  <h1>{title}</h1>
                  <svg
                    onClick={e => {
                      this.state.saveInBookshelf(
                        e,
                        this.state.id,
                        this.state.bookshelf,
                        this.state.data
                      );
                    }}
                  >
                    <path
                      data-tip={
                        style === "white"
                          ? "Save this book in your bookshelf"
                          : "Remove this book from your bookshelf"
                      }
                      fill={style}
                      xmlns="http://www.w3.org/2000/svg"
                      className="a"
                      d="M33.688,36.755h11.5l3.584-10.911L52.3,36.755H63.8l-9.307,6.739,3.53,10.965L48.771,47.72l-9.307,6.739,3.53-10.965Z"
                      transform="translate(-33.688 -25.844)"
                    />
                  </svg>
                </div>
                <p className="author">By: {author}</p>
                <hr />
                <p className="publisher">Category: {categories[0]}</p>
                <hr />
                <p className="publisher">Description: {description}</p>
                <hr />
                <p className="publisher">PageCount: {pageCount}</p>
                <hr />
                <p className="publisher">Published date: {publishedDate}</p>
                <hr />
                <p className="publisher">Published By: {publisher}</p>
              </div>
            </div>
            <ReactTooltip className="tooltip" effect="solid" />
          </div>
        );
      }
    }
  }
}
