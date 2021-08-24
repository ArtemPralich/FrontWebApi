import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class NotificationService {
    public boolNotif: boolean = false;
    public notificationMessage: string ="";
    output(message: string){
        this.boolNotif = true;
        this.notificationMessage = message;
        setTimeout(() =>{this.boolNotif = false}, 2400);
    }
}