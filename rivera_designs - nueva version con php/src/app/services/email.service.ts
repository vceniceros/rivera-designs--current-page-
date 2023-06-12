import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Form } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private _http: HttpClient) { }
  sendMessage(body: Form) {
    return this._http.post('http://localhost:3000/backend/mail.php',body);
    }
  
 }
