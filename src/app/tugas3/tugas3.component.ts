import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas3',
  templateUrl: './tugas3.component.html',
  // styleUrls: ['./tugas3.component.css']
  styles:[`
        .online {
            color:  white;
        }
    `]

})
export class Tugas3Component implements OnInit {
  allowNewServer = false;
  poltek="";
  arraypoltek = [];

  constructor() { }

  ngOnInit() {
  }


  onCreationStatus() {
    if(this.allowNewServer==false){
    this.poltek='Politeknik Negri Malang';
    this.allowNewServer=true;
    }else{
      this.allowNewServer=false;
      this.poltek="";
    }
    this.arraycoba();
  }

  arraycoba(){
    this.arraypoltek.push(this.arraypoltek.length+1);
  }

  onUpdateServerName(event: Event) {
    this.poltek = (<HTMLInputElement>event.target).value;
  }

}
