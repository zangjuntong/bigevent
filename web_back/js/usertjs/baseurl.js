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
    userDel: http + '/admin/category_delete'
};