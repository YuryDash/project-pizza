type ActionType = ReturnType<typeof numActionCreator>


const initialState = {
  num: 1
}
export type AppState = {
  num: number
}

export const appReducer = (state: AppState = initialState, action: ActionType): AppState => {
  switch (action.type) {
    case 'APP':
      return {...state, num: state.num + 1}
    default:
      return state
  }
}

export const numActionCreator = () => ({type: 'APP'})