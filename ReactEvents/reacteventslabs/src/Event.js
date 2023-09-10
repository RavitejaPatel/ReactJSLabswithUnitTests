import React from 'react';
function Event() {
    const onclickEventFun = () => {
        alert("click event function")
    }

    return (
        <button onClick={onclickEventFun}>click</button>
    );
}
export default Event;