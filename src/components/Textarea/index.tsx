import React, {TextareaHTMLAttributes} from 'react';
import './styles.css'
// TextareaHTMLAttributes permite que todos os atributos atribuíveis a um Textarea venham para esse component
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    label: string;
    name: string;

}
// ...rest (rest operator), permite que o component receba as demais props sem precisar declará-las
const Textarea: React.FC<TextareaProps> = ({label, name, ...rest})=> {
    return (
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest}/>
        </div>

    )
}

export default Textarea;