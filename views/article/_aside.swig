{# 右侧依靠位 #}
<div class="asidePart">
    <div class="categoryList list">
        <div class="title">
            分类
        </div>
        <div class="content">
            {% for category in categories -%}
                <a class="ui olive label" href="/category/{{ category.id }}/articles/1">
                    {{ category.name }}
                </a>
            {%- endfor %}
        </div>
    </div>

    <div class="tagsList list">
        <div class="title">
            标签
        </div>
        <div class="content">
            <div class="ui tag labels">
                {% for tag in tags -%}
                    <a class="ui red label" href="/tag/{{ tag.id }}/articles/1">
                        {{ tag.id }} ({{ tag.value }})
                    </a>
                {%- endfor %}
            </div>
        </div>
    </div>

    <div class="actions">
        {% if isLogged===true -%}
            <a class="fluid ui green button" href="/article/new">
                创建文章
            </a>
        {% else -%}
            <a class="fluid ui green button" href="/login">
                登陆
            </a>
        {%- endif %}

    </div>
</div>