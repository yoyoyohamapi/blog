define(['./PassportPanel.js'], function (PassportPanel) {
    return {
        run: function () {
            // 如果有错误，则当focus输入域时，自动隐藏错误提示
            var loginPanel = new PassportPanel('login');
        }
    }
});