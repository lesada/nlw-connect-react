import { ComponentProps } from "react";

type InputProps = ComponentProps<"div"> & {
  error?: string;
};

export function InputRoot({ error, ...rest }: InputProps) {
  return (
    <div>
      <div
        data-error={error}
        className="group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100 data-[error=true]:border-danger"
        {...rest}
      />
      {error && (
        <span className="text-danger text-xs font-semibold" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

export function InputField({ ...rest }: ComponentProps<"input">) {
  return <input className="flex-1 outline-0 placeholder-gray-400" {...rest} />;
}

export function InputIcon({ ...rest }: ComponentProps<"span">) {
  return (
    <span
      className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:!text-danger"
      {...rest}
    />
  );
}
