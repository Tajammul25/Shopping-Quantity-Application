import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shopping';
 

  constructor(private router: Router) {
    
  }

  toRedirect() {
    this.router.navigate(['/product']); 
  }


}


