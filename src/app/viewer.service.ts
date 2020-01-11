import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
import { Observable, ObservableInput } from 'rxjs';
import { map, take, catchError } from 'rxjs/operators';

import { ITag } from './interfaces/tag';

@Injectable({
  providedIn: 'root'
})
export class ViewerService {

  
  constructor(private http:HttpClient) { 
   
  }
  
  private handleError(): any {
    alert("An error ha soccured");
  }

  public Get(tag:string):Observable<ITag[]> {
    const url = `https://api.stackexchange.com/2.2/tags/${tag}/faq?site=stackoverflow`;
    return this.http.get<ITag[]>(url).pipe(take(1), map(res => res["items"],catchError(this.handleError) ))
   }

}
