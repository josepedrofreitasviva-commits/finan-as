const { stdin, stdout } = require("process");
const readline = require("readline");

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});
//variaveis
let salario;
let gastos = [];
let total;

let index = 0
let custo = [];
let res;
// funçoes

function PerguntarSalario(){

    rl.question("qual seu salario?: ",(RespostaSalario)=>{
        salario = RespostaSalario
    
        perguntasGastos(gastos);
    
    });
}
PerguntarSalario(salario);

function perguntasGastos(){
    rl.question("quais seus gastos(coloque virgula entre eles)",(RespostaGastos)=>{
            gastos = RespostaGastos.split(",").map(gasto => gasto.trim())
        
            PerguntarCusto();
            });

            
}

function PerguntarCusto(index = 0){
    if (index>=gastos.length){
        let total =salario -  (custo.reduce((soma, valor) => soma + valor, 0));
        console.log(`te resta ${total}`);
        
        rl.close();
        return;
    
    }
    
    rl.question(`quanto custou ${gastos[index]}: `,(respostaCusto)=>{
        custo.push(Number(respostaCusto)); 
        

        PerguntarCusto(index + 1);
                     

        });
    }
