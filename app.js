// FOR
// N{1}
// let k = +prompt("Iltimos, k sonini kiriting:");
// let n = +prompt("Iltimos, n sonini kiriting:");

// // For tsikli orqali k sonini n marta chiqaramiz
// for (let i = 0; i < n; i++) {
//     console.log(k);
// }

// N{2}
// const a = +prompt("Marhamat qilib birinchi qiymatni kiriting (a):");
// const b = +prompt("Marhamat qilib ikkinchi qiymatni kiriting (b):");

// // Hisoblovchi "Counter" qo'shamiz:
// let count = 0;

// // Agar a qiymat b dan kichik bo'lsa:
// if (a < b) {
//   for (let i = a; i <= b; i++) {
//     console.log(i);
//     count++;
//   }
// } else {
//   console.error("Xato: 'a' 'b' dan kichik bo'lishi kerak.");
// }

// console.log("Chiqarilgan raqamlar soni:", count);

// N{3}
// const a = +prompt("Marhamat qilib birinchi qiymatni kiriting (a):");
// const b = +prompt("Marhamat qilib ikkinchi qiymatni kiriting (b):");

// // Hisoblovchi "Counter" qo'shamiz:
// let counter = 0;

// // Agar a qiymat b dan kichik bo'lsa:
// if (a < b) {
//   for (let i = b-1; i > a; i--) {
//     console.log(i);
//     counter++;
//   }
// } else {
//   console.error("Xato: 'a' 'b' dan kichik bo'lishi kerak.");
// }

// console.log("Chiqarilgan raqamlar soni:", counter);

// N{4}

// // 1 kg konfetning narxini foydalanuvchidan olish
// const kgNarx = parseFloat(prompt("1 kg konfetning narxini kiriting:"));

// // 10 kg konfetning umumiy narxini hisoblash uchun umumiyNarx o'zgaruvchisini e'lon qilamiz
// let umumiyNarx = 0;

// // 1 dan 10 kg gacha bo'lgan har bir konfet uchun narxni hisoblash uchun for tsikli
// for (let kg = 1; kg <= 10; kg++) {
//   umumiyNarx = umumiyNarx + kgNarx;
// }

// // 10 kg konfetning umumiy narxini ekranga chiqaramiz
// console.log("10 kg konfetning umumiy narxi:", umumiyNarx);

// N{5}

// // Bir kilogram konfet narxi berilgan (haqiqiy son)
// const pricePerKg = 0.1; // Narxi istalgan haqiqiy son bo'lishi mumkin

// // Umumiy narxni saqlash uchun o'zgaruvchi
// let totalPrice = 0;

// // 0.1 kg dan 1 kg gacha bo'lgan har konfet miqdorini hisoblash
// for (let weight = 0.1; weight <= 1; weight += 0.1) {
//     // Konfet narxini hisoblash va umumiy narxga qo'shish
//     totalPrice += pricePerKg;
// }

// // Har bir konfet miqdori uchun umumiy narxni chiqarish
// console.log("0.1kg dan 1kg gacha konfet narxi:");
// for (let weight = 0.1; weight <= 1; weight += 0.1) {
//     console.log(weight.toFixed(1) + "kg: $" + (pricePerKg * weight).toFixed(2));
// }

// N{6}

// // Bir kilogram konfet narxi berilgan (haqiqiy son)
// const pricePerKg = 1.2; 
// // Narxi istalgan haqiqiy son bo'lishi mumkin

// // Umumiy narx
// let totalPrice = 0;

// // konfet miqdorini hisoblash
// for (let weight = 1.2; weight <= 2; weight += 0.2) {
//     // Konfet narxini hisoblash va umumiy narxga qo'shish
//     totalPrice += pricePerKg;
// }

// // Natijani chiqarish
// console.log("1.2kg dan 2kg gacha konfet narxi: $" + totalPrice.toFixed(2));

// N{7}

// a va b butun sonlari berilgan (a < b)
// const a = +prompt("Marhamat qilib birinchi qiymatni kiriting (a):");
// const b = +prompt("Marhamat qilib ikkinchi qiymatni kiriting (b):");

// // Barcha butun sonlar yig'indisini saqlash uchun o'zgaruvchi
// let jamiQiymat = 0;

// // a dan b gacha bo'lgan barcha butun sonlarni qo'shish
// for (let i = a; i <= b; i++) {
//   jamiQiymat = jamiQiymat + i;
//   console.log(i);
// }

// // Natijani chiqarish
// console.log("a dan b gacha bo'lgan barcha butun sonlar yig'indisi: " + jamiQiymat);

// N{8}

// // a va b butun sonlari berilgan (a < b)
// const a = +prompt("Marhamat qilib birinchi qiymatni kiriting (a):");
// const b = +prompt("Marhamat qilib ikkinchi qiymatni kiriting (b):");

// // Barcha butun sonlar ko'paytmasini saqlash uchun o'zgaruvchi
// let jamiQiymat = 1;

// // a dan b gacha bo'lgan barcha butun sonlarni qo'shish
// for (let i = a; i <= b; i++) {
//   jamiQiymat = jamiQiymat * i;
//   console.log(i);
// }

// // Natijani chiqarish
// console.log("a dan b gacha bo'lgan barcha butun sonlar ko'paytmasi: " + jamiQiymat);

// N{9}

// a va b butun sonlari berilgan (a < b)
// const a = +prompt("Marhamat qilib birinchi qiymatni kiriting (a):");
// const b = +prompt("Marhamat qilib ikkinchi qiymatni kiriting (b):");


// // Barcha butun sonlar kvadratlarining yig'indisini saqlash uchun o'zgaruvchi
// let jamQiyYig = 0;

// // a dan b gacha bo'lgan barcha butun sonlarning kvadratlarini qo'shish
// for (let i = a; i <= b; i++) {
//     jamQiyYig =jamQiyYig + i * i;
//     console.log(i);
// }

// // Natijani chiqarish
// console.log("a dan b gacha bo'lgan barcha butun sonlar kvadratlarining yig'indisi: " + jamQiyYig);

// N{10}

// n butun soni berilgan (n > 0)
// const n = +prompt("Marhamat qilib qiymatni kiriting (n):");

// // Yig'indi uchun o'zgaruvchi
// let yig = 0;

// // for tsikli orqali yig'indini hisoblash
// for (let i = 1; i <= n; i++) {
//     yig = yig + 1 / i;
// }

// // Natijani chiqarish
// console.log("Yig'indisi: " + yig);


