'use strict'
// Establish A week
const aWeekDate = new Date("Dec 31, 2018 00:00:00");
const aWeekCounter = aWeekDate.getTime();

// Find number of milliseconds in a day
const dayMilliseconds = 24 * 60 * 60* 1000;

// Find current week.
let today = new Date();
let todayMilSec = today.getTime();
let todayDif = todayMilSec - aWeekCounter;
let todayWeeks = todayDif / dayMilliseconds / 7;

function findCurrentWeek() {
	// Establish that will change.
	let initialText = document.getElementById("result");

	// Find day of the week to determine if it is a weekend
	let dow = today.getDay();

	// Subtract 3 from the number of weeks until the remainder <3
	while (todayWeeks > 3) {
		todayWeeks -= 3;
	}

	// Use the remainder to determine the week
	// If the day is Sat, or Sun use current tense
	if (todayWeeks < 1) {
			if (dow === 0 || dow === 6) {
				initialText.innerHTML =
				("It is currently an A Weekend.")
			} else {
				initialText.innerHTML=
				("We're currently headed into A Weekend.")
			}
	} else if (todayWeeks < 2) {
			if (dow === 0 || dow === 6) {
				initialText.innerHTML =
				("It is currently a B Weekend.")
			} else {
				initialText.innerHTML=
				("We're currently headed into B Weekend.")
			}
	} else if (todayWeeks < 3) {
			if (dow === 0 || dow === 6) {
				initialText.innerHTML =
				("It is currently a C Weekend.")
			} else {
				initialText.innerHTML=
				("We're currently headed into C Weekend.")
			}
	} 
}	
findCurrentWeek();

// Find user's week
function whatWeek() {
	// Grab user date input
	let selMonth = document.getElementById("monthSelect");
	let month = selMonth.value;
	let selDay = document.getElementById("daySelect");
	let day = selDay.value;
	let selYear = document.getElementById("yearSelect");
	let year = selYear.value;
	let wholeDate = (month + " " + day + ", " + year);
	let formatDate = new Date(wholeDate);
	let inputDateCounter = formatDate.getTime();

	// Find the difference in milliseconds
	let difference = inputDateCounter - aWeekCounter;

	// Find difference in days then weeks
	let numberOfWeeks = difference / dayMilliseconds / 7;

	// Find input day of the week
	let dow = formatDate.getDay();

	// Establish that will change.
	let initialText = document.getElementById("result");

	// Divide weeks 3 until remainder <3
	function findTheRemainder() {
		while (numberOfWeeks > 3) {
			numberOfWeeks -= 3;
		}

		// Using the remainder to determine the week
		// If it's a Sat, or Sun different tense
		if (numberOfWeeks < 1) {
			if (dow === 0 || dow === 6) {
				initialText.innerHTML = 
				("It will be an A weekend.")
			} else {
				initialText.innerHTML =
				("We will be headed into an A weekend.")
			}
		} else if (numberOfWeeks < 2) {
			if (dow === 0 || dow === 6) {
				initialText.innerHTML = 
				("It will be a B weekend.")
			} else {
				initialText.innerHTML =
				("We will be headed into a B weekend.")
			}
		} else if (numberOfWeeks < 3) {
			if (dow === 0 || dow === 6) {
				initialText.innerHTML =
				("It will be a C weekend.")
			} else {
				initialText.innerHTML =
				("We will be headed into a C weekend.")
			}
		}
	}
// Respond to past date inputs
if (inputDateCounter < todayMilSec) {
	initialText.innerHTML = ("Never look back!");
} else {
	findTheRemainder();
}
}