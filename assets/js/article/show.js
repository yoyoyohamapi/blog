define(['marked', 'highlightjs'], function (marked, hljs) {
    return {
        run: function () {
            // ------------初始化marked
            marked.setOptions({
                langPrefix: 'hljs ',
                highlight: function (code) {
                    highlighted = hljs.highlightAuto(code).value;
                    return highlighted;
                }
            });
            var content = $(".markdown-body").text();
            marked(content, function (err, html) {
                $(".markdown-body").html(html);
                $(".article").show();
            });
        }
    }
});