"use client";

type Props = {
  name: string;
  type: string;
  value: string;
  placeholder: string;
  required: boolean;
  change: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const UInput: React.FC<Props> = ({
  placeholder,
  name,
  type,
  value,
  change,
  required,
}) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={(e) => change(e)}
      required={required}
    />
  );
};
