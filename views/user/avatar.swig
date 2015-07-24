{% extends 'layout.swig' %}
{% block title -%}设置头像{%- endblock %}
{% set module="user/avatar" %}
{% block form_content -%}
    <form method="post" action="/user/profile/avatar" enctype="multipart/form-data" class="ui form">
        <h2 class="ui dividing header">设置头像</h2>

        <div id="avatar" class="field">
            <img src="{{ path.image }}/avatar.jpg"/>
        </div>
        {#文件域，为了美观，默认隐藏 #}
        <div class="field" style="display: none">
            <input type="file" name="avatar" id="file" accept="image/jpeg" required="required"/>
        </div>
        <div class="field">
            <button type="button" id="upload" class="ui large button">上传头像</button>
        </div>
        <div class="field">
            <div class="ui buttons">
                <button id="submit" class="ui positive button" type="submit">保存</button>
                <div class="or"></div>
                <a class="ui negative button" href="/profile">取消</a>
            </div>
        </div>
    </form>
{% endblock %}