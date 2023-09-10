import React from 'react';
function Event() {
    const onclickEventFun = (data) => {
        alert("click event function with data " + data)
    }

    return (
        <button onClick={() => onclickEventFun("datapack")}>click</button>
    );
}
export default Event;