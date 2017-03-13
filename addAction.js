writeCode="";
var object="jogador";
var funcao="pular";
var parametro="";


objectList=[];
objectList[0]="jogador";
objectList[1]="soundSpeaker";


function action(obj, func, par){
this.obj=obj;
this.func=func;
this.par=par;
}



//debug
//addAction();
changeObj();
//changeAction();
//changeParameter();

function changeObj(){
//todo select from a list
//selecionado=$(".docObjeto").value;
selecionado=$("#docObjeto option:selected")[0].value;
//selecionado=selecionado.value;
console.log(selecionado);
//selecionado= parseInt(selecionado);

object=objectList[selecionado];
}
function  changeAction(){
//todo select from a list
funcao="playMusic";
}
function changeParameter(){
var aux=document.getElementById("teste").value;
 parametro=aux; //+"m";


}


function addAction(){




var teste=new action(object,funcao,parametro);
var obj=teste.obj;
var func=teste.func;
var par=teste.par;
aux2 =obj+"."+func+"('"+par+"');"

writeCode=writeCode+aux2;
}


//fim do teste, isso só é validado durante o eval.
eval(writeCode);
$("#addAction").click(function() {
addAction();
});
//
$("#executar").click(function() {
  executar();
});

function executar(){
//writeCode=writeCode+jogador.posY;
eval(writeCode);
console.log(writeCode);
}



//apenas para fins de testes, subtituir por um promisse.
var jogador={
posY: 10,
 pular: function(aux){
 this.aux=aux;
this.posY=this.posY-aux;
console.log(this.posY);
}};

var soundSpeaker={

playMusic: function(nome){
//name
this.nome=nome;
alert(nome);

}
}


var arr = Object.entries(jogador);
listaDeFuncoes=[];
var j=0;

for (i=0; i<arr.length;i++){
//console.log(i);
 aux3=typeof arr[i][1];

if (aux3=="function"){
listaDeFuncoes[i]=arr[i][0];
j++;
}
}
console.log("funções do jogador: "+listaDeFuncoes);
