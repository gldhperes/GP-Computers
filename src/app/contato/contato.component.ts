import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NotificacaoService } from '../notificacao.service';




@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})

export class ContatoComponent {

  formContato = this.fb.group({
    nome: ["", [
      Validators.minLength(3),
      Validators.required
    ]],

    assunto: ["", [
      Validators.required
    ]],

    telefone: ["", [
      Validators.minLength(11),
      Validators.maxLength(11),
      Validators.required
    ]],

    email: ["", [
      Validators.email,
      Validators.required
    ]],

    mensagem: ["", [
      Validators.required
    ]],
  })

  constructor(
    private fb: FormBuilder,
    private notificacao: NotificacaoService
  ) { }


  enviarFormulario() {
    this.notificacao.notificar('Formulario enviado com sucesso.')
    this.formContato.reset();
  }

}
