import { shallow } from 'enzyme';
import React from 'react';
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

    const titulo = 'Un título';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={titulo} url={url} />);

    test('Debe mostrar el texto correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe tener un parrafo con el título', () => {
        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(titulo);
    });

    test('Debe tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(titulo);
    });

    test('Debe tener animate__fadeIn', () => {

        const div = wrapper.find('div');
        const className = div.props().className;

        expect(className.includes('animate__fadeIn')).toBe(true);
    });



});