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
  username:string="";
  nameError:string="";

  ngOnInit(): void{
    this.title= " From BridgeLabz";
  }
  onClick(event:Event){
  console.log("Button was clickede",event)
  window.open(this.url,"_blank");
  }

  onInput(){
    const nameRegex = /^[A-Z][a-zA-Z\s]{2,}$/;
  this.username = this.username.trim(); 

    if (nameRegex.test(this.username)) {
      this.nameError = "";
    } else {
      this.nameError = "Name is incorrect";
    }

  }
}
