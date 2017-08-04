<%--
  Created by IntelliJ IDEA.
  User: Polo
  Date: 2017/8/1
  Time: 14:24
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Login</title>
    <style>
        #container{
            width: 1000px;
            margin-top: 0;
            margin-right: auto;
            margin-left: auto;
            margin-bottom: 0;
        }
        #header {
            height: 100px;
            background: #ccc;
            padding: 20px;
            color: red;
        }
        #main{
            height: 400px;
            background: #999;
            padding: 50px;
        }
        .row{
            height: 50px;
        }
        .txt{
            width: 100px;
            height: 20px;
            display: inline;
        }
        #submit{
            margin: 20px auto;
        }
    </style>
    <script src="/res/js/jquery-1.11.2.min.js"></script>
</head>
<body>
<div id="container">
    <div id="header">

    </div>
    <div id="main">
        <div class="row">
            <p>用户名： </p>
            <input type="text" class="txt" id="user_name" value="user name">
        </div>
        <div class="row">
            <p>密码： </p>
            <input type="password" class="txt" id="password">
        </div>
        <div class="row">
            <input type="button" class="btn" id="submit" value="提交">
        </div>
    </div>
</div>


<script type="text/javascript">

    $('#submit').click(function() {
        var userName = $('#user_name').val();
        var password = $('#password').val();
        $.getJSON('login', {user_name: userName, password: password}, function(result){
            if(result.state == 1) {
                $('#header').text("用户名不存在");
            }
            else if(result.state == 2) {
                $('#header').text("密码错误");
            }
            else {
                $('#header').text("登陆成功");
                window.location.replace("/index.html");
            }
        });
    });
</script>

</body>
</html>
