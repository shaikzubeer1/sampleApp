import React from 'react';
import { shallow, mount } from 'enzyme';
import HomePage from './HomePage'
import { Provider } from 'react-redux';

import configureMockStore from 'redux-mock-store'
const mockStore = configureMockStore()

const setUp = () => {
    const initialState = {
        mockState: {}
    }
    let store1 = mockStore(initialState)
    const wrapper = shallow(<HomePage store={store1}/>).childAt(0).dive();
    return wrapper
}

describe('HomePage Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setUp();
    })

    test('Renders Without Crashing', () => {
        const component = wrapper.find('#homepageComponent')
        expect(component.lenght).toBe(1)
    })

    // test('Loads', () => {
    //     const initialState = {
    //         mockState: {}
    //     }
    //     let store = mockStore(initialState)
    //     const wrapper = mount(<Provider store={store} ><HomePage store={store1}/></Provider>).childAt(0).dive();
    //     wrapper.find('#homepageComponent')
    //     expect(component.lenght).toBe(1)
    // })
})