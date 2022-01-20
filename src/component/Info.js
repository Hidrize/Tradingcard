import React from "react";

const Info = ({jerseyNumber,team,country,salary,}) => {

    return (
        <>
            <p>{jerseyNumber}</p>
            <p>{team}</p>
            <p>{country}</p>
            <p>{salary}</p>
        </>
    )

}
export default Info