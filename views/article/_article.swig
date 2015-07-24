{% for article in articles -%}
    <div class="article" style="display: none">
        {# 登录可编辑 #}
        {% if isLogged -%}
            <a href="/article/edit/{{ article.id }}" class="ui blue right corner label">
                <i class="pencil icon"></i>
            </a>
        {%- endif %}
        <a href="/article/show/{{ article.id }}" class="title">{{ article.title }}</a>
        {# 信息 #}
        <div class="date"><i class="ui clock icon"></i>发表于 {{ article.createdAt | date('Y-m-d') }}</div>
        <div class="ui divider"></div>
        <div class="markdown-body">{{ article.content }}</div>
        <div class="ui divider"></div>

        <div class="info ui grid two column">
            <div class="tag column">
                {% for tag in article.tags -%}
                    <a href="/tag/{{ tag }}/articles/1" class="ui red tag label">{{ tag }}</a>
                {%- endfor %}
            </div>
            <div class="category column">
                <a href="/category/{{ article.category }}/articles/1" class="">{{ article.category.name }}</a>
            </div>
        </div>
    </div>
{%- endfor %}