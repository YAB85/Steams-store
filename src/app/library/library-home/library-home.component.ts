import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-library-home',
  templateUrl: './library-home.component.html',
  styleUrls: ['./library-home.component.scss']
})
export class LibraryHomeComponent implements OnInit {
  item = [
    {
      image: 'https://images.unsplash.com/photo-1566576912317-9f38f640f471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      title: 'Super Mario',
      desciption: 'A Super Mario statue, given out by Nintendo on the Gamescom. You can see him in his classic jumping pose,'
    },
    {
      image: 'https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      title: 'Street fighters',
      desciption: 'Nintendo amiibo toys of the characters Ryu and Ken from Capcoms Street Fighter, Megaman, Olimar from Pikmin, Ness from Earthbound, and Shovel Knight.'
    },
    {
      image: 'https://images.unsplash.com/photo-1591123720164-de1348028a82?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80',
      title: 'Doom',
      desciption: 'Nintendo amiibo toys of the characters Ryu and Ken from Capcoms Street Fighter, Megaman, Olimar from Pikmin, Ness from Earthbound, and Shovel Knight.'
    }];
  
  constructor() { }

  ngOnInit(): void {
  }

}
