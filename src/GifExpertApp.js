// Para importar react rapido se hace con el snniper imr + tab
import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

function GifExpertApp() {

    const [categories, setCategories] = useState(['One Punch']);

    /*const handleAdd = () => {
        setCategories(['Spiderman', ...categories]); // Con setCategories estoy sobreescribiendo
        // setCategories(cats => [...cats, 'Spiderman']); También funciona
    }*/

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            {/*<button onClick={handleAdd}>Agregar</button>*/}

            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    );
};

export default GifExpertApp;