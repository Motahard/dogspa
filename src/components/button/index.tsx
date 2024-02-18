type Props = {
    type?: "submit" | "reset" | "button" | undefined;
    text?: string;
}

const Button = ({ type, text}: Props) => {
    return (
        <button type={type}>{text}</button>
    );
}

export default Button;