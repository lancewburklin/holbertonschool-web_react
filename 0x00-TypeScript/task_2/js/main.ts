interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
  workFromHome() {
    return "Working from home";
  }
  getCoffeeBreak() {
    return 'Getting a coffee break';
  }
  workDirectorTasks() {
    return 'Getting to director tasks';
  }
}

export class Teacher implements TeacherInterface {
  workFromHome() {
    return "Cannot work from home";
  }
  getCoffeeBreak() {
    return 'Cannot have a break';
  }
  workTeacherTasks() {
    return 'Getting to work';
  }
}

export function createEmployee(salary: number | string): Director | Teacher {
 if (typeof salary === 'number') {
   if (salary < 500) {
     return new Teacher;
   }
   return new Director;
 }
 return new Director;
}

export function isDirector(employee: DirectorInterface | TeacherInterface): boolean {
  if (employee instanceof Teacher) {
    return false;
  }
  return true;
}

export function executeWork(employee: DirectorInterface | TeacherInterface): string {
  if (employee instanceof Director) {
    return employee.workDirectorTasks();
  } else if (employee instanceof Teacher) {
    return employee.workTeacherTasks();
  }
}
