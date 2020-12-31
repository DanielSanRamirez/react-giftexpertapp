// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
//import '@testing-library/jest-dom';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'; // se debe hacer instalación con: npm install --save-dev @wojtekmaj/enzyme-adapter-react-17 enzyme --legacy-peer-deps
import {createSerializer} from 'enzyme-to-json'; // se debe hacer instalación con: npm install --save-dev enzyme-to-json 

Enzyme.configure({ adapter: new Adapter() });

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
