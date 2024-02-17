import * as actionTypes from "./action-types";
import { User } from "@/shared/model";


export type UserAction = {type: string, user_id: number};

const initialState: User = {

};

const userReducer = (
  state: User = initialState,
  action: UserAction
): User => {
  switch (action.type) {
    case actionTypes.SET_USER_ID: {
      const { user_id } = action;
      state.id = user_id;
      return state;
    }
  }

  return state;
};

export { userReducer };