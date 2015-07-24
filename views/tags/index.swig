{% extends 'layout.swig' -%}
{% block title -%}标签-{{ tag.id }}{%- endblock %}
{% block content %}
    <div class="tagsContainer">
        <div class="title">
            {{ tag.id }}
        </div>
        <div class="ui divider"></div>
        <div class="ui middle aligned divided list">
            {% for article in articles -%}
                <div class="item">
                    <div class="content">
                        <a class="header" href="/article/show/{{ article.id }}">
                            {{ article.title }}
                        </a>
                        {{ article.createdAt | date("Y-m-d") }}
                    </div>
                </div>

            {%- endfor %}
        </div>

        <div class="ui pagination menu">
            {# 注意 根据值的循环如此实现 #}
            {% set pageCount = Array(count) %}
            {% for x in pageCount -%}
                {% if loop.index == page -%}
                    <a href="/tag/{{ tag.id }}/articles/{{ loop.index }}" class="active item">
                        {{ loop.index }}
                    </a>
                {% else -%}
                    <a href="/tag/{{ tag.id }}/articles/{{ loop.index }}" class="item">
                        {{ loop.index }}
                    </a>
                {%- endif %}
            {%- endfor %}
        </div>
    </div>
{%- endblock %}