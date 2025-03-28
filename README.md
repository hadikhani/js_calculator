# JS Calculator

یک پکیج ماشین حساب ساده جاوا اسکریپتی که در فریمورک‌های مختلف قابل استفاده است.
 
 ## نصب
 
 ```bash
 npm install github:yourusername/js_calculator
 ```
 
 ## استفاده در JavaScript
 
 ```javascript
 const Calculator = require('js_calculator');
 
 const calc = new Calculator();
 console.log(calc.add(5, 3)); // 8
 ```
 
 ## استفاده در React
 
 
 ```jsx
 import Calculator from 'js_calculator';
 
 function CalculatorComponent() {
   const calc = new Calculator();
   const result = calc.multiply(6, 7);
   
   return (
     <div>
       <p>نتیجه ضرب: {result}</p>
     </div>
   );
 }
 ```
 
 ## استفاده در Vue.js
 
 ```vue
 <template>
   <div>
     <p>نتیجه تقسیم: {{ divideResult }}</p>
   </div>
 </template>
 
 <script>
 import Calculator from 'simple-calculator';
 
 export default {
   data() {
     return {
       calculator: new Calculator(),
       divideResult: 0
     };
   },
   created() {
     this.divideResult = this.calculator.divide(10, 2);
   }
 };
 </script>
 ```