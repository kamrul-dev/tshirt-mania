import React from 'react';
import MySelf from '../Myself/Myself';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Father = ({ house, ornament }) => {
    return (
        <div>
            <h4>Father</h4>
            <p>House: {house}</p>
            <div style={{display: 'flex'}}>
                <MySelf house={house} ornament={ornament}></MySelf>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;