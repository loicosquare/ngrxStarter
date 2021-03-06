import { state } from "@angular/animations";
import { Action, ActionReducer, createReducer, MetaReducer, on } from "@ngrx/store";
import { User } from "../models/user";
import { changUserName, initAction } from "./01-actions";

export const ROOT_FEATURE_KEY  = 'root';

export interface State{
 readonly [ROOT_FEATURE_KEY]: RootState;
}

export interface RootState{
  appName: string;
  user: User;
}

const initialState : RootState = {
  appName: 'NgRx',
  user : {
    isAdmin: false,
    username: ''
  }
};

function log(reducer: ActionReducer<any>) : ActionReducer<State>{
  return (state, action) => {
    const currentState = reducer(state, action);

    console.groupCollapsed(action.type);
    console.log("Action", action);
    console.log("etat précédent:", state);
    console.log("état suivant:", currentState);
    console.groupEnd();

    return currentState;
  }
}

export const metaReducers : MetaReducer[] = [log]; 

export const rootReducer = createReducer<RootState, Action>(initialState,
  on(initAction, (state) =>{
    return {
      ...state,
      user:{
        ...state.user,
        isAdmin: true
      }
    }
  }),
  on(changUserName, (state: RootState, props) =>{
    return{
      ...state,
      user:{
        ...state.user,
        username: props.username
      }
    };
  })
);


