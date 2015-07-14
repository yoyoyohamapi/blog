<!DOCTYPE html>
<html>
<head>
    <title>{% block title -%}{%- endblock %}</title>
    {# 引入常用css文件 #}
    {% include "stylesheets.swig" -%}
    {% block stylesheets -%}{%- endblock %}
</head>
<body>
{# 引入导航栏 #}
{% include "header.swig" -%}
{# 主内容显示部分，提供给集成页面重写 #}
<div class="mainContainer">
    {% block content -%}
    {%- endblock %}
</div>
{# 引入常用脚本 #}

{% include "scripts.swig" %}
</body>
</html>