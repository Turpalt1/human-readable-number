module.exports = function toReadable (number) {
  let strNumber = String(number);
  let len = strNumber.length;
  let result = '';
  let count = 0;
  let numbersTo = {
    0: 'zero', 1: 'one', 2: 'two', 3: 'three',
    4: 'four', 5: 'five', 6: 'six', 7: 'seven',
    8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven',
    12: 'twelve', 13: 'thirteen', 14:'fourteen', 15:'fifteen',
    16: 'sixteen', 17: 'seventeen', 18:'eighteen', 19:'nineteen',
  }
  let numbersB = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  
  if(number >= 0 && number <= 19) return `${numbersTo[number]}`;

  for (let i = len - 1; i >= 0; i--) {
    count++;
    if(count === 1) result = `${numbersTo[strNumber[i]]}${result}`;
    if(count === 2){

      if(+(strNumber[i] + strNumber[i + 1]) <= 19){
        result = `${numbersTo[+(strNumber[i] + strNumber[i + 1])]}`;
        if(result == 'zero') result = '';
      } 
      
      if(+(strNumber[i] + strNumber[i + 1]) > 19){
        if(result == 'zero') result = '';
        result = `${numbersB[strNumber[i] - 2]} ${result}`;  
      } 
    }
    if(count === 3) result = `${numbersTo[strNumber[i]]} hundred ${result}`;
    if(count === 4){
      if(result.includes('zero'))
      result = `${numbersTo[strNumber[i]]} thousand ${result}`;
      result = result.slice(0,result.indexOf(' zero')) + result.slice(result.indexOf('zero') + 4)
    } 
  }
    return result.trim();

}