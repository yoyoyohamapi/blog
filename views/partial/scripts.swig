{# 引入 livereload #}
{#<script type="text/javascript", src="http://{{ req.host }}:35729/livereload.js"></script>#}
<script>
    var app = {};
    //    如果指明了预调用模块，则为app设置动作
    {% if module -%}
    app.action = '{{ module }}';
    {%- endif  %}
</script>
<script data-main="{{ path.script }}/common/main" src="{{ path.bower }}/requirejs/require.js"></script>
