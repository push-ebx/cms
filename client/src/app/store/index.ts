import { createStore, combineReducers, Store } from "redux";
import { userReducer, UserAction } from "@/entities/user/model";
import { User } from "@/shared/model";

const rootReducer = combineReducers({
  userReducer
});

export const store: Store<User, UserAction> = createStore(rootReducer);
export type RootState = ReturnType<typeof rootReducer>;