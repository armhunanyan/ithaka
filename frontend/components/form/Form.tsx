interface IInputInterface {
    label: string;
    type?: 'text' | 'email';
    name: string;
    placeholder: string;
}

export const Input:React.FC<IInputInterface> = ({label, type = 'text', name, placeholder}) => {
    return (
        <div>
            <label className="block font-medium mb-15">{label}</label>
            <input type={type} name={name} placeholder={placeholder} className="w-full py-5 bg-transparent border-b border-black text-gray-dark focus:outline-hidden outline-none " />
        </div>
    );
}