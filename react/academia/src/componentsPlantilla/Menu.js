import React from "react";
class MenuPrimcipal extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
        <div className="container">
            <ul class="nav justify-content-center  ">
                <li class="nav-item">
                    <a class="nav-link active" href="/" aria-current="page">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/ListarCurso">Listar Curso</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled link</a>
                </li>
            </ul>
        </div>
         );
    }
}
 
export default MenuPrimcipal;