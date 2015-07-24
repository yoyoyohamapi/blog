define(['semantic-form'], function () {
    return {
        run: function () {
            // 表单验证
            $(".ui.form").form({
                inline: true,
                fields: {
                    siteName: {
                        identifier: 'siteName',
                        rules: [
                            {
                                type: 'empty',
                                prompt: '站点名不能为空'
                            },
                            {
                                type: 'maxLength[10]',
                                prompt: '站点名不能超过10个字符'
                            }
                        ]
                    },
                    siteDesc: {
                        identifier: 'siteDesc',
                        rules: [
                            {
                                type: 'maxLength[20]',
                                prompt: '站点简介不超过20字符'
                            }
                        ]
                    }
                },
                onSuccess: function () {
                    $.ajax({
                        url: $('form').attr('action'),
                        method: $('form').attr('method'),
                        data: $('form').serialize(),
                        dataType: 'json',
                        success: function (json) {
                            location.reload();
                        },
                        error: function () {
                            $(".ui.error.message").show();
                        }
                    });
                }
            });

            // ajax
            $("#submit").click(function () {
                $("form").form('validate form');
            });

            // input focus
            $("input").click(function () {
                $(".ui.error.message").hide();
            });
        }
    }
});