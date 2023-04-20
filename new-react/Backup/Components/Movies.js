import React from "react";

let Movies= () =>{
    let movie_name="kantara"
    let movie_language="kanada"
    let more_Details = {
        dir_Name: 'Rishab shetty', 
        "actor": "Rishab shetty",
        "actress": "Sapthami Gowda"
}
            return <div>
            <h1>{movie_name}</h1>
            <hr/>
            <h2>movie language: {movie_language}</h2>
            <hr/>
            <h3>Dir Name:{more_Details.dir_Name}</h3>
            <h3>Actor:{more_Details.actor}</h3>
            <h3>Actress:{more_Details.actress}</h3>

</div>

}
export default Movies
