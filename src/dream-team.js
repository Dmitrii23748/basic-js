const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members) && members.length > 0 ) {
    let a = members.map((item) => {
        if(typeof item === 'string') {
              return item.trim().charAt(0).toUpperCase()           
        } 
      })
      return(a.sort().join(''));
  } else if (typeof members !== Array.isArray(members)){
    return false
  }
}

module.exports = {
  createDreamTeam
};
