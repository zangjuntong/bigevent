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
    },
    //文章搜索
    articalserch: function(curpage, type, state, callback) {
        $.get(suerUrl.articalSerch, {
            page: curpage,
            type: type,
            state: state
        }, function(res) {
            callback(res)
        })
    },
    //文章删除
    articDelet: function(id, callback) {
        $.get(suerUrl.articdel, {
            'id': id
        }, function(res) {
            callback(res);
        })
    },
    //新增文章
    articaladd: function(fd, callback) {
        $.ajax({
            url: suerUrl.articadd,
            type: 'post',
            data: fd,
            processData: false, // 不要让jquery去处理formdata数据
            contentType: false,
            success: function(res) {
                callback(res)
            }
        })
    },
    //编辑文章
    articedit: function(fd, callback) {
        $.ajax({
            url: suerUrl.articaledit,
            type: 'post',
            data: fd,
            processData: false, // 不要让jquery去处理formdata数据
            contentType: false,
            success: function(res) {
                callback(res);

            }
        })
    },
    //获取文章详情
    articxiang: function(id, callback) {
        $.get(suerUrl.articalSerch, { 'id': id }, function(res) {
            callback(res)
        })
    },
    //获取文章5个焦点图
    fivefocus: function(callback) {
        $.get(suerUrl.articalSerch, {
            perpage: 5,
            state: '已发布'
        }, function(res) {
            callback(res)
        })
    },
    // articalsmalls: function(id, callback) {
    //     $.get(suerUrl.articalSerch, { 'id': id }, function(res) {
    //         callback(res);
    //     })
    // }
};