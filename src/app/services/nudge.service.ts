import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NudgeService {
  private apiUrl = 'https://3s5q2zvk-8000.asse.devtunnels.ms/api/predict/';

  constructor(private http: HttpClient) {}

  predictChildNudges(userId: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify({ user_id: userId });

    return this.http.post(this.apiUrl, body, { headers });
  }
}
