import React from "react";

class Comments extends React.Component {


  render() {
    return (
      <>
        {
              <div key={this.props._id + this.props.rate} className='d-flex flex-column comment-bg'>
                <small className="font-weight-bold">
                  {this.props.author}
                </small>
                <small>{this.props.comment}</small>
                <small className="font-weight-bold">Rate: {Array.from({length:this.props.rate}).map(x => '⭐️')}</small>
                <small>Asin: {this.props.asin}</small>
                <hr />
              </div>
            
          }
      </>
          )
        }
  
}

export default Comments;
