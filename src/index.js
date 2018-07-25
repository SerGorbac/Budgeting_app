document.getElementById("sbmt").addEventListener("click", function (selm) {
  selm.preventDefault();
  const selectedMonth = document.querySelector("#monthslist").value;
  console.log(selectedMonth)
})
// //months = [
//   January = {
//     elc: electricity,
//     wtr: water,
//     gs: gas,
//     fd: food,
//     intrnt: internet
//   },
//   February = {
//     elc: electricity,
//     wtr: water,
//     gs: gas,
//     fd: food,
//     intrnt: internet
//   },
//   March = {
//     elc: electricity,
//     wtr: water,
//     gs: gas,
//     fd: food,
//     intrnt: internet
//   },
//   April = {
//     elc: electricity,
//     wtr: water,
//     gs: gas,
//     fd: food,
//     intrnt: internet
//   },
//   May = {
//     elc: electricity,
//     wtr: water,
//     gs: gas,
//     fd: food,
//     intrnt: internet
//   },
//   June = {
//     elc: electricity,
//     wtr: water,
//     gs: gas,
//     fd: food,
//     intrnt: internet
//   },
//   Jule = {
//     elc: electricity,
//     wtr: water,
//     gs: gas,
//     fd: food,
//     intrnt: internet
//   },
//   August = {
//     elc: electricity,
//     wtr: water,
//     gs: gas,
//     fd: food,
//     intrnt: internet
//   },

//   September = {
//     elc: electricity,
//     wtr: water,
//     gs: gas,
//     fd: food,
//     intrnt: internet
//   },
//   October = {
//     elc: electricity,
//     wtr: water,
//     gs: gas,
//     fd: food,
//     intrnt: internet
//   },
//   November = {
//     elc: electricity,
//     wtr: water,
//     gs: gas,
//     fd: food,
//     intrnt: internet
//   },
//   December = {
//     elc: electricity,
//     wtr: water,
//     gs: gas,
//     fd: food,
//     intrnt: internet
//   }
// ];