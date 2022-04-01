import React from 'react';
import Special from '../Special/Special';

const Myself = ({house, ornament}) => {
    return (
        <div>
            <h5>Myself</h5>
            <p><small>House: {house}</small></p>
            <Special ornament={ornament}></Special>
        </div>
    );
};

export default Myself;