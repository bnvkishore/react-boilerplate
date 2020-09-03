module.exports = `
import { init } from '@rematch/core'
import selectPlugin from '@rematch/select'
import * as app from '../models/App'


const store = init({
  models: {
    ...app,
  },
  plugins: [selectPlugin()],
  redux: {
    devtoolOptions: {
      disabled: false
    },
    rootReducers: { RESET_APP: () => undefined }
  }
});

export default store;
export const { dispatch, select, getState } = store;

`