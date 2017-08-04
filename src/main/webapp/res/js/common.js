HT = {};
HT.data = {
    "NORMAL":"一般权限",
    "ADMIN":"管理员权限",
    "EDIT_COMPANY":"公司编辑权限",
    "EDIT_PRODUCT":"产品编辑权限",
    "EDIT_CAPABILITY":"能力编辑权限",
    "EDIT_BUY":"采购编辑权限",
    "EDIT_INQUIRY":"询价编辑权限",
    "EDIT_CATEGORY":"类目编辑权限",
    "EDIT_FEATURE":"类目属性模板编辑权限",
    "EDIT_USER":"用户编辑权限",
    "DELETE_COMPANY":"公司删除权限",
    "DELETE_PRODUCT":"产品删除权限",
    "DELETE_CAPABILITY":"能力删除权限",
    "DELETE_BUY":"采购删除权限",
    "DELETE_INQUIRY":"询价删除权限",
    "DELETE_CATEGORY":"类目删除权限",
    "DELETE_FEATURE":"类目属性模板删除权限",
    "DELETE_USER":"用户删除权限",
    "ADD_COMPANY":"公司添加权限",
    "ADD_PRODUCT":"产品添加权限",
    "ADD_CAPABILITY":"能力添加权限",
    "ADD_BUY":"采购添加权限",
    "ADD_INQUIRY":"询价添加权限",
    "ADD_CATEGORY":"类目添加权限",
    "ADD_FEATURE":"类目属性模板添加权限",
    "ADD_USER":"用户添加权限",
    "SEARCH_COMPANY":"公司搜索权限",
    "SEARCH_PRODUCT":"产品搜索权限",
    "SEARCH_CAPABILITY":"能力搜索权限",
    "SEARCH_BUY":"采购搜索权限",
    "SEARCH_INQUIRY":"询价搜索权限",
    "SEARCH_CATEGORY":"类目搜索权限",
    "SEARCH_FEATURE":"类目属性模板搜索权限",
    "SEARCH_USER":"用户搜索权限",
    "VIEW_SYS_CONFIG":"系统配置查看权限",
    "EDIT_SYS_CONFIG":"系统配置编辑权限",
    "EDIT_ORDER":"订单编辑权限",
    "DELETE_ORDER":"订单删除权限",
    "ADD_ORDER":"订单添加权限",
    "SEARCH_ORDER":"订单搜索权限",
    "PUBLISH_INDEX":"主页发布预览权限",
    "EDIT_INDEX":"主页编辑权限",
    "SEND_MSG":"发送短信",
    "SEARCH_APP":"搜索APP",
    "EDIT_APP":"修改APP",
    "DELETE_APP":"删除APP",
    "ROOT":"全部权限",
};
HT.data.permission = function () {
    for(var key in HT.data){
        $('.' + key).html(HT.data[key]);
    }
};

HT.companyStatus = {};
HT.companyStatus.data = {
    "-2":"公司不可用",
    "-3":"公司没产品",
    "-1":"删除",
    "0":"上架",
    "10":"待审核",
    "100":"下架",
    "101":"禁用"
};
HT.companyStatus.status = function () {
    for(var key in HT.companyStatus.data){
        $('.companyStatus' + key).html(HT.companyStatus.data[key]);
    }
};

HT.companySource = {};
HT.companySource.data = {
    "0":"系统添加",
    "1":"天智",
    "2":"1688",
    "3":"慧聪"
};
HT.companySource.source = function () {
    for(var key in HT.companySource.data){
        $('.companySource' + key).html(HT.companySource.data[key]);
    }
};

HT.productSource = {};
HT.productSource.data = {
    "0":"系统添加",
    "1":"天智",
    "2":"1688",
    "3":"慧聪"
};
HT.productSource.source = function () {
    for(var key in HT.productSource.data){
        $('.productSource' + key).html(HT.productSource.data[key]);
    }
};

HT.srcCategorySource = {};
HT.srcCategorySource.data = {
    "0":"云路",
    "1":"天智",
    "2":"1688",
    "3":"慧聪",
    "4":"51sole",
    "6":"中国制造网",
    "7":"youboy"
};
HT.srcCategorySource.source = function () {
    for(var key in HT.srcCategorySource.data){
        $('.srcCategorySource' + key).html(HT.srcCategorySource.data[key]);
    }
};

