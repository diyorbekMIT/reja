//A TASK 
//Shunday 2 parametrli function tuzing, 
//hamda birinchi parametrdagi letterni 
//ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
//MASALAN countLetter("e", "engineer") 
//3ni return qiladi.


function letterCount (letter, word) {
    if (typeof letter === 'string' && typeof word === 'string'){
        let count = 0;
        for (let i = 0; i < word.length; i++) {
            if (word[i] == letter){
                count++;
            };
            
        }
        return count;
    } else {
        return "Bunday harf ishtrok etmagan yoki argumentlar notogri kiritilgan";
    };
};

console.log(letterCount('e', 'engineer'));

//console.log("Jack Ma maslahatlari");
//const list = [
//    "Yaxshi talaba boling",
//    "togri boshliq tanlang",
//    "uzingiznga ishlashingizni boshlang",
//    "siz kuchli bolgan narsalarni qiling",
//    "yoshlarga investitsiya qiling",
//    "endi dam oling, foydasi yoq endi"
//];

//Callback 
//function maslahat_bering (a, callback) {
//    if (typeof a !== "number") callback ("Insert a number", null);
//    else if (a <= 20) callback (null, list[0]);
//    else if (a < 20 && a <= 30) callback (null, list[1]);
//    else if (a < 20 && a <= 40) callback (null, list[2]);
//    else if (a < 20 && a <= 50) callback (null, list[3]);
//    else if (a < 20 && a <= 60) callback (null, list[4]);
//    else {
//        setInterval(function () {
//            callback(null, list[5]);
//        },1000);
//    }
//}

//console.log("passed here 0");
//maslahat_bering(70, (err, data) => {
//    if (err) console.oog ("Error:", err);
//    else {
//        console.log(data);
//    }
//});
//console.log("passed here1 ");

//ASYNC function
//function maslahat_bering (a, callback) {
//   if (typeof a !== "number") callback ("Insert a number", null);
 //   else if (a <= 20) return list[0];
//    else if (a > 20 && a <= 30) return list[1];
//    else if (a > 20 && a <= 40) return list[2];
//    else if (a > 20 && a <= 50) return list[3];
//    else if (a > 20 && a <= 60) return list[4];
//    else {
//       return new Promise ((resolve, reject) => {
//           setTimeout (() => {
//                resolve(list[5]);
//            }, 5000);
//        });
//    }//
//}

//then/catch
//console.log("passed here");
//maslahat_bering(65)
//   .then((data) => {
//       console.log("javob:", data);
//   })
//   .catch(err) => {
//       console.log("Error", err);
//   });
//   console.log("passed here 1");

   //asn/await 
//async function run() {
//  let javob = await maslahat_bering(25);
//  console.log(javob);
//  javob = await maslahat_bering(70);
//  console.log(javob);
//  javob = await maslahat_bering(41);
//  console.log(javob);
//}

//run();
