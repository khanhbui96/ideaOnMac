import { 
  GET_COMMANDS, 
  ADD_COMMANDS, 
  DELETE_COMMAND, 
  UPDATE_COMMAND,
  LOADING 
} from '../constants/actions';

const initialState = {
  isUpdate: false,
  data: []
};

const commands = (state = initialState, action) => {
  switch (action.type) {
    case LOADING: {
      return {
          ...state,
          isUpdate: true
      }
  };
    case GET_COMMANDS:
      return {
        ...state,
        isUpdate: false,
        data: [...action.payload]
      };
    case ADD_COMMANDS:
      return {
        isUpdate: false,
        data: [...state.data, action.payload]
      };
    case DELETE_COMMAND:
      return {
        isUpdate: false,
        data: [
          ...state.data.filter(command => {
            return command._id != action.payload;
          })
        ]
      };
    case UPDATE_COMMAND:
      return {
        isUpdate: false,
        data: [
          ...state.data.map(command => {
            if (command._id == action.payload.id) {
              return action.payload.data;
            } else {
              return command;
            }
          })
        ]
      };
    default:
      return {
        isUpdate: false,
        data: [...state.data]
      };
  }
};

export default commands;
