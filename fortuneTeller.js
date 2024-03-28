
const motherName = prompt("Enter your mother's first name:");
const streetName = prompt("Enter the name of the street you grew up on:");
const favColor = prompt("Enter your favorite color as a child:");
const age = Number(prompt("Enter your current age:"));
const num = Number(prompt("Enter a number between 1 and 10:"));


const yearsToMeetBestFriend = 5;
const bestFriendName = motherName + ' ' + streetName;
const yearsToMarriage = age + yearsToMeetBestFriend;
const numChildren = age % yearsToMeetBestFriend;
const yearsToDyeHair = Math.round(age / yearsToMeetBestFriend);


console.log(`
In ${yearsToMeetBestFriend} years you are going to meet your best friend named ${bestFriendName}.
You will get married in ${yearsToMarriage} years and have ${numChildren} children.
In ${yearsToDyeHair} years you are going to dye your hair ${favColor}.
`);

