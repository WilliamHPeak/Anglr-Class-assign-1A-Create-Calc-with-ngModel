import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  date: Date;  // date objectfor piping

  constructor() {
    this.date = new Date();     /* create an instance of date, when the AppComponent object
                                   is being instantiated.
                                */
  }
  /* Note: a and be are operands in this calculator program
       - iniitialized to no particular values
       - the operands, when being used in divison are as follows:
           a - will always be the dividen
           b - will always the the division
  */

  a = 500;
  b = 5;
  result = 0;
  operator = '+';  //default
  divideByZeroErrMsg = ''; //default

  resetOperator()
  {
    this.operator="";
  }
  resetDividend()
  {
    this.divideByZeroErrMsg="";
  }

  calculate(newOperator) {

    document.getElementById('operatorNg').className="Center";

        switch (newOperator) {
          case '+':
            this.result = this.a + this.b;
            break;
          case '-':
            this.result = this.a - this.b;
            break;
          case '*':
            this.result = this.a * this.b;
            break;
          case '/':
            if(this.b.valueOf() <= 0)
            {
              this.divideByZeroErrMsg = 'Dividend must be > 0 ';
              document.getElementById('divideByZero').className="CenterError";
              break;
            }
            else{
              document.getElementById('divideByZero').className="HideControl";
              this.result = this.a / this.b;
              break;
            }
          default:
          this.operator="Sorry, only +,-,*,/ operators allowed";
          document.getElementById('operatorNg').className="CenterError";

        }
    }
}

