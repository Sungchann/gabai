import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NudgeService {
  private apiUrl = 'http://127.0.0.1:8000/api/predict/';

  constructor(private http: HttpClient) {}

  predictChildNudges(userId: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify({ user_id: userId });

    return this.http.post(this.apiUrl, body, { headers });
  }
}
