// 2024-05-25
// MIT 14 TASK-C

// Shop nomli class tuzing, va bu class 3 xill parametr qabul qilsin.
// Hamda classning quyidagdek 3'ta metodi bo'lsin:

// 1) qoldiq
// 2) sotish
// 3) qabul

// Har bir metod ishga tushgan vaqtda log qilinsin

// MASALAN:
// const shop = new Shop(4, 5, 2)

// shop.qoldiq();
// natija qaytishi kerak: Hozir 20: 40'da 4'ta non, 5'ta lag'mon va 2'ta cola mavjud

// shop.sotish("non", 3); & shop.qabul("cola", 4); & shop.qoldiq();
// Natija qaytishi kerak: Hozir 20:50da 1ta non, 5ta lag'mon va 6ta cola mavjud!

const moment = require("moment");
class Shop {
   constructor(non, lagmon, cola) {
      this.non = non;
      this.lagmon = lagmon;
      this.cola = cola;
   }

   qoldiq() {
      console.log(`Hozir ${moment().format("HH-mm")} da, ${this.non} ta non, ${this.lagmon} ta lagmon va ${this.cola} ta cola mavjud`);
   }

   sotish (product, son) {
      if (product === "non") {
         this.non -= son;
      } else if (product === "lagmon") {
         this.lagmon -= son;
      } else if (product === "cola") {
         this.cola -= this.cola;
      }
   }

   qabul (product, son) {
      if (product === "non") {
         this.non += son;
      } else if (product === "lagmon") {
         this.lagmon += son;
      } else if (product === "cola") {
         this.cola += son;
      }
   }
}

const myShop = new Shop(10, 20, 30);
myShop.qoldiq();
myShop.sotish("non", 3);
myShop.qoldiq();
myShop.qabul("cola", 5);
myShop.qoldiq();