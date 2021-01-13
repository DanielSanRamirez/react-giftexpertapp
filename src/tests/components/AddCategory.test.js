import { shallow } from 'enzyme'
import AddCategory from '../../components/AddCategory'

describe('Pruebas en el componente', () => {

    const setCategories = jest.fn(); // crea una función que puedo saber coo fue llamada cuando y como 

    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('Debe mostrar correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';

        input.simulate('change', {
            target: {
                value: value
            }
        });

        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('No debe postear la información con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect(setCategories).not.toHaveBeenCalled();
    });

    test('Debe llamar el setCategories y limpiar la caja de texto', () => {
        // Simular el inputChange
        const input = wrapper.find('input');
        const value = 'Hola Mundillo';

        input.simulate('change', {
            target: {
                value: value
            }
        });
        // Simular el submit
        wrapper.find('form').simulate('submit', { preventDefault() { } });
        // setCategories se debe haber llamado
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        // el valor del input debe estar ''
        expect(input.prop('value')).toBe('');
    });


})
