import React,{Component} from 'react';
import "./assets/css/style.css";
class App extends Component{
    constructor(props){
        super(props); //default props
        this.state={title:"Hello React 2",isShowing:false};

    }
    handleClick=()=>{
        this.setState({
            isShowing:!this.state.isShowing
        });
    }

    render(){
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
                       this.state.isShowing? (<img src="https://images.unsplash.com/photo-1528965051322-6d335c69eb86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=891&q=80"/>):null}

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
