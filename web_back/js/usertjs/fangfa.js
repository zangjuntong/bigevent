var fangFa = {
    //文章类别搜索
    userLeiSerch: function(callback) {
        $.get(suerUrl.userLeiBie, function(res) {
            callback(res)
        })
    },
    ////编辑文章类别
    userBian: function(id, name, slug, callback) {
        $.post(suerUrl.userBianxie, {
                'id': id,
                'name': name,
                'slug': slug
            },

            function(res) {
                callback(res)
            })
    },
    //新增文章类别
    useradd: function(name, slug, callback) {
        $.post(suerUrl.userAdd, {
            'name': name,
            'slug': slug
        }, function(res) {
            callback(res)
        })
    },
    //删除文章类别
    userDell: function(id, callback) {
        $.post(suerUrl.userDel, { 'id': id }, function(res) {
            callback(res);
        })
    }
};