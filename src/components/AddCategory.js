import React, { useState } from 'react';
import PropTypes from 'prop-types'

export default function AddCategory({ setCategories }) {

    const [inputVaue, setInputVaue] = useState('');

    const handleInputChange = (e) => {
        setInputVaue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Previene que no se recargue la página

        if (inputVaue.trim().length > 2) {
            setCategories(cats => [inputVaue, ...cats]);
            setInputVaue('');
        }

    }

    // Si ya regreso un form no es necesario dejar las etiquetas vacías
    return (
        <form onSubmit={handleSubmit}>
            <p>{inputVaue}</p>
            <input
                type="text"
                value={inputVaue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


