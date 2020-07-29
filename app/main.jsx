class Button extends React.Component{
    render(){
        return (
            <a href={this.props.refTo} target={this.props.target}>
                <button value={this.props.value} onClick={this.props.action} id={this.props.id}>
                    <i className={"fa fa-2x fa-" + this.props.icon}></i> {this.props.innerText}
                </button>
            </a>
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
        this.scrollToElement = this.scrollToElement.bind(this);
    }

    scrollToElement(){
        let elem = document.getElementById(event.target.value);
        elem.scrollIntoView({ behavior: 'smooth'});
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
                            <Button value="about" refTo="#/" target="" action={this.scrollToElement} icon="" innerText="About Me" />
                            <Button value="projects" refTo="#/" target="" action={this.scrollToElement} icon="" innerText = "Projects" />
                            <Button value="contact" refTo="#/" target="" action={this.scrollToElement} icon="" innerText="Contact Me" />
                        </div>
                    </ul>
                    <ul className="right">
                        <Button id="Twitter" refTo={"https://twitter.com/39_TitaniuM_63"} target="_blank" innerText="" icon="twitter" />
                        <Button id="Github" refTo={"https://github.com/MarianC312"} target="_blank" innerText="" icon="github" />
                    </ul>
                </div>
                <div className="bg-img"></div>
            </div>
        )
    }
}

class Body extends React.Component {
    render() {
        return (
            <div className="body">
                <div className="container" id="about">
                    #About
                </div>
                <div className="container" id="projects">
                    #Projects
                </div>
                <div className="container" id="contact">
                    #Contact Me
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
                <Body />
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById("app"));