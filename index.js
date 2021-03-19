// Write your solution in this file!
const employee={
    name:'Sam',
    address:'11 Broadway'
};


function updateEmployeeWithKeyAndValue (employee, key, value){
    const newEmployee={...employee};
    employee.name='Sam';
    newEmployee[key]=value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee;
}

function deleteFromEmployeeByKey(employee,key){
    employee[key]='Sam';
    employee=undefined;
    const newEmployee={...employee};
    delete newEmployee.key;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}