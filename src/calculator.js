/**
 * کلاس ماشین حساب ساده برای انجام عملیات اصلی ریاضی
 */
class Calculator {
    /**
     * جمع کردن دو عدد
     * @param {number} a - عدد اول
     * @param {number} b - عدد دوم
     * @returns {number} حاصل جمع
     */
    add(a, b) {
      return a + b;
    }
  
    /**
     * تفریق دو عدد
     * @param {number} a - عدد اول
     * @param {number} b - عدد دوم
     * @returns {number} حاصل تفریق
     */
    subtract(a, b) {
      return a - b;
    }
  
    /**
     * ضرب دو عدد
     * @param {number} a - عدد اول
     * @param {number} b - عدد دوم
     * @returns {number} حاصل ضرب
     */
    multiply(a, b) {
      return a * b;
    }
  
    /**
     * تقسیم دو عدد
     * @param {number} a - عدد اول
     * @param {number} b - عدد دوم
     * @returns {number} حاصل تقسیم
     * @throws {Error} اگر مقسوم‌علیه صفر باشد خطا رخ می‌دهد
     */
    divide(a, b) {
      if (b === 0) {
        throw new Error('تقسیم بر صفر غیرممکن است');
      }
      return a / b;
    }
  
    /**
     * محاسبه توان
     * @param {number} base - پایه
     * @param {number} exponent - توان
     * @returns {number} نتیجه
     */
    power(base, exponent) {
      return Math.pow(base, exponent);
    }
  
    /**
     * محاسبه جذر
     * @param {number} num - عدد
     * @returns {number} جذر عدد
     */
    sqrt(num) {
      if (num < 0) {
        throw new Error('جذر اعداد منفی غیرممکن است');
      }
      return Math.sqrt(num);
    }
  }
  
  // اگر از محیط Node.js استفاده می‌شود
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Calculator;
  }
  
  // اگر از محیط مرورگر استفاده می‌شود
  if (typeof window !== 'undefined') {
    window.SimpleCalculator = Calculator;
  }
  