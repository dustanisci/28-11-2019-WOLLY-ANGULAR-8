import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '@shared/interface/contact';
import { environment } from 'src/environments/environment';
import { ApiService } from '@shared/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private apiservice: ApiService) { }

  public send(contact: Contact): Observable<Contact> {
    return this.apiservice.post(`${environment.contact}`, contact);
  }
}
