import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  newMemb:string='';
  membList:string[]=[];

  onInput(member:string){
    this.newMemb=member;
    console.log(this.newMemb);
  }


  addMember(){
    this.membList.push(this.newMemb);
    console.log(this.membList);
    this.newMemb='';
  }

}
