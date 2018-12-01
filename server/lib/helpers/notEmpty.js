/**
 * Function to check if value is empty
 * @param {string} value
 * @param {string} message
 * @return {(error|bool)} returns error or true
 */
function notEmpty(value, message) {
    if (value === '') {
      throw new Error(message);
    }
  
    return true;
  }
  
  export default notEmpty;