import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '@shared/interface/contact';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  public send(contact: Contact): Observable<Contact> {
    const headers = new HttpHeaders().append('Content-Type', 'application/json');
    return this.http.post<Contact>(`${environment.contact}`, contact, { headers });
  }
}
