 export const setFieldError = (field, error) => ({
    type: SET_FIELD_ERROR,
    payload: { field, error },
  });
  
  export const clearFieldError = (field) => ({
    type: CLEAR_FIELD_ERROR,
    payload: { field },
  });
  
  export const clearAllErrors = () => ({
    type: CLEAR_ALL_ERRORS,
  });
  