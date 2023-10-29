import { Component, OnInit } from '@angular/core';
import { ModalLocalPage } from '../modal-local/modal-local.page';
import { ModalController, NavController, AlertController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-local',
  templateUrl: './local.page.html',
  styleUrls: ['./local.page.scss'],
})
export class LocalPage implements OnInit {

  linhas: any;

  constructor(
    private modalCtrl: ModalController,
    private navCtrl: NavController,
    private http: HttpClient,
    private alertCtrl: AlertController
  ) { }

  async showmodalLocal(){
    const modal = await this.modalCtrl.create({
      component: ModalLocalPage
    })

    modal.onDidDismiss().then((data) => {
      this.montaGrid();
    });

    modal.present();
  }

  againpage(){
    this.navCtrl.navigateForward('register')
  }

  ngOnInit() {
  }

  montaGrid(){

    const url = `http://localhost/classes/montaGridLocal.php`;

    this.http.get(url).subscribe(data => {
      // debugger;
      this.linhas = data;

    }, error => {
      // Lide com erros aqui
      console.error(error);
    });
  }

  ionViewDidEnter(){
    this.montaGrid()
  }

  async excluirLocal(codigo: any, nome: any){
    const alertcadastrado = await this.alertCtrl.create({
      header: "Deseja excluir o Local?",
      message:`Você gostaria de excluir o Local, ${nome}? Após a confirmação, o endereço não poderá ser mais uitlizado em cadastro.`,
      buttons: [
        {
        text:'Sim',
        handler: () => {
          this.exclusaoLocal(codigo);
          this.modalCtrl.dismiss();
        }
        },
        {
        text:'Não',
        handler: () => {
          this.modalCtrl.dismiss();
        }
        }
      ]
    })

    await alertcadastrado.present();
  }

  exclusaoLocal($codigo: any){
    const url = `http://localhost/classes/excluirLocal.php?codigo=${$codigo}`;

    this.http.get(url).subscribe(data => {
      this.montaGrid()
    }, error => {
      console.error(error);
    });
  }
}
