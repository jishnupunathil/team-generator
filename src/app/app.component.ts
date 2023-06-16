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
  numberOfTeams: '' | number = '';
  teams:string[][]=[];

  onInput(member:string){
    this.newMemb=member;
  }

  onTeamInput(value:string){
    this.numberOfTeams=Number(value);
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

  generateTeams(){
    
    if(!this.numberOfTeams || this.numberOfTeams <= 0){
      this.errorMessage="invalid number of teams"
      return
  }
  this.errorMessage=''
  const allMembers=[...this.membList]

  while(allMembers.length>0){
    for(let i=0;i<this.numberOfTeams;i++){
      const randomIndex=Math.floor(Math.random()*allMembers.length)
  
      const member=allMembers.splice(randomIndex,1)[0]
      if(!member) break
      if(this.teams[i]){
        this.teams[i].push(member)
      }else{
        this.teams[i]=[member]
      }
  
    }
  }

this.membList=[]
this.numberOfTeams=''
  
}

}
