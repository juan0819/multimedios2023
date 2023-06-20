import React from "react";
class MenuPrimcipal extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
        <div>
            <ul className="nav nav-tabs" id="navId" role="tablist">
                <li className="nav-item">
                    <a href="/" class="nav-link" data-bs-toggle="tab" aria-current="page">Dashboard</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a href="/ListarCurso" class="nav-link" data-bs-toggle="tab">ListarCurso</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a href="#" className="nav-link disabled" data-bs-toggle="tab">Disabled</a>
                </li>
            </ul> 
        </div>
        
         );
    }
}
 
export default MenuPrimcipal;