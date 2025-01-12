import { Component } from '@angular/core';
import { Iproject } from '../models/iproject';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-portfolio',
  imports: [ProjectComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
projects :Iproject[] =[{
  id: 1,
  imgUrl: '/poert1.png',
  projtitle: 'project1'
}, 
{
  id: 2,
  imgUrl: '/port2.png',
  projtitle: 'project2'
},
{
  id: 3,
  imgUrl: '/port3.png',
  projtitle: 'project3'
},
{
  id: 4,
  imgUrl: '/poert1.png',
  projtitle: 'project4'
},
{
  id: 5,
  imgUrl: '/port2.png',
  projtitle: 'project5'
},
{
  id: 6,
  imgUrl: '/port3.png',
  projtitle: 'project6'
}]

isClicked: boolean = false;
imgPath:string = '';
imgTitle: string ='';

showProject(image: string, alt: string):void{
  this.isClicked = true;
  this.imgPath = image;
  this.imgTitle = alt;
}


closeProjuct():void{
  this.isClicked = false;
}
}