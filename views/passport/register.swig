{% extends 'layout.swig' -%}
{% set module='passport/register' %}
{% block title -%}注册{%- endblock %}
{% block form_content -%}
    <form class="ui form" action="/register" method="post">
        <h1 class="ui dividing header">欢迎注册</h1>
        {% if err -%}
            <div class="ui error message" style="display: block">
                <div class="header">注册失败</div>
                <p>邮箱已被注册</p>
            </div>
        {%- endif %}
        <div class="field">
            <input id="siteName" name="siteName" type="text" placeholder="填写站点名称"/>
        </div>
        <div class="field">
            <input id="email" name="email" type="email" placeholder="填写邮箱">
        </div>
        <div class="field">
            <input id="password" name="password" type="password" placeholder="填写密码（不少于6个字符）"/>
        </div>
        <div class="field">
            <textarea id="siteDesc" name="siteDesc" placeholder="填写站点简介"></textarea>
        </div>
        <div class="field">
            <div class="ui buttons">
                <button class="ui positive button" type="submit">注册</button>
                <div class="or"></div>
                <a class="ui negative button" href="/login">登录</a>
            </div>
        </div>
    </form>
{%- endblock %}