import React, { useContext, useEffect } from 'react'
import { Context } from '../store/appContext';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import NoImagen from '../../img/no-imagen.jpg'

const CharacterInfo = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {

        actions?.chargeSpecificCharacter(parseInt(params.theid) + 1)

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
                                {store?.chosenCharacter?.result.properties.name}
                            </h1>
                            <p>
                                {store?.chosenCharacter?.result.description}
                            </p>
                        </div>
                    </div>
                    <hr className="my-4" />
                    <div className='row'>
                        <div className="col-2">
                            <h5 htmlFor="">Nombre: </h5>
                            <span>{store?.chosenCharacter?.result.properties.name}</span>
                        </div>
                        <div className="col-2">
                            <h5 htmlFor="">Genero: </h5>
                            <span>{store?.chosenCharacter?.result.properties.gender}</span>
                        </div>
                        <div className="col-2">
                            <h5 htmlFor="">Año de Nacimiento: </h5>
                            <span>{store?.chosenCharacter?.result.properties.birth_year}</span>
                        </div>
                        <div className="col-2">
                            <h5 htmlFor="">Color de Ojos: </h5>
                            <span>{store?.chosenCharacter?.result.properties.eye_color}</span>
                        </div>
                        <div className="col-2">
                            <h5 htmlFor="">Color de Cabello: </h5>
                            <span>{store?.chosenCharacter?.result.properties.hair_color}</span>
                        </div>
                        <div className="col-2">
                            <h5 htmlFor="">Color de Piel: </h5>
                            <span>{store?.chosenCharacter?.result.properties.skin_color}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CharacterInfo