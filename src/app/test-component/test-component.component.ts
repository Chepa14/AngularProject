import { Component } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent {
  message = "Hello, World!";
  fontColor = 'blue';
  sayHelloId = 1;
  canClick = false;

  sayMessage() {
    alert(this.message);
  }
}
