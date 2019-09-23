import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  str: string = 'abcdefghij';
  collection: string[] = ['a', 'b', 'c', 'd'];
  paragraph: string = 'abcd efgh hijk';
  str2: string = 'Abcd Efgh';

  a: number = 0.259;
  b: number = 1.3495;


  object: {[key: number]: string} = {2: 'foo', 1: 'bar'};

  jsonObject: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};

  today: number = Date.now();

  pi: number = 3.14;
  e: number = 2.718281828459045;
}
