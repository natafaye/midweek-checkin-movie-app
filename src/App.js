import { useState } from "react";
import AddMovieForm from "./components/AddMovieForm";
import MovieList from "./components/MovieList";
import { v4 as uuid } from 'uuid';
import EditMovie from "./components/EditMovie";

function App() {
  const [movieList, setMovieList] = useState( [
    {
      id: 0,
      name: "Star Wars",
      rating: 5
    }
  ] );

  const [editMovieId, setEditMovieId] = useState(null)

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const toggle = () => setIsEditModalOpen(!isEditModalOpen);

  const addMovie = (newMovieData) => {
    const newMovie = {
      ...newMovieData,
      id: uuid() //movieList[movieList.length - 1].id + 1 // hack, doesn't always work
    }
    setMovieList( [...movieList, newMovie ] )
  }

  const deleteMovie = (idToDelete) => {
    setMovieList( movieList.filter(movie => movie.id !== idToDelete) )
  }

  const startEdit = (idToEdit) => {
    setEditMovieId(idToEdit);
    setIsEditModalOpen(true);
  }

  const saveEdit = (updatedData) => {
    // update our movie data for the one with the edit move id with the updatedData
    setMovieList( movieList.map(movie => {
      if(movie.id !== editMovieId) return movie;
      return { ...movie, ...updatedData }
      // (movie.id !== editMovieId) ? movie : { ...movie, ...updatedData }
    }) )
    setIsEditModalOpen(false);
  }

  return (
    <div className="m-4">
      <AddMovieForm onSubmit={addMovie}/>
      <MovieList movieList={movieList} onDeleteClick={deleteMovie} onEditClick={startEdit}/>
      <EditMovie isModalOpen={isEditModalOpen} toggle={toggle} onSubmit={saveEdit} movieId={editMovieId} movieList={movieList}/>
    </div>
  );
}

export default App;
