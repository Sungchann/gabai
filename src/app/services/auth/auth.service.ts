import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Child {
  id: string;
  name: string;
  color: string;
  screen_time: {
    time: string;
    percentage: number;
  };
  sleep: {
    time: string;
    quality: string;
  };
  activity: {
    time: string;
    completed: number;
  };
  insight_description: string;
  insight_name: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  role: 'child' | 'parent' = 'parent';
  children: Child[] = [
    {
      id: '1',
      name: 'Yana',
      color: "green",
      screen_time: {
        time: "2 hours 15 minutes",
        percentage: 75,
      },
      sleep: {
        time: "8 hours 30 minutes",
        quality: "fair"
      },
      activity: {
        time: "15 minutes",
        completed: 4
      },
      insight_description: "GabAI noticed Yana slept better when screen time ended earlier.",
      insight_name: "Consider an earlier wind-down tonight."
    },
    {
      id: '2',
      name: 'Amiel',
      color: "purple",
      screen_time: {
        time: "2 hours 15 minutes",
        percentage: 75,
      },
      sleep: {
        time: "8 hours 30 minutes",
        quality: "fair"
      },
      activity: {
        time: "15 minutes",
        completed: 4
      },
      insight_description: "GabAI noticed Amiel slept better when screen time ended earlier.",
      insight_name: "Consider an earlier wind-down tonight."
    },
    {
      id: '3',
      name: 'Donna',
      color: "red",
      screen_time: {
        time: "2 hours 15 minutes",
        percentage: 75,
      },
      sleep: {
        time: "8 hours 30 minutes",
        quality: "fair"
      },
      activity: {
        time: "15 minutes",
        completed: 4
      },
      insight_description: "GabAI noticed Donna slept better when screen time ended earlier.",
      insight_name: "Consider an earlier wind-down tonight."
    },
  ]

  private _currentChild = new BehaviorSubject<any>(this.children[0]);
  currentChild$ = this._currentChild.asObservable();

  private _role = new BehaviorSubject<any>('child');
  role$ = this._role.asObservable();

  ngOnInit() {
    // this._currentChild.next(this.children[0]);
    console.log('AuthService initialized with first child:', this.children[0]);
  }

  constructor() { }

  setChild(id: string) {
    const child = this.children.find(c => c.id === id);
    if (child) {
      this._currentChild.next(child);
    }
  }

  setRole(role: string) {
    this._role.next(role);
  }
}
