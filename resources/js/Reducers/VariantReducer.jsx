export const VariantReducer = (state, action) => {
    switch (action.type) {
      case "ADD_VARIABLE_VALUE":
        console.log('payload: ',  action.payload)
        // return [...state, action.payload.color] 
        

        case "REMOVE_VARIABLE_VALUE":
        return 'remove variable'



       default:

        return state;
    }
  };


  // return state.map((todo) => {
  //   //   if (todo.id === action.id) {
  //   //     return { ...todo, complete: !todo.complete };
  //   //   } else {
  //   //     return todo;
  //   //   }