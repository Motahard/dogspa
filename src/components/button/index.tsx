type Props = {
    type?: 'submit' | 'reset' | 'button' | undefined;
    text?: string;
}

function Button({ type, text }: Props) {
  return (
    <button type={type}>{text}</button>
  );
}

export default Button;
