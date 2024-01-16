'use strict';
// Combien les hommes gagneraient-ils au total si leur salaire mensuel augmenterait de 2000?
let menSalary;
let menSalaryTotal;
menSalaryTotal = userList
                  .filter(user => user.gender == 'M')
                  .map(user => user.salary += 2000)
                  .reduce((menSalaryTotal, menSalary) => menSalaryTotal + menSalary);


const userList = [
    { name: "John", gender: 'M', salary: 70000},
    { name: "Jade", gender: 'F', salary: 84000},
    { name: "Charly", gender: 'M', salary: 64000},
    { name: "Manuela", gender: 'F', salary: 76000}
];