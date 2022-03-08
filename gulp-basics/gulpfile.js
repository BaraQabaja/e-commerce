//Top Level Function  [ task - src - dest - watch ]
//task => it handle the do of a spacific action
//src => it help us to reach a spacific file and do a spacific thing to it
// dest => your output //ex: so you look to a spacific file using src and put the output to a spacific folder using dest
//watch => make the gulp to every thing dynamic without anychanges to the task so it do the things automaticly with no need for manualy do the thing every time
//! pipe ===>it enable you to put . *dot* and make chane of tasks 
const gulp = require("gulp");
const gulpSass=require("gulp-sass")
const sass=gulpSass(require('sass'))// الساس هان متمررة عنطريق القلب ساس عشان في النهاية تعطينا سي اس اس جاهز عشان اقدر استخم الساس علطول بشكل مباشر
gulp.task("log", function () {
  console.log("Logging !!");
}); //here we are say we create a task called log *you can choose any name you want so log is not compulsory* and when you run a task called log the function will run

gulp.task("move", function () {
  gulp.src("css1/*.css").pipe(gulp.dest("css2"));//here we say that go so src .... and copy the content and move it to css2
});

gulp.task("watching",function(){
    gulp.watch("css1/style.css",async function(){
         gulp.src("css1/style.css").pipe(gulp.dest("css2"))
    })
})

gulp.task('sass',async()=>{
gulp.src("index.scss").pipe(sass()).pipe(gulp.dest("css/style.css"))
})