/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {
    // 个人信息修改首页
    index: function (req, res) {
        if (req.method === 'GET') {
            return res.view('user/index');
        }

    },

    // 跳转到设置头像页面
    setAvatar: function (req, res) {
        if (req.method === 'GET')
            return res.view('user/avatar');

        // POST请求进行文件上传
        // 判断是否有文件上传
        if (!req.file('avatar')._files[0]) {
            return res.badRequest('No file was uploaded');
        }

        // 判断文件类型是否争取
        var fileType = req.file('avatar')._files[0].stream.headers['content-type'];
        if (fileType != 'image/jpeg') {
            return res.badRequest('文件类型错误,仅支持JPG文件格式');
        }
        req.file('avatar').upload({
            maxBytes: 10000000,
            dirname: '../../assets/images',
            saveAs: 'avatar.jpg'
        }, function whenDone(err, uploadedFiles) {
            if (err) {
                return res.negotiate(err);
            }

            return res.redirect('/');
        });
    }
};

