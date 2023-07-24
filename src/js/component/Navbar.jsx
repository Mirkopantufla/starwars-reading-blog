import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { BsFillTrashFill } from 'react-icons/bs'
import StarWars from '../../img/starwarsCortado.png'

const Navbar = () => {

  const { store, actions } = useContext(Context)

  useEffect(() => {

    // actions?.getLocalFavorites()

  }, [store.favorites])


  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <div className="ms-5">
          <img src={StarWars} style={{ width: "15%" }} />
        </div>
      </Link>
      <div className="dropstart m-2">
        <button type="button" className="btn btn-secondary fs-5" data-bs-toggle="dropdown" aria-expanded="false">
          Favorites {<small className="rounded bg-light p-1 text-dark">{store?.favorites?.length > 0 ? store?.favorites?.length : 0}</small>}
        </button>
        <ul className="dropdown-menu">
          {
            store.favorites.map((favorite, index) => {
              return (
                <li key={index}
                  className="bg-dark text-light rounded m-1 d-flex justify-content-between p-2 fs-5">
                  <p className="p-2 m-auto" style={{ width: "150px" }}>{favorite}</p>
                  <span className="m-auto pe-auto border border-light rounded-2 p-2 trashButton"><BsFillTrashFill className="fs-5 mx-2" onClick={() => actions.deleteFavorite(favorite)} /></span>
                </li>
              )
            })
          }
        </ul>
      </div>

    </nav>
  );
};

export default Navbar