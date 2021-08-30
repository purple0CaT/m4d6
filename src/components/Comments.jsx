import React from "react";

class Comments extends React.Component {


  render() {
    return (
      <>
        {
              <div key={this.props._id} className='d-flex flex-column'>
                <small className="font-weight-bold">
                  {this.props.author}
                </small>
                <small>{this.props.comment}</small>
                <small>{this.props.rate}</small>
                <small>{this.props.asin}</small>
                <hr />
              </div>
            
          }
      </>
          )
        }
  
}

export default Comments;
