import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './models/user';
import { State } from './state/00-reducer';

import { initAction, changUserName } from './state/01-actions';
import { getUser } from './state/02-selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ngrxStarter';

  public user: Observable<User> = {} as Observable<User>;

  constructor(private store: Store<State>){}

  ngOnInit(): void {
    this.store.dispatch(initAction());
    //this.user = this.store.select((state: any) => state.root.user);
    //this.user = this.store.pipe(select((state: State) => state.root.user));

    this.user = this.store.pipe(select(getUser));
  }

  changeUsername(): void{
    this.store.dispatch(changUserName({username: `Loico Square ${Math.random()}`}));
  }
}
