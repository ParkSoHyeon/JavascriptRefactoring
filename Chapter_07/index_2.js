class Person {
    constructor(name) {
        this._name = name;
        this._courses = [];
    }

    get name() {
        return this._name;
    }

    // 복제본 제공
    get courses() {
        return this._courses.slice();
    }

    // 1. 세터 제거하기
    // 2. 복제본을 필드에 저장
    set courses(arg) {
        this._courses = arg.slice();
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
aPerson.addCourse(basicCourseNames.map(name => new Course(name, false)));

// 클라이언트2
for (const name of readBasicCourseNames(filename)) {
    aPerson.addCourse(new Course(name, false));
}