import {Component, OnInit} from '@angular/core';
import {Localizacao} from "../model/localizacao.model";
import {HttpClientService} from "../http-client.service";
import {Router} from '@angular/router';

@Component({
    selector: 'fd-historico-page',
    templateUrl: './historico-page.component.html',
    styleUrls: ['./historico-page.component.css']
})
export class HistoricoPageComponent implements OnInit {

    historico: Localizacao[];

    constructor(private router: Router, private httpService: HttpClientService) {
    }

    ngOnInit() {
        this.atualizarListaHistorico();
    }

    excluirHistorico(id): void {
        console.log('excluirHistorico');
        this.httpService
            .delete('http://localhost:3000/api/localizacao?_id=' + id)
            .subscribe((data) => {
                this.atualizarListaHistorico();
            }, (err) => {
                console.log('erro ao excluir');
            });
    }

    atualizarListaHistorico(): void {
        this.httpService
            .get('http://localhost:3000/api/localizacao')
            .subscribe((data) => this.historico = data);
    }
}
