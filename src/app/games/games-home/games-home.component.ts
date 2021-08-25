import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games-home',
  templateUrl: './games-home.component.html',
  styleUrls: ['./games-home.component.scss']
})
export class GamesHomeComponent implements OnInit {
  data = [
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
    },
    {
      image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
      title: 'NFS',
      desciption: 'Nintendo amiibo toys of the characters Ryu and Ken from Capcoms Street Fighter, Megaman, Olimar from Pikmin, Ness from Earthbound, and Shovel Knight.'
    },
    {
      image: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80',
      title: 'FIFA',
      desciption: 'Nintendo amiibo toys of the characters Ryu and Ken from Capcoms Street Fighter, Megaman, Olimar from Pikmin, Ness from Earthbound, and Shovel Knight.'
    },
    {
      image: 'https://images.unsplash.com/photo-1610303309510-8e603e3abcdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1053&q=80',
      title: 'Civilazation',
      desciption: 'Nintendo amiibo toys of the characters Ryu and Ken from Capcoms Street Fighter, Megaman, Olimar from Pikmin, Ness from Earthbound, and Shovel Knight.'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
