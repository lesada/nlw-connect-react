import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export function IconButton({ className, ...rest }: ComponentProps<"button">) {
  return (
    <button
      className={twMerge(
        "p-1.5 text-blue bg-gray-500 font-semibold rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900",
        className
      )}
      {...rest}
    />
  );
}
