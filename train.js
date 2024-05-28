// 2024-05-28
// MIT 14 TASK D

// Ikkita parametra ega function tuzing, va functioning
// berilgan birinchi va ikkinchi parametr qiymatlari o'zaro to'liq
// mos kelsa true qiymat qaytarsin

// Masalan: checkContent("mitgroup", "gmtiprou");
// Yuqoridagi misolda birinchi va ikkinchi parametr qiymatli bir xil
// ya'ni bir xil harflar qatnashganligi uchun true qiymat qaytaradi.

function checkContent(str1, str2) {
   let count = 0;
   for (let char of str1) {
       if (str2.includes(char)) {
           count ++;
        }
   
   }
   if (count == str1.length){
      return true;
   } 
   else{
      return false;
   }
}

// Example usage:
console.log(checkContent("mitgroup", "gmtiprou"));
console.log(checkContent("mitgroup", "gmtipro")); 
console.log(checkContent("abcdef", "ghijkl"))

