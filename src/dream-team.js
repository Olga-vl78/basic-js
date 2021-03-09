const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
 // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  //./test/dream-team.test.js
    
  if (members === undefined || members === null || members.length === 0 ) {
    return false;
  }
  let teamName = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      teamName.push(members[i]);
       }
  } 
  if (teamName.length === 0) {
   return false;
    }
    
        teamName = teamName.
        map(item => item.trim()).
        map(item => item[0].toLowerCase()).
        sort().join('').toUpperCase();    
        return teamName;
}
 

  
    
  
 