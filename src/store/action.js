export const ADD_TODO = 'ADD_TODO'
export const DRE_TODO = 'DRE_TODO'
export const CHANGE_OBJ = 'CHANGE_OBJ'


export function addTodoWithDispatch(text) {
    console.log(1)
    return {
      type: ADD_TODO,
      text
    }
  }

  export  function DreTodoWithDispatch(text) {
    return {
      type: DRE_TODO,
      text
    }
  }

  export  function changeObj(text) {
    return {
      type: CHANGE_OBJ,
      text
    }
  }

  export default {
    ADD_TODO,
    DRE_TODO,
    CHANGE_OBJ,
    addTodoWithDispatch,
    DreTodoWithDispatch,
    changeObj
  }