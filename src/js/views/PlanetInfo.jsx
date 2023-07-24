import React, { useContext, useEffect } from 'react'
import { Context } from '../store/appContext';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import NoImagen from '../../img/no-imagen.jpg'

const PlanetInfo = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {

        actions?.chargeSpecificPlanet(parseInt(params.theid) + 1)

    }, [])


    return (
        <div className='container-fluid'>
            <Link to="/">
                <span className="btn btn-primary btn-lg" href="#" role="button">
                    Back
                </span>
            </Link>
            <div className="row">
                <div className="offset-2 col-8">
                    <div className="row">
                        <div className="col-7 text-center">
                            <img src={NoImagen} alt="" />
                        </div>
                        <div className="col-5 text-center">
                            <h1>
                                {store?.chosenPlanet?.result.properties.name}
                            </h1>
                            <p>
                                {store?.chosenPlanet?.result.description}
                            </p>
                        </div>
                    </div>
                    <hr className="my-4" />
                    <div className='row'>
                        <div className="col-2">
                            <h5 htmlFor="">Nombre: </h5>
                            <span>{store?.chosenPlanet?.result.properties.name}</span>
                        </div>
                        <div className="col-2">
                            <h5 htmlFor="">Population: </h5>
                            <span>{store?.chosenPlanet?.result.properties.population}</span>
                        </div>
                        <div className="col-2">
                            <h5 htmlFor="">Orbital Period: </h5>
                            <span>{store?.chosenPlanet?.result.properties.orbital_period}</span>
                        </div>
                        <div className="col-2">
                            <h5 htmlFor="">Terrain: </h5>
                            <span>{store?.chosenPlanet?.result.properties.terrain}</span>
                        </div>
                        <div className="col-2">
                            <h5 htmlFor="">Gravity: </h5>
                            <span>{store?.chosenPlanet?.result.properties.gravity}</span>
                        </div>
                        <div className="col-2">
                            <h5 htmlFor="">Diameter: </h5>
                            <span>{store?.chosenPlanet?.result.properties.diameter}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default PlanetInfo