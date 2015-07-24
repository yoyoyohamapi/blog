{% extends 'layout.swig' %}
{% set module='article/show' %}
{% block title -%}{{ articles[0].title }}{%- endblock %}
{% block content -%}
    <div class="articleContainer">
        {% include '_article.swig' %}
    </div>
{%- endblock %}