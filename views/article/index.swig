{% extends 'layout.swig' %}
{% set module = 'article/index' -%}

{% block title -%}{{ site.name }}{%- endblock %}
{% block content -%}

    <div class="articleContainer">
        {% include '_article.swig' %}
        {# 分页按钮 #}
        {% if articles.length -%}
            <button id="btnNext" class="ui pink expand button" data-page="2">加载更多</button>
        {%- endif %}

    </div>

    {# 右侧栏 #}
    {% include '_aside.swig' %}
{%- endblock %}