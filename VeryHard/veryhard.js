class Person {
    constructor(name, job, age){
        this.name = name;
        this.job = job;
        this.age = age;
    }
    fetchJob =function(){
        console.log(`${this.name} is a ${this.job}`)
    }
    exercise =function(){
        console.log(`${this.name} said Cardio sucks!!`)
    }
}

// let person1 = new Person("Chris", "Web Developer", 22);
// person1.exercise();
// person1.fetchJob();

class Programmer extends Person {
    constructor(name, job, age, langauge){
        super(name, job, age)
        this.name = name;
        this.job = job;
        this.age = age;
        this.langauage = langauge;
        this.busy = true;

    }

    completeNewTask(){
        this.busy = false;
    }
    acceptNewTask(){
        this.busy = true;
    }
    offerNewTask(){
        if (this.busy = true){
            console.log(`${this.name} can't accept any new tasks right now`);
        } else if (this.busy = false){
            console.log(`${this.name} would love to accept new responsibility.`);
        }
    }

    listLanguages(){
        return console.log(...this.langauage);
    }
    learnLanguages(lang){
        this.langauage.push(lang)
        return console.log()
    }

}

let programmer1 = new Programmer("Chris", "Web Developer", 22, ["Html", "CSS", "JavaScript"]);

console.log(programmer1);
console.log(programmer1.listLanguages());
programmer1.completeNewTask();
programmer1.offerNewTask();
programmer1.learnLanguages('React');
console.log(programmer1.listLanguages());