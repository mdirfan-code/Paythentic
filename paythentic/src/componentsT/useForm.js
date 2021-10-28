import React,{useState} from 'react'

export  function useForm(initialFValues,validateOnChange=false,validate) {
    
    const [values,setValues] = useState(initialFValues);
    const [errors,setErrors] = useState({});
    
    const handleInputChange = e =>{
        const {name,value} = e.target
        setValues({
            ...values,
            [name]:value
        });
        if (validateOnChange){
            validate({ [name]: value })
        }

    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange  
    }
}

export  function Form(props) {
    const {children,...other} = props;
    return (
        <form {...other}>
            {props.children}
        </form>
    )
}
