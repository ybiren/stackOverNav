import { Component, OnInit } from '@angular/core';
import { ViewerService } from '../viewer.service';
import { Observable } from 'rxjs';
import { ITag } from '../interfaces/tag';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {

  public obs$: Observable<ITag[]>; 
  private selItem: ITag;

  constructor(private viewerSvc: ViewerService) { }

  ngOnInit() {
  }

  doSearch(srchVal: string) {
    this.selItem = null;
    if(srchVal) {
      this.obs$ = this.viewerSvc.Get(srchVal);
    }
  }

  setSelected(item) {
    this.selItem = item;
  }

}
