import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Helloworld';
  imageUrl = "../assets/bridgeLablogo.avif";
  url="https://www.bridgelabz.com/";
  username:string='';

  ngOnInit(): void{
    this.title= "Hello From BridgeLabz";
  }
  onClick(event:Event){
  console.log("Button was clickede",event)
  window.open(this.url,"_blank");
  }
}
