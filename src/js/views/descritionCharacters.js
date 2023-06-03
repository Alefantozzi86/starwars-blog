import React, { useContext, useEffect } from "react";
import {useParams } from "react-router-dom";
import { useState } from "react";
import { Context } from "../store/appContext";


import "../../styles/demo.css";

export const DescriptionCharacter = () => {
    const params = useParams();
	const {id} = params;
	const { store } = useContext(Context);
	const [actualPage, setActualPage] = useState();

	return (
		<>
<div className="row">
<div className="col  m-4">
    <img src="https://play-lh.googleusercontent.com/jBRPR7BtpYrGtdpyO7O6UsxT_MlPC1Ep5scNeV4Ffeyk1Sm-ZQ5Td0TscsbI7Loxo_M"/>
        </div>

    <div className="col m-4 text-light">
        <h1>Nombre</h1>
        <h4>descripcion</h4>
        </div>
        <div className="row">
        <div className="col border-warning border-top m-4 ">
            </div>
            </div>
            <div className="row">
            <div className="col-2 m-4">
<h4>hola</h4>
<h5></h5>
            </div>
            <div className="col-2">
            <h4></h4>
<h5></h5>     
            </div>
            <div className="col-2">
            <h4></h4>
<h5></h5>
            </div>
            <div className="col-2">
            <h4></h4>
<h5></h5> 
            </div>
            <div className="col-2">
            <h4></h4>
<h5></h5> 
            </div>
            </div>

        </div>
    <div>
    </div>

		</>

	);
};

export default DescriptionCharacter;