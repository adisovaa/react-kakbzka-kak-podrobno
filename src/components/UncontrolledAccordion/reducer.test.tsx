import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test('collapsed should be true', () => {
    // data
    const state: StateType = {
        collapsed: false
    }

    // action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    // expectation
    expect(newState.collapsed).toBe(true)
})


test('collapsed should be false', () => {
    // data
    const state: StateType = {
        collapsed: true
    }

    // action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    // expectation
    expect(newState.collapsed).toBe(false)
})


test('reducer should throw ERROR because action is wrong', () => {
    // data
    const state: StateType = {
        collapsed: true
    }

    // expectation
    expect(() => {
        reducer(state, {type: 'FAKE-TYPE'})
    }).toThrowError()
})