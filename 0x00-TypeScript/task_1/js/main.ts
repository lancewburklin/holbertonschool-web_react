interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
};

interface Directors extends Teacher {
  numberOfReports: number;
};

interface printTeacherFunction {
  (firstName: string,
  lastName: string): string
};

function printTeacher(firstName: string, lastName: string) {
  return firstName[0] + '. ' + lastName;
}

interface studentClassInterface {
  firstName: string;
  lastName: string;
}

interface studentConstructor {
  new (firstName: string, lastName: string): StudentClass
};

class StudentClass implements studentClassInterface {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this.firstName;
  }
}
