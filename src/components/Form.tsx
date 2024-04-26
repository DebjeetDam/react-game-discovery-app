import { FormEvent } from "react";

const Form = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault(); // stop page from reloading
    console.log("Submitted");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Age
        </label>
        <input id="age" type="number" className="form-control" />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
