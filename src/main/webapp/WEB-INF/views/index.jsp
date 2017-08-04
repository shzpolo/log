<%@ page import="com.hz.log.bean.User" %><%--
  Created by IntelliJ IDEA.
  User: Polo
  Date: 2017/8/1
  Time: 10:34
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="UTF-8">
    <title>User Index</title>
    <script src="/res/js/jquery-1.11.2.min.js"></script>
    <style>
        #container{
            width: 1300px;
            margin: 0 auto;
        }
        #header{
            height: 100px;
            background: #8aa4af;
            padding: 20px;
        }
        #main{
            height: 900px;
            background: #00a0e9;
            padding-top: 50px;
            padding-left: 70px;
            padding-bottom: 50px;
        }
        #logout{
            display: inline;
            float: right;
        }
        .name_page{
            margin-left: 50px;
        }
        .tip_txt{
            display: block;
        }
        #tip_content{
            width: 300px;
            height: 300px;
        }
        #tip_title{
            width: 300px;
        }
        #tip_tags{
            width: 300px;
        }
        #tip_block{
            width:350px;
            display: none;
            float: left;
            margin: 30px;
        }
        #read_block{
            width:350px;
            display: none;
            float: left;
            margin: 30px;
        }
        #tip_state {
            width: 200px;
            height: 40px;
            float: left;
            margin: 10px;
            padding: 5px;
        }
        #submit_tip{
            margin-top: 10px;
            margin-left: 100px;
            width: 100px;
            height: 40px;
            font-size: 20px;
            float: left;
        }
        #btns{
            height: 100px;
            clear: left;
        }
        #reader {
            margin-top: 10px;
            color: white;
        }
    </style>
    <script>
        window.onload = function() {
            var tip_block_btn = document.getElementById("switch_tip");
            var tip_block = document.getElementById("tip_block");
            tip_block_btn.onclick = function(){
                if(tip_block.style.display == "block"){
                    tip_block.style.display = "none";
                }
                else {
                    tip_block.style.display = "block";
                }
            };
            var read_block_btn = document.getElementById("switch_read");
            var read_block = document.getElementById("read_block");
            read_block_btn.onclick = function(){
                if(read_block.style.display == "block"){
                    read_block.style.display = "none";
                }
                else {
                    read_block.style.display = "block";
                }
            };

        };
    </script>
</head>
<body>
<%
    User user = (User)session.getAttribute("user");
    //session.invalidate();
%>

<div id="container">
    <div id="header">
        <h2 class="name_page">"<%=user.getUserName()%>"de个人主页</h2>
        <a href="welcome.html" id="logout">logout</a>
        <h3 class="name_page">Welcome</h3>
    </div>
    <div id="main">
        <div id="btns">
            <input type="button" id="switch_tip" value="Write tips">
            <input type="button" id="switch_read" value="Read tips">
        </div>

        <div id="tip_block">
            <h3>You can write down some tips.</h3>
            <p>Tip's title</p>
            <input type="text" id="tip_title" class="tip_txt">
            <p>Tip's content</p>
            <textarea id="tip_content" class="tip_txt"></textarea>
            <p>Tip's tags //please write down some tags of you tip, use space to split different words</p>
            <input type="text" id="tip_tags" class="tip_txt">
            <input type="button" id="submit_tip" class="tip_btn" value="submit">
            <div id="tip_state"></div>
        </div>
        <div id="read_block">
            <h3>You can read some new tips.</h3>
            <p>See last * number titles</p>
            <input id="read_num" type="text">
            <input type="button" id="submit_read" value="read">
            <p>Write the id of tip you want to see</p>
            <input id="read_content" type="text">
            <input type="button" id="submit_content" value="read">
            <div id="reader"></div>

        </div>
    </div>
</div>

<script type="text/javascript">
    var timer = null;
    var button = true;
    function protecter(){
        button = true;
    }
    $('#submit_tip').click(function() {
        if(button) {
            button = false;
            window.clearInterval(timer);
            timer = window.setInterval(protecter, 10000);
            var title = $('#tip_title').val();
            var content = $('#tip_content').val();
            var tags = $('#tip_tags').val();
            var userId = <%=user.getId()%>;
            $.getJSON('submit_tip', {title: title, content: content, tags: tags, user_id: userId}, function (result) {
                if (result.state == 1) {
                    $('#tip_state').text("Title cannot be void.");
                }
                else if (result.state == 2) {
                    $('#tip_state').text("Content cannot be void.");
                }
                else {
                    $('#tip_state').text("Save complete!");
                }
            });
        }
        else {
            $('#tip_state').text("You can only push submit once in 10s.");
            window.clearInterval(timer);
            timer = window.setInterval(protecter, 10000);
        }
    });
    $('#submit_read').click(function() {
        var number = $('#read_num').val();
        number = parseInt(number);
        if(isNaN(number) || number < 1) {
            $('#reader').text("Number formation wrong.");
            return;
        }
        else if(number > 50){
            $('#reader').text("Cannot show more than 50.");
            return;
        }
        $.getJSON('read_tip', {number: number}, function(result){
            $('#reader').text(result.tip);
        });
    });
    $('#submit_content').click(function() {
        var number = $('#read_content').val();
        number = parseInt(number);
        if(isNaN(number) || number < 1) {
            $('#reader').text("Number formation wrong.");
            return;
        }
        else if(number > 50){
            $('#reader').text("Cannot show more than 50.");
            return;
        }
        $.getJSON('read_content', {number: number}, function(result){
            $('#reader').text(result.tip);
        });
    });
</script>
</body>
</html>
