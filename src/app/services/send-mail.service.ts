import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SendMailService {
  url: string = environment.mailURL;
  constructor(private http: HttpClient) { }

  sendMail(data) {
    const url = this.url+ "/sendmail";
    return this.http.post(url, data);
  }
}
