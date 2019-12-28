import {
  ChatActionType,
  ChatActionsUnion
} from '../actions';

const initialState: string[] = [];

export function chatReducer(
  state = initialState,
  action: ChatActionsUnion
): string[] {
  switch (action.type) {
    case ChatActionType.ADD_MESSAGE:
      return state.concat([action.payload]);
    default:
      return state;
  }
}