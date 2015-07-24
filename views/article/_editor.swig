<div class="articleEditor">
    <form class="ui form" action="{{ form.action }}" method="{{ form.method }}">
        <h1 class="ui dividing header">编辑文章</h1>

        <div class="field">
            <label>标题</label>
            <input id="title" name="title" type="text" placeholder="文章标题(20个字符以内)" value="{{ article.title }}"/>
        </div>
        <div class="field">
            <label>内容</label>
            <textarea id="content" name="content" placeholder="文章内容" rows="25">{{ article.content }}</textarea>
        </div>
        <div class="field">
            <label>标签</label>
            <input id="tags" name="tags" type="text" placeholder="如果为多个标签，以空格分隔。最多五个标签"
                   value="{{ article.tags|join(" ") }}"/>
        </div>
        <div class="field">
            <label>文章分类</label>
            {% for category in categories -%}
                {% if category.id === article.category -%}
                    <a class="ui red label" data-value="{{ category.id }}">{{ category.name }}</a>
                {% else -%}
                    <a class="ui olive label" data-value="{{ category.id }}">{{ category.name }}</a>
                {%- endif %}
            {%- endfor %}
        </div>
        <div class="field">
            <label>添加添加</label>

            <div class="ui action input">
                <input id="newCategory" name="newCategory" type="text" placeholder="添加分类"/>
                <button id="btnNewCategory" type="button" class="ui olive icon button">
                    <i class="ui plus icon"></i>
                </button>
            </div>
        </div>
        <input type="hidden" id="category" name="category" value="{{ article.category }}"/>
        <button id="btnPreview" type="button" class="ui orange button"><i class="unhide icon"></i>预览</button>
        <button id="submit" type="button" class="ui primary button"><i class="check circle icon"></i>立即发布</button>
    </form>

    {# 预览模态框 #}
    <div id="preview" class="ui modal">
        <i class="close icon"></i>

        <div class="header">Header</div>
        <div class="content markdown-body"></div>
        <div class="extra">
            <div class="belong" style="margin-bottom:10px">
                <i class="ui huge green label">未分类</i>
            </div>
            <div class="ui tag labels"></div>
        </div>
    </div>
</div>