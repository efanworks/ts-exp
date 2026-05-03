interface Student {
  name: string;
  score: number;
}

interface Worker {
  name: string;
  salary: number;
}

interface Intern extends Student, Worker {
  duration: number;
}

const intern: Intern = {
  name: "fg",
  score: 20,
  salary: 100,
  duration: 2,
};
console.log(intern);
