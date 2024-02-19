// 12. Write a JavaScript program that creates a class called University with properties for university name and departments. Include methods to add a department, remove a department, and display all departments. Create an instance of the University class and add and remove departments.

class University {
    constructor(name) {
        this.name = name;
        this.departments = [];
    }

    addDepartment(department){
        this.departments.push(department)
        console.log(`Deparment ${department} added to ${this.name}`)
    }

    removeDepartment(department){
        const index = this.departments.indexOf(department);
        if(index !== -1){
            // start from index and remove 1
            this.departments.splice(index, 1);
            console.log(`Department "${department}" removed from ${this.name}.`);
        }else{
            console.log(`Department "${department}" does not exist in ${this.name}.`);
        }
    }

    displayDepartments(){
        console.log(`Departments in ${this.name}:`);
        if(this.departments.length === 0){
            console.log('No departments available');
        }else{
            this.departments.forEach(function(department, index) {
                console.log(`${index + 1}. ${department}`)
            })
        }
    }
}

const university = new University("Gujarat University");

university.displayDepartments();

university.addDepartment('Science');
university.addDepartment('Mathematics');
university.addDepartment('Physics');

university.displayDepartments();

university.removeDepartment('Mathematics');
university.displayDepartments();

university.removeDepartment('Chemistry');