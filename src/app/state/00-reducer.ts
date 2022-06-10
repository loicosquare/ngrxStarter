import { state } from "@angular/animations";
import { ActionReducer, createReducer, MetaReducer, on } from "@ngrx/store";
import { changUserName, initAction } from "./01-actions";

const initialState = {
  appName: 'NgRx',
  user : {
    username: '',
    isAdmin: false
  }
};

function log(reducer: ActionReducer<any>) : ActionReducer<any>{
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

export const rootReducer = createReducer(initialState,
  on(initAction, (state) =>{
    return {
      ...state,
      user:{
        ...state.user,
        isAdmin: true
      }
    }
  }),
  on(changUserName, (state, props) =>{
    return{
      ...state,
      user:{
        ...state.user,
        username: props.username
      }
    };
  })
);


