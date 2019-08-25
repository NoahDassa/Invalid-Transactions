/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function(transactions) {
  //declare variables 
  let string = "", letter ="", answer = [], names = [], locations = [], times = [], indexhash ={} ;
  let amount, count, name, location, time, index;
  //account for edge cases
  if (transactions.length === 0) return []
  if (transactions.length > 1000) transactions.length =1000 
  
  //iterate through each array element...
  for(i=0;i<transactions.length;i++){
    //reset element based values...
    count = 0, amount = "", name ="", location ="", time ="",index = null;
    string = transactions[i]
    //determine values of time,amount,location, and name... build arrays for these values
    for(j=0;j<string.length;j++){
      letter = string[j]
      if(string[j]===",") count++
      if(count === 0) name = `${name}${letter}`
      if((count === 1) && (string[j] !== ","))  time  = `${time}${letter}`
      if((count === 2) && (string[j] !== ","))  amount = `${amount}${letter}`
      if((count === 3) && (string[j] !== ","))  location = `${location}${letter}`
    }//end loop j
    names[i] = name, locations[i] = location, times[i] = time;
    
    //determine whether each string element is either valid or invalid...
    if(parseInt(amount) > 1000) {
      answer.push(string);
      indexhash[i] = true
    } 
    
      for(k=0;k<i;k++) {
        if((names[k] === name)&&(locations[k] !== location)&& (Math.abs(times[k] - time) <= 60)){
          if (!(k in indexhash)) answer.push(transactions[k])
          if (!(i in indexhash))  answer.push(string)
          indexhash[k]=true;
          indexhash[i]=true
        }
      }//end loop k  
    
  }//end loop i
  
  return answer
};
