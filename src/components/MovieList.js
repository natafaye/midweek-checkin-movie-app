import React from 'react'

export default function MovieList({ movieList, onDeleteClick, onEditClick }) {
  return (
    <ul className="list-group">
        { movieList.map(movie => (
            <li className="list-group-item" key={movie.id}>
              <span>{ movie.name } - { movie.rating } stars</span>
              <button className="btn btn-danger float-end" onClick={() => onDeleteClick(movie.id)}>X</button>
              <button className="btn btn-success float-end me-2" onClick={() => onEditClick(movie.id)}>Edit</button>
            </li>
        ))}
    </ul>
  )
}
