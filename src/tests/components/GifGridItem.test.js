import { shallow } from 'enzyme';
import React from 'react';
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {
    test('Debe de mostrar el texto correctamente', () => {

        const wrapper = shallow(<GifGridItem />);

        expect(wrapper).toMatchSnapshot();

    })

});