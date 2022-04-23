import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider (props){
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);
    
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] =  React.useState(false);
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
    
      let searchedTodos = [];
    
      if(!searchValue.length >= 1){
        searchedTodos = todos;
      }else{
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        })
      }
    
      // const saveTodos = (newTodos) => {
      //   const stringifiedTodos = JSON.stringify(newTodos);
      //   localStorage.setItem('TODOS_V1', stringifiedTodos);
      //   setItem(newTodos);
      // };
      const addTodo = (text) => {
        const newTodos = [...todos]; //Copia de array
    
        newTodos.push({
          completed: false,
          text
        });
        //newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
      }
    
      const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
    
        const newTodos = [...todos]; //Copia de array
    
        newTodos[todoIndex] = {
          text: newTodos[todoIndex].text,
          completed: true,
        };
        //newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
      }
    
      const deleteTodo = (text) =>{
        const todoIndex = todos.findIndex(todo => todo.text === text);
    
        const newTodos = [...todos]; //Copia de array
    
        newTodos.splice(todoIndex, 1); //Eliminar parte (inicio, cantidad a eliminar)
        //newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
      }

    return (
        //value define propiedad a compartir por todas partes
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}> 
            {props.children} 
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider};

//Siempre que se requiera estado compartido
/* <TodoContext.Consumer></TodoContext.Consumer> */

//Envuelve aplicacion el AppUi
/* <TodoContext.Provider></TodoContext.Provider> */
