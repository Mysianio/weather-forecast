const initialState = {
  isFetching: true,
  data: null
};

export default function weather(state = initialState, action){
  switch (action.type) {
    case "FETCH_WEATHER_DATA":
      state.data = action.data
      state.isFetching = action.isFetching
      state.error = action.error
      return {...state}
      break;
    default:
      return state;
  }
}
