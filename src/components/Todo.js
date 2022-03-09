import React, { Component } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import './todostyle.css'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listItem: [],
            newItem: ""
        }
        this.removeoflist=this.removeoflist.bind(this)
    }
    
    addtolist = (item) => {
        this.setState({ listItem: [...this.state.listItem, item] });
      };
      removeoflist=(index)=>{
        this.state.listItem.splice(index,1)
          this.setState({
              listItem:this.state.listItem
          })
      }
    edittask=(index,value)=>{
        
        this.state.listItem.splice(index,1,value)
        this.setState({
            listItem:this.state.listItem
        })
    }
    
    render() {

        
        
        return (
            <div style={{}}>
                <TodoForm addToNewItem={this.addtolist} />
                {this.state.listItem}
                  {console.log(this.state.listItem)}
                {this.state.listItem.map((todo, i) => <TodoList listItem={todo} index={i}delete={this.removeoflist} addToNewItem={this.addtolist}/>)}
            </div>
        )
    }
}
