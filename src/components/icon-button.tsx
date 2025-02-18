import { ComponentProps } from "react";

export function IconButton({ ...rest }: ComponentProps<"button">) {
  return (
    <button
      className="p-1.5 text-blue bg-gray-500 font-semibold rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"
      {...rest}
    />
  );
}
