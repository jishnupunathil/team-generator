import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  newMemb:string='';
  membList:string[]=[];
  errorMessage:string='';

  onInput(member:string){
    this.newMemb=member;
  }


  addMember(){

    if(!this.newMemb){
      this.errorMessage='Please enter a name';
      return;
    }

    this.errorMessage=''
    this.membList.push(this.newMemb);
    this.newMemb='';
  }

}
