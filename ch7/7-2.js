export class Person {
  #name;
  #courses;
  constructor(name) {
    this.#name = name;
    this.#courses = [];
  }

  get name() {
    return this.#name;
  }

  get courses() {
    return [...this.#courses];
  }

  addCourses(courses) {
    this.#courses.push(courses);
  }

  removeCourses(courses, runIfAbsent) {
    const index = this.#courses.indexOf(courses);
    if(index === -1) {
      runIfAbsent();
      return;
    };
    this.#courses.splice(index, 1);
  }

  // set courses(courses) {
  //   this.#courses = courses;
  // }
}

export class Course {
  #name;
  #isAdvanced;
  constructor(name, isAdvanced) {
    this.#name = name;
    this.#isAdvanced = isAdvanced;
  }

  get name() {
    return this.#name;
  }

  get isAdvanced() {
    return this.#isAdvanced;
  }
}

const ellie = new Person('엘리');
const course = new Course('리팩토링', true);
ellie.addCourses(course);
console.log(ellie.courses.length);
ellie.removeCourses(course, () => { console.log('해당 코스가 없다.'); });
ellie.removeCourses(course, () => { console.log('해당 코스가 없다.'); });
console.log(ellie.courses.length);