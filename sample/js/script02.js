$(function(){

　let txt1 = "おはようございます！";
　let text2 = "おげんきですか？";
　let num1 = 20;
　let num2 = 32;

　$("#button01").on("click",function(){
    $("#content").text("こんにちは！");
　})

　$("#button2").on("click",function(){
    $("#content").text(txt1);
　})

　$("#button3").on("click",function(){
    $("#content").text(txt1+text2);
　})

　$("#button04").on("click",function(){
    $("#content").text(num1+num2);
　})

　$("#button05").on("click",function(){
    $("#content").text(num1+"たす"+num2+"は" + (num1+num2)+"です");
　})


});