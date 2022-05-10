let alarmInput = process.argv.slice(2);

let sortedInput = alarmInput.sort((a, b) => {
  return a - b 
});

for (let x = 0; x < sortedInput.length; x++) {

  if (sortedInput[x] < 0 || isNaN(sortedInput[x]) ) {
    
    continue;

  } else { setTimeout(() => {
      console.log(`.`);
      process.stdout.write('\x07');
      }, (sortedInput[x] * 1000));
      
    }

};