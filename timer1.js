
const args = process.argv.slice(2);
//console.log(args);
let timer = 0;

sortedArgs = args.sort();
console.log(sortedArgs);
let newArr = [];
for (let i = 0; i<args.length; i++)
{
  if(isNaN(args[i]))
  {
    console.log("Invalid output")
  }
  else if(args === [] || args < 0){
    console.log("Invalid output")
  } else {
    newArr.push(Number(args[i]));
  }

}
for(let j = 0; j< newArr.length; j++)
{
setTimeout(() => {
  process.stdout.write('\x07');
}, newArr[j]*1000);
}


