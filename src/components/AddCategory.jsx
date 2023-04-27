import { useState } from 'react';


// 1. (1 manera de hacerlo) export const AddCategory = ({setCategories}) => {

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        //PARA QUE NO COJA VALORES EN BLANCO 
        if (inputValue.trim().length <=1) return;
        

        // 1. (1 manera de hacerlo) . setCategories(categories => [ inputValue,...categories ])
        onNewCategory(inputValue.trim());


        //PARA QUE SE LIMPIE LA CAJA DE TEXTO DEL INPUT
        setInputValue('');
    }


    return (
        <form onSubmit={ onSubmit }>
             <input
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ onInputChange }> 
        </input>

        </form>
        
     )
}
