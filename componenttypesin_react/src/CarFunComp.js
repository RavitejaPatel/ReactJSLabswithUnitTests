import React from 'react';

let cardetails =
{
    model: "SUV",
    brand: "Honda"
}

const CarFunComp = () => {
    return (
        <div>
            {cardetails.model}
        </div>
    );
}
export default CarFunComp;