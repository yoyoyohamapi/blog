{% extends '../partial/layout.swig' %}
{% block stylesheets -%}
    <link rel="stylesheet" type="text/css" href="{{ path.style }}/user.css"/>
{%- endblock %}
{% block content -%}
    <div class="profileContainer">
        {% block form_content -%}{%- endblock %}
    </div>
{%- endblock %}