import {Component} from '@angular/core';

@Component({selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']

})

export class ServerComponent
{
  serverStatus='';
  serverCount=['A','B'];

  constructor()
  {
    this.serverCount.push(this.serverStatus);
    this.serverStatus=Math.random() >0.5 ?'Online':'Offline';
  }


  getServerStatusMonitoring()
  {
  return this.serverStatus==='Offline'? 'red' :'green';
  }
}