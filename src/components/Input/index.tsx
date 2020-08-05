import React, {InputHTMLAttributes} from 'react';
import './styles.css'
// InputHTMLAttributes permite que todos os atributos atribuíveis a um input venham para esse component
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
    name: string;

}
// ...rest (rest operator), permite que o component receba as demais props sem precisar declará-las
const Input: React.FC<InputProps> = ({label, name, ...rest})=> {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest}/>
        </div>

    )
}

export default Input;