HT.productStatus = {};
HT.productStatus.data = {
    "-1":"删除",
    "0":"上架",
    "10":"待审核",
    "100":"下架",
    "101":"禁用"
};
HT.productStatus.status = function () {
    for(var key in HT.productStatus.data){
        $('.product' + key).html(HT.productStatus.data[key]);
    }
};
HT.newsStatus = {};
HT.newsStatus.data = {
    "-1":"删除",
    "0":"正常",
    "10":"待审核",
    "100":"下线",
    "101":"禁用"
};
HT.newsStatus.status = function () {
    for(var key in HT.newsStatus.data){
        $('.news' + key).html(HT.newsStatus.data[key]);
    }
};
HT.buy = {};
HT.buy.data = {
    "0":"产品需求",
    "1":"能力需求"
};
HT.buy.type = function () {
    for(var key in HT.buy.data){
        $('.buy' + key).html(HT.buy.data[key]);
    }
};
HT.newsCategory = {};
HT.newsCategory.data = {
    "工业互联网":"工业互联网",
    "智能化改造":"智能化改造",
    "工业大数据":"工业大数据",
    "云制造生态":"云制造生态",
    "解决方案中心":"解决方案中心"
};
HT.newsCategory.category = function(){
    for(var key in HT.newsCategory.data){
        $('input[name=' + key + ']').next().val(HT.newsCategory.data[key]);
    }
}
HT.employee = {};
HT.employee.data = {
    "0": "-",
    "1":"5人以下",
    "5":"5 - 50人",
    "51":"51 - 100人",
    "101":"101 - 500人",
    "501":"501 - 1000人",
    "1000":"1000人以上"
};
HT.employee.count = function (){
    for(var key in HT.employee.data){
    $('.employees' + key).html(HT.employee.data[key]);
}
}





