import React from 'react';

let details =
{
    name: "Robin",
    country: "Netherlands",
    language: "spanish"
}

const FunctionalComp = () => {
    return (
        <div>
            <p>This message from functional component</p>
            {details.language}
        </div>
    );
}
export default FunctionalComp;