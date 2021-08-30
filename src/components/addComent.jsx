import { Button, Alert, Spinner, Form } from "react-bootstrap";
import React from "react";

class AddComent extends React.Component {
  state = {
    asin: this.props.asin,
    book: this.props.bookName,
    loadSend: false,
    sendSuccess: false,
    commentSend: {
      author: "",
      comment: "",
      rate: 1,
      elementId: this.props.asin,
    },
  };
  //   INPUT COMMENT
  comentInput = (e, comentNam) => {
    this.setState({
      commentSend: {
        ...this.state.commentSend,
        [comentNam]: e.target.value,
      },
    });
  };
  // Sending alerts
  sendingAlert = () => {
    this.setState({ sendSuccess: !this.state.sendSuccess });
  };
  // load Send alerts
  loadAlert = () => {
    this.setState({ loadSend: !this.state.loadSend });
  };
  //   SEND COMMENTS
  sendComment = async (e) => {
    e.preventDefault();
    this.loadAlert()
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(this.state.commentSend),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjcwZDJkNTI2MjAwMTViNmRjOTkiLCJpYXQiOjE2Mjk5ODUyNzMsImV4cCI6MTYzMTE5NDg3M30.XnwP2w8HYgNw7WtHh0tP8haV9jofgQ_UQ9xJOsb01C4",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        this.loadAlert()
        this.sendingAlert();
        setTimeout(this.sendingAlert, 2000);
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <>
        {/* FORM */}
        {
          <form onSubmit={this.sendComment}>
            <Form.Group>
              <Form.Label>Your name?</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insert your name"
                value={this.state.commentSend.name}
                onChange={(e) => {
                  this.comentInput(e, "author");
                }}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Comment</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your comment"
                value={this.state.commentSend.comment}
                onChange={(e) => {
                  this.comentInput(e, "comment");
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Rate</Form.Label>
              <Form.Control
                type="number"
                placeholder="Your comment"
                value={this.state.commentSend.rate}
                onChange={(e) => {
                  this.comentInput(e, "rate");
                }}
              />
            </Form.Group>
            {this.state.loadSend ? (
              <Spinner animation="border" variant="warning" />
            ) : (
              <Button type="submit" variant="warning">
                {" "}
                Send
              </Button>
            )}
          </form>
        }
        {this.state.sendSuccess && (
          <Alert variant="success" className="mt-2">
            Succes
          </Alert>
        )}
      </>
    );
  }
}

export default AddComent;
