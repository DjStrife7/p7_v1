import React from "react";
import { NavLink } from "react-router-dom";

function Error404() {
  return (
    <main className="error404">
      <h1 className="error404__title">404</h1>
      <p className="error404__message">Oups! La page que <br className="error404__message__linebreak"/> vous demandez n'existe pas.</p>
      <NavLink className="error404__link" to="/">Retourner sur la page d'accueil</NavLink>
    </main>
  )
};


export default Error404;