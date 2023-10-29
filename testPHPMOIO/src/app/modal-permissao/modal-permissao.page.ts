import { ModalController, NavController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-modal-permissao',
  templateUrl: './modal-permissao.page.html',
  styleUrls: ['./modal-permissao.page.scss'],
})
export class ModalPermissaoPage implements OnInit {
  // banco de dados
  nome: any;
  email: any;
  senha: any;
  criarNew: any;
  acessPermissao: any;
  dados: any;

  public fGroupPermissao: FormGroup;

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private fBuilder: FormBuilder,
    private http: HttpClient,
    private alertCtrl: AlertController
  ) {
    this.fGroupPermissao = this.fBuilder.group({
      'nome': [null,
        Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(100),
      ])
      ],
      'emailPermissao': [null,
        Validators.compose([
          Validators.required,
          Validators.pattern(
            /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
          ),
          Validators.minLength(4),
          Validators.maxLength(100),
        ])
      ],
      'criarNew': [null],
      'acessPermissao': [null]
    })
  }

  close() {
    this.modalCtrl.dismiss();
  }

  async novaPermissao(){
    //console.log(this.fGroupPermissao.value)
    const nome = this.fGroupPermissao.value.nome;
    const emailPermissao = this.fGroupPermissao.value.emailPermissao;
    const criarNew = this.fGroupPermissao.value.criarNew;
    const acessPermissao = this.fGroupPermissao.value.acessPermissao;
    const url = `http://localhost/classes/criarNovaPermissao.php?nome=${nome}&emailPermissao=${emailPermissao}&criarNew=${criarNew}&acessPermissao=${acessPermissao}`;
    const alertcadastrado = await this.alertCtrl.create({
      header: "Cadastrado com Sucesso!",
      buttons: [{
        text:'Continuar'
        },{
        text:'Cancelar',
        handler: () => {
          this.modalCtrl.dismiss();
        }}]
    });
    const alertCancel = await this.alertCtrl.create({
      header: "Usuário já cadastrado no Sistema!",
      message: "Digite novamente os dados!",
      buttons: [{
        text:'OK',
       }]
    });

    this.http.get(url).subscribe(data => {


      this.dados = data;
        if (this.dados.status == "cadastrado"){
        //aqui deu boa
        // console.log('ok')
        alertcadastrado.present();
      } else {
        //aqui deu ruim
        // console.log('recusado')
        alertCancel.present();
      }
    }, error => {
      // Lide com erros aqui
      console.error(error);
    });


  }



  ngOnInit() {
  }

}
