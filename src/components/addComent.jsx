import { Button, Modal, Form } from "react-bootstrap";
import React from "react";

class AddComent extends React.Component {
  state = {
    asin: this.props.asins,
    book: this.props.bookName,
    commentSend: {
      author: "",
      comment: "",
      rate: 0,
      elementId: this.props.comAsin,
    },
  };
//   SEND COMMENTS
  async sendComment() {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + this.props.comAsin,
        {method: "POST",
          body: JSON.stringify(this.state.coomentSend),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjcwZDJkNTI2MjAwMTViNmRjOTkiLCJpYXQiOjE2Mjk5ODUyNzMsImV4cCI6MTYzMTE5NDg3M30.XnwP2w8HYgNw7WtHh0tP8haV9jofgQ_UQ9xJOsb01C4",
          },
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }
  //   INPUT COMMENT
  comentInput(e, comentNam) {
    this.setState({
      ...this.state.commentSend,
      [comentNam]: e.target.value,
    });
  }


  render() {
    return (
      <>
        {/* FORM */}

        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Add comment to {this.state.book}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {
              <form onSubmit={this.sendComment}>
                <Form.Group>
                  <Form.Label>Your name?</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Insert your email"
                    onChange={(e) =>
                      this.setState(this.comentInput(e, "author"))
                    }
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Your email?</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Your comment"
                    onChange={(e) =>
                      this.setState(this.comentInput(e, "comment"))
                    }
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Rate</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Your comment"
                    onChange={(e) => this.setState(this.comentInput(e, "rate"))}
                  />
                </Form.Group>
              </form>
            }
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Send</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </>
    );
  }
}

export default AddComent;
