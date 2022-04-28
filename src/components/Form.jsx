import React, {Component} from "react";

class Form extends Component { 
    constructor(props) {
        super(props);
        this.state = { 
            count: 0
        };
    }
   

    render() {
        return (
            <>
            <h1 className="text-center"> Formulario de registro</h1>
            <p className="text-center">Para ingresar a la pagina tiene que loguearse</p>
            <form className="text-center">
                <div className="mb-3">
                    <label  className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
            <div className="text-center p-5">
                <label className="text-center p-5" >{this.state.count}</label>
                    <button className="m-1" onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
                    <button className="m-1" onClick={() => this.setState({ count: this.state.count - 1 })}>-</button>
            </div>
        </>
        );
    };



}

export default Form ;
