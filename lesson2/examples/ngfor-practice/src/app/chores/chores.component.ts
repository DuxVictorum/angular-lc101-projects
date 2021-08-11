import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   choreList = [['Empty dishwasher', 'Complete LaunchCode prep work'], ['Buy groceries', 'Change sheets'], ['Eat more pizza', 'Finish book', 'Rinse shirts']];
   todoTitles = ["Yesterday's Chores", "Today's Chores", "Tomorrow's Chores"];

   constructor() { }

   ngOnInit() {
   }

}

// I want to only use one array in choreList each time I loop through
