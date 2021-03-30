class Person {
    constructor(name) {
        this._name = name;
        this._courses = [];
    }

    get name() {
        return this._name;
    }

    get courses() {
        return this._courses;
    }

    set courses(arg) {
        this._courses = arg;
    }

    addCourse(aCourse) {
        this._courses.push(aCourse);
    }

    removeCourse(aCourse, fnIfAbsent = () => {throw new RangeError()}) {
        const index = this._courses.indexOf(aCourse);

        if (index === -1) {
            fnIfAbsent();
        }
        else {
            this._courses.splice(index, 1);
        }
    }
}

class Course {
    constructor(name, isAdvanced) {
        this._name = name;
        this._isAdvanced = isAdvanced;
    }

    get name() {
        return this._name;
    }

    get isAdvanced() {
        return this._isAdvanced;
    }
}

const aPerson = new Person('맥스');

numAdvancedCourses = aPerson.courses.filter(c => c.isAdvanced).length;

// 클라이언트1
const basicCourseNames = readBasicCourseNames(filename);
aPerson.courses = basicCourseNames.map(name => new Course(name, false));

// 클라이언트2
for (const name of readBasicCourseNames(filename)) {
    aPerson.courses.push(new Course(name, false));
}