function Person(name, number, salary, rating) {
  this.name = name;
  this.number = number;
  this.annualSalary = salary;
  this.reviewRating = rating;
  return this;
}

var atticus = new Person('Atticus', '2405', '47000', 3);
var jem = new Person('Jem', '62347', '63500', 4);
var boo = new Person('Boo', '11435', '54000', 3);
var scout = new Person('Scout', '6243', '74750', 5);

var employees = [atticus, jem, boo, scout];

console.log(loop(employees));

function loop(array) {
  for (i = 0; i < 4; i++) {
    console.log(final(array[i]));
  }
}

function sti(employee) {
  var bonus = 0;

  if (employee.reviewRating == 3) {
    bonus = bonus + 0.04;
  } else if (employee.reviewRating == 4) {
    bonus = bonus + 0.06;
  } else if (employee.reviewRating == 5) {
    bonus = bonus + 0.10;
  }

  if (employee.number.length == 4) {
    bonus = bonus + 0.05;
  }

  if (employee.annualSalary > 65000) {
    bonus = bonus - 0.01;
  }

  if (bonus > 0.13) {
    bonus = 0.13;
  }

  if (employee.reviewRating <= 2) {
    bonus = 0;
  }

  return bonus;
}

function final(employee) {
  var array = [];
  array.push(employee.name);
  array.push(sti(employee));
  array.push(parseInt(employee.annualSalary) + parseInt(employee.annualSalary * sti(employee)));
  array.push(Math.round(sti(employee) * parseInt(employee.annualSalary)));
  return array;
}
