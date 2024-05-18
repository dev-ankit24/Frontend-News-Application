import React from "react";

export default function ItemApi(props)  {
    return (
      <>
        <div className="card ">
          <div className="card-body">
            <div className="img-top">
              <a href={props.url} target="--blank">
                {" "}
                <img
                  src={props.pic ?props.pic:'./img.png'}
                  height={150}
                  className="card-img-top"
                  alt="NE=etwork not connect"
                />
              </a>
            </div>
            <a href={props.url} target="--blank">
            <h5 className="card-title">{props.title} </h5>
            </a>
            <div className="items">
              <a href={props.url} target="--blank">
                <p className="item1">{props.name}</p>
              </a>
              <p className="item">
                { new Date(props.date).toLocaleDateString()}
              </p>
            </div>
            <hr />
            <p className="card-text ">{props.discription}</p>

            <a href={props.url} target="--blank" class="btn btn-primary w-100 mybtn">
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }

