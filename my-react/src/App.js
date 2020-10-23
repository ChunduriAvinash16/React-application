import React,{Component} from 'react';
import "./assets/css/style.css";
import Images from "./components/Images";
class App extends Component{
    constructor(props){
        console.log("App constructor");
        super(props); //default props
        this.state={title:"Hello React 2",isShowing:false};

    }
    handleClick=()=>{
        console.log("inside handle Cliclk");
        this.setState({
            isShowing:!this.state.isShowing
        });
    }
    componentDidMount(){
        console.log("Mount");
        this.setState({ title:"Hello Avinash"})
    }


    render(){
        console.log("App Render");
        console.log(this.state.title);
        return(
            <section className="flex justify-center">
                <div className="w-1/2">
                    <div className="text-center"> 
                    <div className="my-4">{this.state.title}</div>
                        <button className="p-2 my-2 bg-blue-700 text-white" onClick={this.handleClick}>
                            Toggle Image
                        </button>
                    </div>
                    {
                       this.state.isShowing? (<Images/>):null}

                </div>
            </section>
        )
    }
}

export default App;



/*function App() {
    return (
        <div>
            <div className="bg-gray-500 text-white p-5 border ">
                <h2 >Hello react</h2>
            </div>
        </div>
    )
}*/

//export default App;
