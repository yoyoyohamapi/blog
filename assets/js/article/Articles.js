define(['marked', 'highlightjs'], function (marked, hljs) {
    var Articles = Backbone.View.extend({
        el: $(".articleContainer"),
        events: {
            'click #btnNext': 'showMore'
        },
        initialize: function () {
            marked.setOptions({
                langPrefix: 'hljs ',
                highlight: function (code) {
                    highlighted = hljs.highlightAuto(code).value;
                    return highlighted;
                }
            });
            $(".markdown-body").each(function () {
                var article = $(this);
                marked($(this).text(), function (err, html) {
                    article.html(html);
                    article.parent().show();
                });
            });
        },
        showMore: function (e) {
            var btn = $(e.target);
            var page = parseInt(btn.attr('data-page'));
            $.ajax({
                url: document.URL,
                method: 'POST',
                data: 'page=' + page,
                dataType: 'html',
                beforeSend: function () {
                    //发送前，设置按钮不可按，且为加载
                    btn.attr('disabled', true);
                    btn.addClass('loading');
                },
                success: function (html) {
                    // 如果返回内容为空，不再可追加
                    if (html.length == 0) {
                        btn.hide();
                    } else {
                        //追加文章
                        var article = $(html);
                        marked(article.find(".markdown-body").text(), function (err, content) {
                            article.find(".markdown-body").html(content);
                            article.insertAfter(".articleContainer .article:last");
                            article.show(function () {
                                //刷新按钮状态
                                btn.removeClass('loading');
                                btn.attr('disabled', false);
                                btn.attr('data-page', page + 1);
                            });
                        });
                    }
                }
            });
        }
    });
    return Articles;
});