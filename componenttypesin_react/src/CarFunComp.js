import React from 'react';

let cardetails =
{
    model: "SUV",
    brand: "Honda"
}

const CarFunComp = () => {
    return (
        <div>
            {JSON.stringify(cardetails)}
        </div>
    );
}
export default CarFunComp;