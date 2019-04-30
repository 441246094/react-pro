import React from 'react'
import {Link} from "react-router-dom"
import {connect} from 'react-redux';
import store from '../../store/store';
import {addTodoWithDispatch,DreTodoWithDispatch,changeObj} from '../../store/action';
import { dispatch } from '../../../../../../AppData/Local/Microsoft/TypeScript/3.4.3/node_modules/rxjs/internal/observable/pairs';

class Ceshi extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = { 
            obj:{name:1}
         };
    }
   onchange=()=>{
        store.dispatch(addTodoWithDispatch(this.state.obj))
        console.log(store.getState().reducer)
   }
   onchanges=()=>{
        store.dispatch(DreTodoWithDispatch(this.state.obj))
        console.log(store.getState().reducer)
   }
   onchangess=()=>{
        store.dispatch(changeObj(this.state.obj))
        console.log(store.getState())
   }
    render() {
        return (
            <div>
                <div >
                    <Link to='/App'>Ceshi</Link>
                </div>
                <div>
                    <button onClick={this.onchange}>增加+++++</button>
                </div>
                <div>
                    <button onClick={this.onchanges}>减少--------</button>
                </div>
                <div>
                    <button onClick={this.onchangess}>改变obj</button>
                </div>
            </div>
        );
    }
}



export default Ceshi;