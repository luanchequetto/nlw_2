import React, {SelectHTMLAttributes} from 'react';
import './styles.css'
// SelectHTMLAttributes permite que todos os atributos atribuíveis a um Select venham para esse component
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    label: string;
    name: string;
    options: Array<{
        value: string;
        label: string;
    }>;

}
// ...rest (rest operator), permite que o component receba as demais props sem precisar declará-las
const Select: React.FC<SelectProps> = ({label, name, options, ...rest})=> {
    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select value="" id={name} {...rest}>
                <option value="" disabled hidden>Selecione uma opção</option>

            {options.map(option =>{
                return <option key={option.value} value={option.value}>{option.label}</option>
            })}
            </select>
        </div>

    )
}

export default Select;