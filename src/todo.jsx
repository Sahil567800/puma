import { useState } from "react";

const Todo = () => {
    const [movie, addmovie] = useState("")
    const [movies, setMovies] = useState([]);
    const handleClick = () => {
        setMovies([...movies, movie]);
        addmovie("")




    }


    return (
        <>
            <h1>Favourite Movies List</h1>
            <input value={movie} type="text" onChange={(e) => { addmovie(e.target.value) }} />
            <button onClick={handleClick}>ADD</button>
            <ul>
                {
                    movies.map((value, index) => (
                        <li key={index}>{value}</li>

                    ))

                }
            </ul>




        </>
    )
}
export default Todo;