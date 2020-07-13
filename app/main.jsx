function Button(props) {
    return (
        <button onClick={props.action} id={props.id}>
            <i className={"fa fa-2x fa-" + props.icon}></i> {props.innerText}
        </button>
    )
}

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu(){
        let menu = document.getElementById("left-menu");
        menu.style.display = (menu.offsetParent === null) ? "flex" : "none";
    }

    render() {
        return (
            <div className="header">
                <div className="container">
                    <ul className="left">
                        <Button action={this.toggleMenu} id="left-menu-icon" icon="bars" innerText="" />
                        <div id="left-menu">
                            <Button id="about-me" className="right" icon="" innerText="About Me" />
                            <Button id="projects" icon="" innerText = "Projects" />
                            <Button id="contact" icon="" innerText="Contact Me" />
                        </div>
                    </ul>
                    <ul className="right">
                        <Button id="Twitter" innerText="" icon="twitter" />
                        <Button id="Github" innerText="" icon="github" />
                    </ul>
                </div>
            </div>
        )
    }
}

class Body extends React.Component {
    render() {
        return (
            <div className="body">
                <div className="container" id="about">
                    
                </div>
            </div>
        )
    }
}

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <div>
                <Header />
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById("app"));