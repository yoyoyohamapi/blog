define(['semantic-form'], function () {
    var PassportPanel = Backbone.View.extend({
        el: $('.passportContainer'),
        events: {
            'click input': 'hideError'
        },
        initialize: function (which) {
            // 初始化时绑定表单验证
            if (which === 'login')
                this.bindLoginForm();
            else
                this.bindRegForm();

        },
        /**
         * 聚焦输入框时，隐藏错误提示
         */
        hideError: function () {
            if ($('.error').length > 0) {
                if (!$('.error').is(':hidden')) {
                    $('.error').hide();
                }
            }
        },
        /**
         * 绑定登录表单验证
         */
        bindLoginForm: function () {
            $('.ui.form').form({
                inline: true,
                fields: {
                    email: {
                        identifier: 'email',
                        rules: [
                            {
                                type: 'email',
                                prompt: '请填写正确的邮箱'
                            }
                        ]
                    },
                    password: {
                        identifier: 'password',
                        rules: [
                            {
                                type: 'empty',
                                prompt: '请填写密码'
                            }
                        ]
                    }
                }
            });
        },
        bindRegForm: function () {
            $('.ui.form').form({
                inline: true,
                fields: {
                    siteName: {
                        identifier: 'siteName',
                        rules: [
                            {
                                type: 'empty',
                                prompt: '站点名不能为空'
                            }
                        ]
                    },
                    email: {
                        identifier: 'email',
                        rules: [
                            {
                                type: 'email',
                                prompt: '请填写正确的邮箱'
                            }
                        ]
                    },
                    password: {
                        identifier: 'password',
                        rules: [
                            {
                                type: 'length[6]',
                                prompt: '密码不能少于6位'
                            }
                        ]
                    }
                }
            });
        }

    });
    return PassportPanel;
});
