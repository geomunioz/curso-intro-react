import React from 'react';
import { TodoIcon } from './';

function DeleteIcon({ onDelete }){
    return (
        <TodoIcon
            type="detele"
            onClick={onDelete}
        />
    );
}

export { DeleteIcon };