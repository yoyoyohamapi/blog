{% extends '../partial/layout.swig' %}
{% set noHeader=true %}
{% block stylesheets -%}
    <link rel="stylesheet" type="text/css" href="{{ path.style }}/passport.css"/>
{%- endblock %}
{% block content -%}
    <div class="passportContainer">
        {% block form_content -%}

        {%- endblock %}
        {# 返回博客 #}
        <a href="/" class="backToHome">返回首页</a>
    </div>
{%- endblock %}