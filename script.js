console.log('Hello!');
var arrNumbers = [10, 2, 3, 4, 8, 8, 8, 8, 8, 8, 9, 3, 4];

function numberStartAndEnd(number) {
  if (!arrNumbers.includes(number)) return 'Doesnot exist';
  var data = {};

  console.log(arrNumbers);

  for (let i = 0; i < arrNumbers.length; i++) {
    let key = arrNumbers[i];

    if (data.hasOwnProperty(key)) {
      data[key].end = i;
    } else {
      data[key] = {
        start: i,
        end: i,
      };
    }
  }

  console.log(data);
  return [data[number].start, data[number].end];
}

console.log(numberStartAndEnd(8));
