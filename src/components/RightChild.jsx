import React from "react";

const RightChild = ({ id, Name, Price }) => {
    return (
        <div className="card">
            <div className="card-body">
                <div>
                    <h2 className="card-title">{Name}</h2>
                    <p className="card-text">Price: {Price}</p>
                    <h5>Item Id: {id}</h5>
                </div>
            </div>
        </div>
    );
};

export default RightChild;