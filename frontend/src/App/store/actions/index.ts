import { AnyAction } from 'redux';

export enum ChatActionType {
  ADD_MESSAGE = '[Chat] Add Message'
}

export class AddMessageAction implements AnyAction {
  type = ChatActionType.ADD_MESSAGE;

  constructor(public payload: string) {}
}

export type ChatActionsUnion = AddMessageAction;