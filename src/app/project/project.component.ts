import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

  @Input() imgUrl:string='';
  @Input() projtitle: string ='';

  
  funContainer():void{

  }
}
