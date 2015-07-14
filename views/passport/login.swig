{% extends 'layout.swig' %}
{% set module = 'passport/login' %}
{% block title -%}欢迎登录{%- endblock %}
{% block form_content -%}
    <form class="ui form" action="/login" method="post">
        <h1 class="ui dividing header">欢迎登录</h1>
        {% if err -%}
            <div class="ui error message" style="display: block">
                <div class="header">登录失败</div>
                <p>账号或密码错误</p>
            </div>
        {%- endif %}
        <div class="field">
            <input id="email" name="email" type="text" placeholder="您的邮箱">
        </div>
        <div class="field">
            <input id="password" name="password" type="password" placeholder="您的密码"/>
        </div>
        <div class="field">
            <div class="ui buttons">
                <button class="ui positive button" type="submit">登录</button>
                <div class="or"></div>
                <a class="ui negative button" href="/register">注册</a>
            </div>
        </div>
    </form>
{%- endblock %}
