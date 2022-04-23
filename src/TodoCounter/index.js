import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter(){
    const {
        totalTodos,
        completedTodos
    } = React.useContext(TodoContext);
    return (
        <section>
            <h1 className='Title'>Today's Activities</h1>
            <h2 className='TodoCounter'>Has completado {completedTodos} de {totalTodos} TODOs</h2>
        </section>
    );
}

export { TodoCounter };