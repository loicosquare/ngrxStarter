import { createAction, props } from "@ngrx/store";

export const initAction = createAction('Init App');

export const changUserName =  createAction('[ROOT]Change username', props<{username : string}>());
export const changIsAdmin =  createAction('[ROOT]Change isAdmin', props<{isAdmin : boolean}>());