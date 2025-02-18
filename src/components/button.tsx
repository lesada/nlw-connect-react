import { ComponentProps } from "react";

export function Button({ ...rest }: ComponentProps<"button">) {
  return (
    <button
      className=" flex justify-between items-center px-5 h-12 text-blue bg-gray-500 font-semibold rounded-xl w-full cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"
      {...rest}
    />
  );
}
