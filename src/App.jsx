import StudentProfileCard from './StudentProfileCard';

function App() {
  return (
    <div>
      <h1>Student Directory</h1>
      <StudentProfileCard
        name="Ochilov Akhmadjon"
        studentId="202539468"
        major="Computer Engineering"
        year={3}
        gpa={3.75}
      />
      <StudentProfileCard
        name="Ibrokimov Fayzullo"
        studentId="202539567"
        major="Computer Engineering"
        year={2}
        gpa={3.5}
      />
      <StudentProfileCard
        name="Hakimov Ozodbek"
        studentId="202539467"
        major="Computer Engineering"
        year={4}
        gpa={3.9}
      />
    </div>
  );
}

export default App;