import React from "react";
import { NavLink } from "react-router-dom";


function Navigation() {
  return (
    
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container">
        <a class="navbar-brand" href="/"><img src="../img/SGN_09_24_2022_1663968217400 1.png" alt="Logo" class="img-fluid" /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                    <a class="nav-link active" href="/">Главная</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Тарифы</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">FAQ</a>
                </li>
            </ul>
            <div class="d-flex">
                <a class="header-link-left" href="#">
                    Зарегистрироваться
                </a>
                <a class="header-link" href="/signin">
                    Войти
                </a>
            </div>
        </div>
    </div>
</nav>


  );
}

export default Navigation;
