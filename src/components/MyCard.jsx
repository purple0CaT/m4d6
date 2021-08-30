import { Card, Col, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import React from "react";
import CommentArea from "./CommentArea";


class SingBook extends React.Component {

  render()
  {
    let book = this.props.book;

    return (
      <Col xs="12 mb-2" md="3" lg="2" key={book.asin + book.category + book.asin}>
        <Card className="h-100">
          <Card.Img variant="top" src={book.img} />
          <Card.Body className="d-flex flex-column justify-content-end p-2">
            <Card.Title className="mb-auto h6">{book.title}</Card.Title>
            <Card.Text>{book.category} </Card.Text>
            <small className="font-weight-bold">Asin: {book.asin}</small>
            <div className="d-flex flex-column justify-content-between">
              <Button variant="info mb-3">Read</Button>
              <Button onClick={()=> this.props.showThisCom(book.asin)} variant="secondary mb-1">Comments</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingBook;
