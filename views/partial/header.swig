<div class="siteHead">
    {% if isLogged -%}
        {#个人信息编辑#}
        <a id="edit" href="/user/profile" class="action">
            <i class="pencil icon"></i>
        </a>
        {# 登出按钮 #}
        <a id="logout" href="/logout" class="action">
            <i class="sign out icon"></i>
        </a>
    {%- endif %}
    {# 个人信息介绍 #}
    <div class="content">
        <a href="/">
            <img class="ui circular image" src="{{ path.image }}/avatar.jpg">
        </a>

        <h1 class="siteName">{{ site.name }}</h1>

        <h2 class="siteDesc">{{ site.desc }}</h2>
    </div>

    {# 链接 #}
    <div class="linker">
        <a href="#" target="_blank"><i class="github icon"></i></a>
        <a href="#" target="_blank"><i class="weibo icon"></i></a>
        <a href="#" target="_blank"><i class="facebook icon"></i></a>
    </div>

</div>