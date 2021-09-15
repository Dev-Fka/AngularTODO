import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todowithangular';
  value="";
  DataSource:string[] = [];

  addWork(){
    this.DataSource.push(this.value);
    console.log(this.DataSource);
    this.value="";    
  }
  removeWork(res:any){
    this.DataSource.splice(res,1)
  }
}
