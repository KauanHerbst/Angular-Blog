import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from "../../data/dataFake"


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  contentPhoto:string = ''
  @Input()
  contentTitle: string = ''
  @Input()
  contentPage: string = ''
  @Input()
  contentDescription: string = ''
 private id:string | null = '0'

  constructor(private route:ActivatedRoute){
    
  }
  ngOnInit(): void {
      this.route.paramMap.subscribe( value => this.id = value.get("id"))
  
      this.setValuesToComponent(this.id)
  }

  
  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => {
      const id = article.id;
      return id !== null ? id : '';
    })[3];
    
    this.contentTitle = result.title
    this.contentPhoto = result.photo
    this.contentPage = result.content
    this.contentDescription = result.description
  }

}
