define(['load-image'], function (loadImage) {
    return {
        run: function () {
            //打开文件选择框
            $("#upload").click(function () {
                $("#file").click();
            });
            // 预览文件
            $("#file").change(function (e) {
                var loadingImage = loadImage(
                    e.target.files[0],
                    function (img) {
                        $("#avatar").html(img);
                    }
                );
            });
        }
    }
});