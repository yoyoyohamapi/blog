{% extends '../partial/layout.swig' %}
{% block stylesheets -%}
    <link rel="stylesheet" type="text/css" href="{{ path.style }}/article.css"/>
    <link href="{{ path.bower }}/highlightjs/styles/solarized_dark.css" type="text/css" rel="stylesheet"/>
    <link href="{{ path.style }}/markdown.css" type="text/css" rel="stylesheet"/>
{%- endblock %}