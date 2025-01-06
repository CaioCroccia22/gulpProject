//Importação do pacote
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');

//Função que compila o SASS
// Função que compila o SASS
function executeSass() {
    return gulp.src('./source/styles/main.scss')
    .pipe(sourcemaps.init())
        .pipe(sass({
            // Compilação de arquivo com compressão
            outputStyle: 'compressed'
        }).on('error', sass.logError)) // Log de erros movido para o local correto
        .pipe(sourcemaps.write('./maps'))//Cria o arquivo de mapeamento
        .pipe(gulp.dest('./build/styles'));
}

//Função que compila o JS
function executeJS(){
    //Passa todos os arquivos JS
    return gulp.src('./source/scripts/*.js')
    // Executa o plugin do gulp
    .pipe(uglify())
    //Pasta de destino dos arquivos ja comprimidos
    .pipe(gulp.dest('./build/scripts'))
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


exports.watch = function(){
    gulp.watch('./source/styles/*.scss',
        //Configuração para não ignorar a primeira execução, ou seja o executeSass
        {ignoreInitial: false},
        gulp.series(executeSass));
}

exports.javascript = executeJS;