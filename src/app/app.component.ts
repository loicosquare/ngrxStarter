import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { initAction, changUserName } from './state/01-actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ngrxStarter';

  constructor(private store: Store){}

  ngOnInit(): void {
    this.store.dispatch(initAction());
  }

  changeUsername(): void{
    this.store.dispatch(changUserName({username: `Loico Square ${Math.random()}`}));
  }
}
