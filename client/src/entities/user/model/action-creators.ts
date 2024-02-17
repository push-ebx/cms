import * as actionTypes from "./action-types.ts"
import { UserAction } from "@/entities/user/model/index.ts";

export const setUserID = (user_id: number) => {
  const action: UserAction = {
    type: actionTypes.SET_USER_ID,
    user_id
  }

  return action
}