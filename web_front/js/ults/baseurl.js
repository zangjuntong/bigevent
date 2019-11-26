var http = 'http://localhost:8000';

var suerUrl = {
    //用户登录
    userLogin: http + '/admin/login',
    //退出登录
    userLogout: http + '/admin/logout',
    //获取用户信息
    userLoginfo: http + '/admin/getuser',
    //文章类别搜索
    userLeiBie: http + '/admin/category_search',
    //编辑文章类别
    userBianxie: http + '/admin/category_edit',
    //新增文章类别
    userAdd: http + '/admin/category_add',
    //删除文章类别
    userDel: http + '/admin/category_delete',
    //文章搜索
    articalSerch: http + '/admin/search',
    //文章删除
    articdel: http + '/admin/article_delete',
    //新增文章
    articadd: http + '/admin/article_publish',
    //编辑文章
    articaledit: http + '/admin/category_edit',
    //获取文章详细内容
    // articalsmall: http + '/artitle'
};

//const href = 'http://172.16.0.119:8080/job/MDM_RESTful_api_autotest(oracle)/14/'; //这个改不了
//var href = 'http://172.16.0.119:8080/job/MDM_RESTful_api_autotest(oracle)/14/'; //这个可以改