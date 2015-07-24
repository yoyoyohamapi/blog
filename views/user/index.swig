{% extends 'layout.swig' %}
{% block title -%}用户信息{%- endblock %}
{% set module="user/index" %}
{% block form_content -%}
    <form method="put" action="/user/{{ req.user.id }}" class="ui form">
        <h2 class="ui dividing header">用户信息设置</h2>

        <div id="avatar" class="field">
            <a href="/user/profile/avatar">
                <img src="{{ path.image }}/avatar.jpg"/>
            </a>
        </div>
        <div class="field">
            <label for="siteName">站点名称</label>
            <input type="text" id="siteName" name="siteName"
                   value="{{ site.name }}"/>
        </div>
        <div class="field">
            <label for="siteDesc">站点简介</label>
            <textarea id="siteDesc" name="siteDesc">{{ site.desc }}</textarea>
        </div>
        <div class="ui error message">
            <div class="header">信息设置失败</div>
        </div>
    </form>
    <div class="field">
        <div class="ui buttons">
            <button id="submit" class="ui positive button" type="button">保存</button>
            <div class="or"></div>
            <a class="ui negative button" href="/profile">取消</a>
        </div>
    </div>


{% endblock %}