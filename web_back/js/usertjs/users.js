var http = 'http://localhost:8000';


var user = {
    //用户登录
    login: function(userName, passWords, callback) {
        $.post(suerUrl.userLogin, {
            user_name: userName,
            password: passWords
        }, function(res) {
            callback(res);
        })
    },
    //退出
    logout: function(callback) {
        $.post(suerUrl.userLogout, function(res) {
            //退出，回到登录页
            callback(res);
        })
    },
    //获取用户信息
    logInfo: function(callback) {
        $.get(suerUrl.userLogout, function(res) {
            callback(res);
        })
    }
};