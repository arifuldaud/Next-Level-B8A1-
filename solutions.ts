
function multiplyValue(value:number,multiplier?:number) :number {
if (multiplier === undefined){
    return value * 2;
} else 
    return value * multiplier;
}



 function processInput(value:string | number | boolean) : string | number {
    if (typeof value === "string"){
        return value.trim().toLowerCase();
    }  
        if(typeof value ==="number") {
            return value * 10;
        } 
        if(typeof value ==="boolean")
            {
         return value? "Active" : "Inactive";
        }
         return "";
    }
 



function formatCoordinate(
 [latitude, longitude, locationName] : readonly [number, number, string]) : string {
    return `Location: ${locationName} (${latitude}, ${longitude})`;

 }




 function concatenateArrays<T>(...arrays: T[][]): T [] {
    return arrays.flat();
 }



 
interface Course {
    title:string;
    students:number;
    isPublished: boolean
}

function getPopularCourses(courses:Course[] , minStudents:number) :Course[] {
    return courses.filter(course => course.isPublished && course.students >= minStudents);
}




 function pluckValues<T, K extends keyof T>(items: T[],key:K) : T[K][] {
    return items.map(item=> item[key]);

 }
 



class Employee {
    protected name :string;
    private baseSalary: number;
 constructor(name:string,baseSalary:number) {
    this.name = name ;
    this.baseSalary = baseSalary;
 }
getDetails():string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
}
}

class Manager extends Employee {
 private department: string;
 constructor(name:string,baseSalary:number,department:string) {
    super(name,baseSalary);
    this.department =department;
 }
 getRoleInfo() : string {
    return `Manager of ${this.department}: ${this.name}`
 }
}



async function validateAgeAsync(age:number): Promise<string> {
   
   if (age >=18) {
    await new Promise(resolve =>setTimeout(resolve,1000));
         return "Access Granted";
    }
   
    if(age < 18) {
        throw new Error("Access Denied: Must be 18 or older");
    }
  return "";
}
