interface IButtonProps {
    className?: string;
    children: any;
}

const Button:React.FC<IButtonProps> = ({children, className = ''}) => {
    return (
        <button type="button" className={`inline-block bg-green-dark text-white text-xs md:text-base font-medium md:font-bold px-10 md:px-30 py-10 ${className}`}>
            {children}
        </button>
    )
}

export default Button;