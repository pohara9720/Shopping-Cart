export default (initialState, reducers) => (state = initialState, action) =>
    reducers[action.type] ? reducers[action.type](state, action) : state
