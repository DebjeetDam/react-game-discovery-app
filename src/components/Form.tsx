import { FormEvent, useState } from "react";

const Form = () => {
  // useState HOOK to read input values
  const [person, setPerson] = useState({ name: "", age: "" });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
    // stop page from reloading
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          onChange={(e) => setPerson({ ...person, name: e.target.value })}
          value={person.name}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Age
        </label>
        <input
          onChange={(e) =>
            setPerson({ ...person, age: parseInt(e.target.value) })
          }
          value={person.age}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