HT.utils = {};
//cookie
HT.utils.setCookie = function (name, value, expireMins) {
    var d = new Date();
    d.setTime(d.getTime() + ((expireMins || 60 * 24) * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

HT.utils.getCookie = function (key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}

//文件拖拽上传
HT.utils.fileDropbox = function(dropbox, preview, uploadUrl, filenameEle,fileName, progressFunc, uploadedFunc) {
    dropbox[0].addEventListener("dragenter", function(e) {
        e.stopPropagation();
        e.preventDefault();
    }, false);
    dropbox[0].addEventListener("dragover", function(e) {
        e.stopPropagation();
        e.preventDefault();
    }, false);
    dropbox[0].addEventListener("drop", function(e) {
        e.stopPropagation();
        e.preventDefault();

        handleFiles(uploadUrl, e.dataTransfer.files);
    }, false);

    handleFiles = function(uploadUrl, files) {

            var file = files[0];
            var fileType = file.type;
            if (!fileType.match(/image*/) && !fileType.match( /*zip*/ )) {

            }

            preview.file = file;
            var reader = new FileReader();
            reader.onload = (function(aImg) {
                return function(e) {
                    $(preview).removeAttr('src');
                    $(preview).attr('src',e.target.result);
                };
            })(preview);
            reader.readAsDataURL(file);

            var fileSize = file.size;
            var fileName = file.name;

            //取文件名（不带后缀）
            var name = fileName.substring(0,fileName.lastIndexOf("."));
            //判断文件名是否包含中文，包含则用当前时间做文件名
            var reg = new RegExp("[^a-zA-Z0-9_.-]","g");
            if(reg.test(name)){
                var data = new Date();
                var hours = (data.getHours() < 10) ? ("0" + data.getHours()) : data.getHours();
                var minutes = (data.getMinutes() < 10) ? ("0" + data.getMinutes()) : data.getMinutes();
                var seconds = (data.getSeconds() < 10) ? ("0" + data.getSeconds()) : data.getSeconds();
                var newName = hours + "" + minutes + "" + seconds;
                fileName = fileName.replace(name,newName);
            }

            $(filenameEle).val(fileName);
            $(filenameEle).attr("originName",file.name);

            var dataReader = new FileReader();
            dataReader.onload = function(e) {
                upload(uploadUrl, fileName, fileType, fileSize, e.target.result);
            };

            dataReader.readAsBinaryString(file);
    }

    try {
        if (typeof XMLHttpRequest.prototype.sendAsBinary == 'undefined') {
            XMLHttpRequest.prototype.sendAsBinary = function(text) {
                var data = new ArrayBuffer(text.length);
                var ui8a = new Uint8Array(data, 0);
                for (var i = 0; i < text.length; i++) ui8a[i] = (text.charCodeAt(i) & 0xff);
                this.send(ui8a);
            }
        }
    } catch (e) {}

    function upload(uploadUrl, originalName, fileType, fileSize, fileData) {
        console.log('upload start');
        var xhr = new XMLHttpRequest();
        xhr.open('post', uploadUrl, true);

        xhr.upload.addEventListener("progress", function(e) {
            if (e.lengthComputable) {
                var percentage = Math.round((e.loaded * 100) / e.total);
                console.log('percentage ' + percentage);
                //img.style.opacity = 1 - percentage / 100.0;
                if (progressFunc) {
                    progressFunc(percentage / 100.0);
                }
            }
        }, false);

        xhr.upload.addEventListener("load", function(e) {
            console.log('uploaded');
            if (uploadedFunc) {
                window.setTimeout(function() {
                    uploadedFunc(xhr.responseText);
                }, 500); //delay to get response
            }
        }, false);

        var boundary = '============' + HT.utils.guid() + '===========';

        xhr.setRequestHeader("Content-Type", "multipart/form-data, boundary=" + boundary); // simulate a file MIME POST request.
        //xhr.setRequestHeader("Content-Length", fileSize);

        // 解析imageId
        var sourceUrl = $('#file_src').val();
        var imageId ="";
        if(typeof (sourceUrl)!==undefined&&sourceUrl!=null&&sourceUrl!=""){
            var endIndex = sourceUrl.lastIndexOf("/");
            var part = sourceUrl.substr(0,endIndex);
            var startIndex = part.lastIndexOf("/");
            imageId = part.substr(startIndex+1);
        }

        var body = '';
        body += "--" + boundary + "\r\n";
        body += "Content-Disposition: form-data; name=\"" + originalName + "\"; filename=\"" + originalName + "\"\r\n";
        body += "Content-Type: " + fileType + "\r\n\r\n";
        body += fileData + "\r\n";


        if(imageId!=null&&imageId!=""){
            body += "--" + boundary + "\r\n";
            body += "Content-Disposition: form-data; name=\"imageFileId\"\r\n\r\n";
            body += imageId + "\r\n";
        }
        body += "--" + boundary + "--\r\n";

        xhr.onreadystatechange = function () {
            //请求状态readyState=4准备就绪,服务器返回的状态码status=200接收成功
            if (xhr.readyState == 4  ) {
                if(xhr.status == 200){
                    // 上传成功刷新页面
                    var result = JSON.parse(xhr.responseText);
                    if (result.error == 0) {
                        var url = window.location.pathname;
                        if(url.indexOf("images/list") > 0){
                            alert("上传成功");
                            window.location.reload();
                        }else{
                            showImageList();
                        }
                    }
                    if (result.error == 1) {
                        alert("上传失败");
                        window.location.reload();
                    }
                }else {
                    console.log("Error", xhr.statusText);
                }

            }
        };

        xhr.sendAsBinary(body);

        console.log('upload end');
    }
};

HT.utils.guid=function() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

HT.utils.pagination = function(maxPage, pageInput, pageButton){
    pageInput.keyup(function(e){
        switch (e.keyCode){
            case 37: break;
            case 38: break;
            case 39: break;
            case 40: break;
            case 13:
                changePage();
                break;
            case 8: $(e.target).attr('oldpage', $(e.target).val()); break;
            case 46: $(e.target).attr('oldpage', $(e.target).val()); break;
            default :validPage();
        }
    }).focus(function(){
        $(this).toggleClass('active');
    }).blur(function(){
        $(this).toggleClass('active');
    });

    pageButton.click(function(){
        changePage();
    });

    //分页
    function changePage(){
        var page = pageInput.val();
        var pattern = /^[1-9]\d{0,2}$/;
        if(page.trim()==""){
            pageInput.focus();
            return;
        }
        if(pattern.test(page)){
            page = parseInt(page);
            maxPage = parseInt(maxPage);
            if(page > maxPage || page < 0){
                alert("请输入1~" + maxPage + "之间的数字");
                pageInput.val("").focus();
                return;
            }
        }else{
            alert("请输入1~" + maxPage + "之间的数字");
            pageInput.val("").focus();
            return;
        }

        var page = parseInt(pageInput.val()) || 1;
        var url = document.location.href.setQuery('page', page - 1);
        window.location.href = url;
    }
    //页码校验v2
    function validPage(){
        var page = pageInput.val();
        var pattern = /^[0-9]+$/;
        var oldpage = pageInput.attr("oldpage") || '';
        if(page.trim() == ""){
            pageInput.val("");
            return;
        }
        if(!pattern.test(page)){
            pageInput.val(oldpage);
            return;
        }
        var pageInt = parseInt(page);
        if(page.substr(0,1) == '0'){
            pageInput.val(pageInt);
        }
        if(pageInt == 0){
            pageInput.val('');
            return;
        }
        if(pageInt > parseInt(maxPage)){
            pageInput.val(page.substr(0,page.length-1));
            return;
        }
        pageInput.attr('oldpage', pageInput.val());
    }
};

/**
 * by xiaoxiang 左侧导航栏点击定位
 */
$(function() {
    $(".sidebar-menu a").each(function(){
        var pathname = window.location.pathname;
        pathname = pathname.substring(0, pathname.indexOf("/",1));
        if($(this).attr('href').indexOf(pathname) > -1 && pathname.length > 1){
            $(this).parent().addClass("active");
            $(this).parent().parent().parent().addClass("active");

            return false;
        }
    });
});

//全选
$(function(){
    $(".checkall").click(function(){
        $(".checkedid").prop("checked",true);
    });
    $(".checkreverse").click(function(){
        $(".checkedid").each(function(){
            $(this).prop("checked", !$(this).prop("checked"));
        });
    });
})

//获取url中的参数
String.prototype.getQuery = function (name) {
    var value = null;
    var url = this.toString();
    if (url.indexOf('?') > -1) {
        var search = url.substr(url.indexOf('?') + 1);
        if (search.indexOf('#') > -1) {
            search = url.substr(0, url.indexOf('#'));
        }

        var nameValues = search.split('&');
        if (nameValues.length > 0) {
            for (var i = 0; i < nameValues.length; i++) {
                if (nameValues[i].indexOf(name + '=') == 0) {
                    value = decodeURIComponent(nameValues[i].substr(name.length + 1));
                    break;
                }

                if (nameValues[i] == name) {
                    value = '';
                    break;
                }
            }
        }
    }

    return value;
}

//更换url中参数,value为空时删除参数
String.prototype.setQuery = function (name, value) {
    var url = this.toString();
    var params = [], exists = false, urlPrefix;
    if (url.indexOf('?') > 0) {
        var search = url.substr(url.indexOf('?') + 1);
        urlPrefix = url.substr(0, url.indexOf('?'));
        var nameValues = search.split('&');
        if (nameValues.length > 0) {
            for (var i = 0; i < nameValues.length; i++) {
                var index = nameValues[i].indexOf('='), n = '', v = '';
                if (index > 0) {
                    n = nameValues[i].substr(0, index);
                    v = nameValues[i].substr(index + 1);
                }
                else {
                    n = nameValues[i];
                }

                if (name == n) {
                    if (value) {
                        params.push(name + '=' + encodeURIComponent(value));
                    }

                    exists = true;
                }
                else {
                    if(n!=null&&n!=""){
                        params.push(n + '=' + (v || ''));
                    }
                }
            }
        }
    }

    var result = url;
    if (exists) {
        result = urlPrefix + '?' + params.join('&');
    } else if (urlPrefix && value) {
        if (value) {
            params.push(name + '=' + encodeURIComponent(value));
            result = urlPrefix + '?' + params.join('&');
        }
    } else{
        if(url.indexOf("?") > 0){
            if(name && value){
                result = url + "&" + name + '=' + value;
            }
        }else{
            if(name && value){
                result = url + '?' + name + '=' + value;
            }
        }
    }

    var index = result.indexOf('?');
    if(result.substring(index + 1).length < 1){
        result = result.substring(0, index);
    }

    return result;
}