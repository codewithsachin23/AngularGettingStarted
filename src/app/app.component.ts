import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Helloworld';
  imageUrl = "../assets/bridgeLablogo.avif";
  url="https://www.bridgelabz.com/";
  ngOnInit(): void{
    this.title= "Hello From BridgeLabz";
  }
  onClick(event:Event){
  console.log("Button was clickede",event)
  window.open(this.url,"_blank");
  }
}
