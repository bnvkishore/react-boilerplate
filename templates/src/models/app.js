module.exports = `
  export default {
    state: {
      isTrue: false
    },
    reducers: {
      setAppState(prevState, newState) {
        return {
          ...prevState,
          isTrue: newState
        }
      }
    },
    selectors: {
      getAppState() {
        return state => state.app.isTrue;
      }
    }
  }
`