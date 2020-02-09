import React from "react";
import "./feed.css";
import ReviewCard from "./Cards/ReviewCard";

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const feedInput = [
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#32004b",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#06c253",
        name: "JoSeyMorM",
        bookTitle: "#ff3e96",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#e39afd",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B12B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      },
      {
        profileColor: "#F7B92B",
        name: "JoSeyMorM",
        bookTitle: "Moby Dick",
        bookAuthor: "Herman Melville",
        bookRating: 5,
        review: "It was really good I liked it a lot."
      }
    ];

    return (
      <>
        {feedInput.map(el => (
          <ReviewCard
            key={el}
            profileColor={Math.floor(Math.random() * 16777215).toString(16)}
            name={el.name}
            rating={el.rating}
            bookTitle={el.bookTitle}
            bookAuthor={el.bookAuthor}
            review={el.review}
            dateTime={"16th February, 2020 at 16:45"}
          />
        ))}
      </>
    );
  }
}

export default Feed;
