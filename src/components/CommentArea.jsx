import { Button, Container } from "react-bootstrap";
import React from "react";
import AddComent from "./addComent";
import Comments from "./Comments";

class CommentArea extends React.Component {
  state = {
    comments: [],
  };

componentDidMount() {
   this.loadComments()
  }
componentDidUpdate(prev, prevState){
    this.loadComments()
}
  // FETCH COMMENTS
  loadComments = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.asin,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjcwZDJkNTI2MjAwMTViNmRjOTkiLCJpYXQiOjE2Mjk5ODUyNzMsImV4cCI6MTYzMTE5NDg3M30.XnwP2w8HYgNw7WtHh0tP8haV9jofgQ_UQ9xJOsb01C4",
          },
        }
      );
      const data = await response.json();
      this.state.comments = data;
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <>
        {Object.values(this.state.comments).map((comm) => (
          <Comments
            _id={comm._id}
            author={comm.author}
            comment={comm.comment}
            rate={comm.rate}
            asin={this.props.asin}
          />
        ))}
      </>
    );
  }
}

export default CommentArea;
