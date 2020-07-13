class Button extends React.Component{
    render(){
        return (
            <button onClick={this.props.action} id={this.props.id}>
                <i className={"fa fa-2x fa-" + this.props.icon}></i> {this.props.innerText}
            </button>
        )
    }
}

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            toggleIcon: "bars"
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu(){
        let menu = document.getElementById("left-menu");
        if(menu.offsetParent === null){
            menu.style.display = "flex";
            this.setState({
                toggleIcon: "times"
            })
        }else{
            menu.style.display = "none";
            this.setState({
                toggleIcon: "bars"
            })
        }
    }

    render() {
        return (
            <div className="header">
                <div className="container">
                    <ul className="left">
                        <Button action={this.toggleMenu} id="left-menu-icon" icon={this.state.toggleIcon} innerText="" />
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