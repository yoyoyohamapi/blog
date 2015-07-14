{% extends '../partial/layout.swig' %}
{% block stylesheets -%}
    <link rel="stylesheet" type="text/css" href="{{ path.style }}/passport.css"/>
{%- endblock %}
{% block content -%}
    <div class="passportContainer">
        {% block form_content -%}

        {%- endblock %}
    </div>
{%- endblock %}