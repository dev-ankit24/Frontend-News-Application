import React, { Component } from "react";

export default class ItemApi extends Component {
  render() {
    return (
      <>
        <div className="card ">
          <div className="card-body">
            <div className="img-top">
              <a href={this.props.url} target="--blank">
                {" "}
                <img
                  src={this.props.pic ?this.props.pic:'./img.png'}
                  height={150}
                  className="card-img-top"
                  alt="NE=etwork not connect"
                />
              </a>
            </div>
            <a href={this.props.url} target="--blank">
            <h5 className="card-title">{this.props.title} </h5>
            </a>
            <div className="items">
              <a href={this.props.url} target="--blank">
                <p className="item1">{this.props.name}</p>
              </a>
              <p className="item">
                {new Date(this.props.date).toLocaleDateString()}
              </p>
            </div>
            <hr />
            <p className="card-text ">{this.props.discription}</p>

            <a href={this.props.url} target="--blank" class="btn btn-primary w-100 mybtn">
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}
