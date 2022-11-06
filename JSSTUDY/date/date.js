let time = new Date();
// console.log(time);

console.log(time.getFullYear()); // 2022
console.log(time.getYear()); // 122
console.log(time.getMonth()); // 10
console.log(time.getDate()); // 6
console.log(time.getHours()); // 11
console.log(time.getMinutes()); // 25
console.log(time.getSeconds()); // 31

const hour = time.getHours() > 12 ? time.getHours - 12 : time.getHours();
const ampm = time.getHours() > 12 ? '오후' : '오전';