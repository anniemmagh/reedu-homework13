// 1)setInterval მეთოდით გავაკეთოთ ისეთი ფუნქცია რომ მაგალითად რაიმე ცვლადი მქონდეს
//  საწყისად number 10 და როცა setInterval მეთოდით ჩამოვა 0-მდე 
// უკან  კონსოლში დამიბეჭდოს "happy new year"
//  და არ დაგავიწყდეთ რომ ამის შემდეგ ფუნქცია უნდა გაჩერდეს

// function newYear(start) {
//   let num = start;
//   const interval = setInterval(() => {
//     console.log(num);
//     if (num === 0) {
//       console.log("happy new year 🥳🥳");
//       clearInterval(interval);
//     }
//     num--;
//   }, 500);
// }
// newYear(10);

// 2)დავწეროთ ფუნქცია რომელსაც გადეცემა რაიმე პარამეტრი და არგუმენტად მიიღებს ისეთ რიცხვებს რომლის დახმარებითაც
//  უნდა გამოვითვალო მაგალითად რამდენი წელი გვაკლდება თითოეულს პენსიამდე და ეს ყველაფერი უნდა დავწეროთ ამ ფუნქციაში.

// function calculator(myAge, retirementAge) {
//     const year = retirementAge - myAge;
//     if (year > 0) {
//       console.log(`You have a ${year} years  until retirement ☠️`);
//     } 
//   }
//   calculator(21, 60);

