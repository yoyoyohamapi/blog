{% extends 'partial/layout.swig' %}
{# 声明本页面调用的模块 #}
{% set module = 'default/index' -%}

{% block title -%}首页{%- endblock %}
{% block content -%}
    <h1>Welcome</h1>
{%- endblock %}