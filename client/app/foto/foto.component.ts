import { Component, Input } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'foto',
    templateUrl: './foto.component.html',
    styleUrls: ['./foto.component.css']
})
export class FotoComponent {

   _id: string;
   @Input() url: string;
   @Input() titulo: string;
   descricao: string;

}