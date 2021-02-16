import React, {useState} from 'react'
import PropTypes from 'prop-types'

function useInputValue(defaultValue = ''){
    const [value,setValue]= useState(defaultValue)
    return{
        bind:{
            value,
            onChange:event=> setValue(event.target.value),
            placeholder:'input new todo'
        },
        clear:()=> setValue(''),
        value: () => value
    }
}

function AddTodo({onCreate}){
    const input = useInputValue('')

    function submitHandler(event){
        event.preventDefault()

        if(input.value().trim()){
            onCreate(input.value())
            input.clear()
        }
    }
    return(
        <form className="inputTodo" onSubmit={submitHandler}>
            <input {...input.bind}/>
            <button className="botInput" type="submit">Add todo</button>
        </form>
    )
}

AddTodo.propTypes={
    onCreate: PropTypes.func.isRequired
}
export default AddTodo