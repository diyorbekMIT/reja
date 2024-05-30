//E-TASK: 

//Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
//MASALAN: getReverse("hello") return qilsin "olleh"

function getReverse(string) {
   reverse_text = [];
   for (let char of string){
      reverse_text.push(char)
   }
   return reverse_text.reverse();
}

console.log(getReverse("hello"));