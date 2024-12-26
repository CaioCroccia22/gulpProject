function firstFunction(callback){
    console.log('Executando via Gulp');
    callback();
}

function dizOi(callback){
    console.log('Oi');
    callback();
}

exports.default = firstFunction;
exports.dizOi = dizOi;

//Tarefas publicas -> São aquelas que exportamos 
//Tarefas privadas -> São aquelas que não exportamos, mas podemos utiliza-las dentro de outras
//tarefas