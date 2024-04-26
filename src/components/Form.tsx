// import { FormEvent, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
}

const Form = () => {
  // useState HOOK to read input values
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>();

  console.log(errors);

  const onSubmit = (data: FieldValues) => console.log(data);

  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault();    // stop page from reloading
  //   console.log(person);
  // };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">name of field reqd</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">inc. length</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button disabled={!isValid} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
