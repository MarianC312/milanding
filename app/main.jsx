
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
                        <Button id="about-me" icon="" innerText="About Me" />
                        <Button id="projects" icon="" innerText="Projects" />
                        <Button id="contact" icon="" innerText="Contact Me" />
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