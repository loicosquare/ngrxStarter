import { createAction, props } from "@ngrx/store";

export const initAction = createAction('Init App');

export const changUserName =  createAction('Change username', props<{username : string}>());