<script setup>

</script>

<template>
    <div class="general">
        <div class="header">
            <p class="text-header">112</p>
        </div>
        <div class="body">
            <div class="text-body">
                УКАЖИТЕ ТИП ИСТОЧНИКА ЧРЕЗВЫЧАЙНОЙ СИТУАЦИИ
            </div>
            <div class="list-text1">
                <p class="list-detal_text1">ТЕХНОГЕННЫЕ ЧРЕЗВЫЧАЙНЫЕ СИТУАЦИИ <button class="list-button1"><img src="../images/Arrow 2.png"></button></p>
            </div>
            <div class="list-text2">
                <p class="list-detal_text2">ПРИРОДНЫЕ ЧРЕЗВЫЧАЙНЫЕ СИТУАЦИИ <button class="list-button2"><img src="../images/Arrow 2.png"></button></p>
            </div>
        </div>
    </div>
    
</template>

<style scoped>
.header {
    padding-top: 0px;
    width: 878;
    height: 43;
    border-radius: 1.89px;
    border-width: 0.95px;
    background-color: rgba(31, 54, 134, 1);
}
.text-header {
    font-family:Arial, Helvetica, sans-serif;
    font-size: 20px;
    padding-left: 10px;
    margin-top: 0px;
    color: rgba(255, 255, 255, 1);
    padding-top: 5px;
    padding-bottom: 5px;
}
.body {
    position: absolute;
    width: 616px;
    height: 441px;
    border-width: 1px;
    border-radius: 2px;
    border-color: rgba(255, 255, 255, 1);   
    background-color: rgba(255, 255, 255, 1);
    top: 12ex;
    left: 18ex;
}
.text-body {
    position: absolute;
    width: 570px;
    height: 95px;
    top: 69px;
    left: 30px;
    font-family:Arial, Helvetica, sans-serif;
    font-size: 20px;
    color: rgba(31, 54, 134, 1);

}
.list-text1 {
    font-family:Arial, Helvetica, sans-serif;
    display: inline-block;
    position: absolute;
    width: 495px;
    max-width: 485px;
    height: 48px;
    max-height: 48px;
    top: 205px;
    left: 67px;
    border-radius: 70px;
    border-style: solid;
    border-width: 1px;
    font-size: 20px;
    padding-left: 10px;
    background-color: rgba(31, 54, 134, 1);
    color: rgba(255, 255, 255, 1);
    letter-spacing: 0%; 
}
.list-text2 {
    font-family:Arial, Helvetica, sans-serif;
    display: inline-block;
    position: absolute;
    width: 495px;
    max-width: 485px;
    height: 48px;
    max-height: 48px;
    top: 280px;
    left: 67px;
    border-radius: 70px;
    border-style: solid;
    border-width: 1px;
    font-size: 20px;
    padding-left: 10px;    
    background-color: rgba(31, 54, 134, 1);
    color: rgba(255, 255, 255, 1);
    letter-spacing: 0%; 
}
.list-button1{
    position: absolute;
    width: 34px;
    height: 36px;
    border-radius: 100px;
    border-width: 1px;
    top: 6px;
    left: 453px;
    padding-top: 5px;
}
.list-button2{
    position: absolute;
    width: 34px;
    height: 36px;
    border-radius: 100px;
    border-width: 1px;
    top: 6px;
    left: 453px;
    padding-top: 5px;
}
.list-detal_text1 {
    margin-top: 12px;
}
.list-detal_text2 {
    margin-top: 12px;
}
</style>