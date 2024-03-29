import { FieldErrors, UseFormRegister } from "react-hook-form";

type InputProps = {
  register: UseFormRegister<any>;
  name: string;
  errors: FieldErrors<any>;
};

const Input = ({ register, name, errors }: InputProps) => {
  return (
    <div>
      <input
        type="number"
        {...register(name, { valueAsNumber: true })}
        className="border-2 border-[grey]"
      />
      <p className="text-[#C84038]"></p>
    </div>
  );
};

export default Input;
