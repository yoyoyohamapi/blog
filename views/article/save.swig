{% extends 'layout.swig' %}
{% set module='article/save' %}
{% block title -%}编辑文章{%- endblock %}
{% block content -%}
    {% include '_editor.swig' %}
{%- endblock %}