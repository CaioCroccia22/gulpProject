//Importação do pacote
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'));

function executeSass(){
    return gulp.src('./source/styles/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/styles'));
}



function firstFunction(callback){
    setTimeout(function(){
        console.log('Executando via Gulp');
        callback();
    }, 10000)
}

function dizOi(callback){
    console.log('Oi');
    callback();
}


//Default é a tarefa padrão
// exports.default = firstFunction;


// Criação de tarefa dizOi
// exports.dizOi = dizOi;

//Tarefas publicas -> São aquelas que exportamos 
//Tarefas privadas -> São aquelas que não exportamos, mas podemos utiliza-las dentro de outras
//tarefas


//Para exporta tarefas em serie

// exports.default = gulp.series(firstFunction, dizOi);

//Para exporta tarefas em paralelo
// exports.default = gulp.parallel(firstFunction, dizOi);

exports.sass = executeSass;
