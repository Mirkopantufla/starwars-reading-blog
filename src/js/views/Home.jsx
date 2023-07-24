import React, { useContext, useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import PeopleCard from '../component/PeopleCard.jsx'
import PlanetCard from '../component/PlanetCard.jsx'
import { Context } from '../store/appContext.js'
import Pagination from 'react-js-pagination';
import '../../styles/home.css'

const Home = () => {

  const { store, actions } = useContext(Context)

  const [pageCharacters, setPageCharacters] = useState(1);
  const [pagePlanets, setPagePlanets] = useState(1);

  useEffect(() => {

    handlePageChangeCharacters()
    handlePageChangePlanets()

  }, [])


  const handlePageChangeCharacters = page => {

    actions.chargeAllCharacters(`${store.apiURL}people/?page=${page}&limit=10`);
    setPageCharacters(page);

  }

  const handlePageChangePlanets = page => {

    actions.chargeAllPlanets(`${store.apiURL}planets/?page=${page}&limit=10`);
    setPagePlanets(page);

  }

  return (
    <div className="container">

      <div className="row border border-3 border-light rounded my-5">
        <h1 className='text-center'>Characters</h1>
        <div className="d-flex justify-content-between align-items-center mx-auto bg-white p-3 shadow">
          {
            store?.characters && (
              <>
                <button className={"btn btn-primary btn-sm " + (store.characters?.previous !== null ? "" : "disabled")}
                  onClick={() => {
                    actions.chargeAllCharacters(store.characters?.previous)
                    setPageCharacters(pageCharacters - 1)
                  }}>
                  Prev
                </button>
                <button className={"btn btn-primary btn-sm " + (store.characters?.next !== null ? "" : "disabled")}
                  onClick={() => {
                    actions.chargeAllCharacters(store.characters?.next)
                    setPageCharacters(pageCharacters + 1)
                  }}>
                  Next
                </button>
              </>
            )
          }
        </div>
        {/* Todas las cartas con las personas */}
        <div className="d-flex" style={{ overflowX: "scroll" }}>
          {
            !!store.characters &&
            store.characters?.results && store.characters?.results.length > 0 &&
            store?.characters?.results.map((character, index) => {
              return (
                <div key={index} className="col-4 m-3">
                  <PeopleCard index={character.uid - 1} character={character} />
                </div>
              )
            })
          }
        </div>
        <div className="d-flex justify-content-center align-items-center mt-3 fs-5">
          {
            !!store.characters && (
              <Pagination
                activePage={pageCharacters}
                totalItemsCount={store?.characters?.total_records || 0}
                itemsCountPerPage={10}
                itemClass="page-item"
                linkClass="page-link"
                pageRangeDisplayed={5}
                onChange={handlePageChangeCharacters} />
            )
          }
        </div>
      </div>

      {/* ---------------------------------------------------------------------------------  */}
      <div className="row border border-3 border-light rounded">
        <h1 className='text-center'>Planets</h1>
        <div className="d-flex justify-content-between align-items-center mx-auto bg-white p-3 shadow">
          {
            store?.planets && (
              <>
                <button className={"btn btn-primary btn-sm " + (store.planets?.previous !== null ? "" : "disabled")}
                  onClick={() => {
                    actions.chargeAllPlanets(store?.planets?.previous)
                    setPagePlanets(pagePlanets - 1)
                  }}>
                  Prev
                </button>
                <button className={"btn btn-primary btn-sm " + (store.planets?.next !== null ? "" : "disabled")}
                  onClick={() => {
                    actions.chargeAllPlanets(store?.planets?.next)
                    setPagePlanets(pagePlanets + 1)
                  }}>
                  Next
                </button>
              </>
            )
          }
        </div>
        {/* Todas las cartas con los planetas */}
        <div className="d-flex" style={{ overflowX: "scroll" }}>
          {
            !!store.planets &&
            store.planets.results && store.planets?.results.length > 0 &&
            store?.planets?.results.map((planet, index) => {
              return (
                <div key={index} className="col-4 m-3">
                  <PlanetCard page={pagePlanets} index={planet.uid - 1} planet={planet} />
                </div>
              )
            })
          }
        </div>
        <div className="d-flex justify-content-center align-items-center mt-3 fs-5">
          {
            !!store.planets && (
              <Pagination
                activePage={pagePlanets}
                totalItemsCount={store?.planets?.total_records || 1}
                itemsCountPerPage={10}
                itemClass="page-item"
                linkClass="page-link"
                pageRangeDisplayed={5}
                onChange={handlePageChangePlanets} />
            )
          }
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default Home