
type Props = {
  className: string,
  placeholder: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  value: string,
  refInput?: React.LegacyRef<HTMLInputElement> | undefined,
}

// it was before:  refInput = null,
export default function UserInput (
  {
    className,
    placeholder,
    onChange,
    value,
    refInput = undefined,
  }: Props
) {
  return (
    <input
      className={className}
      type='text'
      placeholder={placeholder}
      onChange={onChange}
      ref={refInput}
      value={value}
      maxLength={15}
      minLength={1}
    />
  );
};


