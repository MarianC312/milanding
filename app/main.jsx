function Button(props){
    return(
        <button id={props.id}>
            <i className={"fa fa-2x fa-" + props.icon}></i> {props.innerText}
        </button>
    )
}

class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <div className="container">
                    <Button id="left-menu-icon" icon="bars" innerText="" />
                    <div id="left-menu" className="left">
                        <Button id="Inicio" icon="" innerText="Inicio" />
                        <Button id="Proyectos" icon="" innerText="Proyectos" />
                        <Button id="Contacto" icon="" innerText="Contacto" />
                    </div>
                    <div className="right">
                        <Button id="Twitter" innerText="" icon="twitter" />
                        <Button id="Github" innerText="" icon="github" />
                    </div>
                </div>
            </div>
        )
    }
}

class Main extends React.Component{
    render(){
        return(
            <div>
                <Header />
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById("app"));