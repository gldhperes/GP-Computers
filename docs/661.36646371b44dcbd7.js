"use strict";(self.webpackChunkproway_computer=self.webpackChunkproway_computer||[]).push([[661],{661:(q,p,i)=>{i.r(p),i.d(p,{ProdutosModule:()=>x});var u=i(6814),a=i(33),o=i(9468);const g=[{id:1,descricao:"Mouse gamer",preco:439,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/mouse-3.jpg",quantidadeEstoque:10},{id:2,descricao:"Monitor muito bom",preco:1200.5,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/monitor-1.jpg",quantidadeEstoque:10},{id:3,descricao:"Teclado excelente",preco:749.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/teclado-1.jpg",quantidadeEstoque:10},{id:4,descricao:"Fone para quem joga FPS",preco:599.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/fone-de-ouvido-2.jpg",quantidadeEstoque:10},{id:5,descricao:"Fone de ouvido",preco:299.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/fone-de-ouvido-1.jpg",quantidadeEstoque:10},{id:6,descricao:"Fone de ouvido bom",preco:399.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/fone-de-ouvido-3.jpg",quantidadeEstoque:10},{id:7,descricao:"HD 1TB",preco:499.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/hd.jpg",quantidadeEstoque:10},{id:8,descricao:"Combo de placa de v\xeddeos",preco:18449.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/placa-video.jpg",quantidadeEstoque:10},{id:9,descricao:"Processador Ryzen",preco:1e3,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/processador.jpg",quantidadeEstoque:10},{id:10,descricao:"Notebook bom",preco:2500,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/laptop-1.jpg",quantidadeEstoque:10},{id:11,descricao:"Notebook excelente",preco:4500,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/laptop-2.jpg",quantidadeEstoque:10},{id:12,descricao:"Mouse barato",preco:20,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/mouse-1.png",quantidadeEstoque:10},{id:13,descricao:"Mouse \xf3timo",preco:200,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/mouse-2.jpg",quantidadeEstoque:10},{id:14,descricao:"Mouse pequeno",preco:50,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/mouse-4.jpg",quantidadeEstoque:10},{id:15,descricao:"Teclado bom",preco:159.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/teclado-2.jpg",quantidadeEstoque:10}];let l=(()=>{class e{constructor(){this.produtos=g}getAll(){return this.produtos}getOne(t){return this.produtos.find(r=>r.id==t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function m(e,n){if(1&e&&(o.TgZ(0,"div",2)(1,"a",3),o._UZ(2,"img",4),o.TgZ(3,"h2",5),o._uU(4),o.qZA(),o.TgZ(5,"p",6),o._uU(6),o.ALo(7,"currency"),o.qZA(),o.TgZ(8,"p",7),o._uU(9),o.qZA(),o.TgZ(10,"button",8),o._uU(11,"Comprar"),o.qZA()()()),2&e){const t=n.$implicit;o.xp6(1),o.MGl("routerLink","/produtos/",t.id,""),o.xp6(1),o.Q6J("src",t.imagem,o.LSH),o.xp6(2),o.hij(" ",t.descricao," "),o.xp6(2),o.hij(" ",o.xi3(7,5,t.preco,"BRL")," "),o.xp6(3),o.hij(" ",t.descricaoPreco," ")}}let _=(()=>{class e{constructor(t,r){this.produtosService=t,this.route=r}ngOnInit(){const t=this.produtosService.getAll();this.route.queryParamMap.subscribe(r=>{const s=r.get("descricao")?.toLocaleLowerCase();this.produtos=s?t.filter(d=>d.descricao.toLowerCase().includes(s)):t})}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(l),o.Y36(a.gz))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-produtos"]],decls:2,vars:1,consts:[[1,"product-list","flex"],["class","product-list__card",4,"ngFor","ngForOf"],[1,"product-list__card"],[1,"product-list__link","flex",3,"routerLink"],[3,"src"],[1,"product-item__name"],[1,"product-item__price"],[1,"product-item__price-description"],["type","button",1,"product-item__buy-button"]],template:function(t,r){1&t&&(o.TgZ(0,"section",0),o.YNc(1,m,12,8,"div",1),o.qZA()),2&t&&(o.xp6(1),o.Q6J("ngForOf",r.produtos))},dependencies:[u.sg,a.rH,u.H9],styles:[".product-list[_ngcontent-%COMP%]{width:100%;padding:60px 40px;justify-content:flex-start;gap:40px}.product-list__card[_ngcontent-%COMP%]{width:300px;padding:10px;border-radius:4px;flex:0 1 270px;height:500px;background-color:#fff;box-shadow:#63636333 0 2px 8px}.product-list__card[_ngcontent-%COMP%]:hover{outline:1px solid var(--blue);transform:scale(1.1);cursor:pointer}.product-list__link[_ngcontent-%COMP%]{flex-flow:column;gap:10px;text-align:center;text-decoration:none}.product-list__card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:250px;width:250px;display:block;border-radius:4px}.product-item__name[_ngcontent-%COMP%]{font-size:24px;color:var(--blue)}.product-item__price[_ngcontent-%COMP%]{color:var(--orange);font-size:32px;font-weight:700}.product-item__price-deion[_ngcontent-%COMP%]{color:var(--gray);font-size:12px;font-weight:700}.product-item__buy-button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;color:#fff;font-size:20px;padding:6px 12px}.product-item__buy-button[_ngcontent-%COMP%]:hover{filter:brightness(1.1);cursor:pointer}"]}),e})();var P=i(7216),f=i(8594),c=i(95);const h=[{path:"",component:_},{path:":id",component:(()=>{class e{constructor(t,r,s,d){this.produtosService=t,this.route=r,this.notificacaoService=s,this.carrinhoService=d,this.quantidade=1}ngOnInit(){const r=Number(this.route.snapshot.paramMap.get("id"));this.produto=this.produtosService.getOne(r)}adicionarAoCarrinho(){this.notificacaoService.notificar("O produto foi adicionado ao carrinho.");const t={...this.produto,quantidade:this.quantidade};this.carrinhoService.adicionarAoCarrinho(t)}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(l),o.Y36(a.gz),o.Y36(P.r),o.Y36(f.e))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-detalhes-produto"]],decls:19,vars:8,consts:[[1,"flex","product__container"],[1,"product-image__container"],["alt","",3,"src"],[1,"flex","product-description__container"],[1,"product__name"],[1,"product__price"],["type","number","min","1","max","5",3,"ngModel","ngModelChange"],[1,"product__avaiability"],[3,"click"]],template:function(t,r){1&t&&(o.TgZ(0,"section",0)(1,"div",1),o._UZ(2,"img",2),o.qZA(),o.TgZ(3,"div",3)(4,"h2",4),o._uU(5),o.qZA(),o.TgZ(6,"h3",5),o._uU(7),o.ALo(8,"currency"),o.qZA(),o.TgZ(9,"p"),o._uU(10,"Estoque disponivel"),o.qZA(),o.TgZ(11,"label"),o._uU(12," Quantidade: "),o.TgZ(13,"input",6),o.NdJ("ngModelChange",function(d){return r.quantidade=d}),o.qZA(),o._uU(14," unidade(s) "),o.qZA(),o.TgZ(15,"p",7),o._uU(16),o.qZA(),o.TgZ(17,"button",8),o.NdJ("click",function(){return r.adicionarAoCarrinho()}),o._uU(18,"Adicionar ao carrinho"),o.qZA()()()),2&t&&(o.xp6(2),o.Q6J("src",null==r.produto?null:r.produto.imagem,o.LSH),o.xp6(3),o.Oqu(null==r.produto?null:r.produto.descricao),o.xp6(2),o.Oqu(o.xi3(8,5,null==r.produto?null:r.produto.preco,"BRL")),o.xp6(6),o.Q6J("ngModel",r.quantidade),o.xp6(3),o.hij(" ",null==r.produto?null:r.produto.quantidadeEstoque," unidade(s) em estoque "))},dependencies:[c.Fj,c.wV,c.JJ,c.qQ,c.Fd,c.On,u.H9],styles:[".product__container[_ngcontent-%COMP%]{width:100%;flex-flow:row;justify-content:flex-start;align-items:flex-start;gap:12px}.product__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:350px;height:350px}.product-description__container[_ngcontent-%COMP%]{width:100%;flex-flow:column;align-items:flex-start;gap:15px;border:1px solid var(--light-gray);border-radius:8px;padding:15px}.product__name[_ngcontent-%COMP%]{font-size:36px}.product__price[_ngcontent-%COMP%]{font-size:28px;font-weight:400}.product__avaiability[_ngcontent-%COMP%]{font-size:12px}label[_ngcontent-%COMP%]{display:block}input[_ngcontent-%COMP%]{width:40px;padding:5px}button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;padding:10px;color:#fff;font-size:24px;transition:.3s all;margin:20px 0;cursor:pointer}button[_ngcontent-%COMP%]:hover{filter:brightness(1.3)}"]}),e})()}];let v=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[a.Bz.forChild(h),a.Bz]}),e})(),x=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[u.ez,v,c.u5]}),e})()}}]);