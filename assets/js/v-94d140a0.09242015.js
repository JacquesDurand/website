"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[141],{782:(s,e,a)=>{a.r(e),a.d(e,{default:()=>U});var n=a(6252),t=a(3577);const o=(0,n.uE)('<h2 id="repository-initialization" tabindex="-1"><a class="header-anchor" href="#repository-initialization" aria-hidden="true">#</a> Repository initialization</h2><p>To get the most out of cocogitto you need to have a <code>cog.toml</code> config at the root of your repository. You can create this file manually or generate the default one with <code>cog init</code>.</p><h3 id="create-a-new-repository" tabindex="-1"><a class="header-anchor" href="#create-a-new-repository" aria-hidden="true">#</a> Create a new repository</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="hljs-built_in">mkdir</span> my_repo &amp;&amp; cd my_repo\n<span class="hljs-built_in">cog</span> init\n</code></pre></div><p><code>cog init</code> works like <code>git init</code> except it create a template <code>cog.toml</code> config file, and an initial commit with the following message : <code>chore: initial commit</code>.</p><p>You can specify the target path of the repository you want to create :</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="hljs-built_in">cog</span> init my_repo\n</code></pre></div><h3 id="initialize-an-existing-repo" tabindex="-1"><a class="header-anchor" href="#initialize-an-existing-repo" aria-hidden="true">#</a> Initialize an existing repo</h3><p>Running <code>cog init</code> on an existing repository will just create a template configuration without creating any commit :</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="hljs-built_in">git</span> init my_repo &amp;&amp; cd my_repo\n<span class="hljs-built_in">cog</span> init\n</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code>❯ <span class="hljs-built_in">git</span> status\nOn branch master\nChanges to be committed:\n  (use <span class="hljs-string">&quot;git restore --staged &lt;file&gt;...&quot;</span> to unstage)\n\tnew file:   cog.toml\n</code></pre></div><h2 id="check-commit-history" tabindex="-1"><a class="header-anchor" href="#check-commit-history" aria-hidden="true">#</a> Check commit history</h2><p>Running <code>cog check</code> will check your commit history against the conventional commit specification :</p><div class="language-bash ext-sh"><pre class="language-bash"><code>❯ <span class="hljs-built_in">cog</span> check\nNo errored commits\n</code></pre></div><p>Let us create an invalid commit :</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="hljs-built_in">git</span> commit -m <span class="hljs-string">&quot;Your Mother Was A Hamster, And Your Father Smelt Of Elderberries&quot;</span>\n</code></pre></div><p>And check our commit history again :</p><div class="language-bash ext-sh"><pre class="language-bash"><code>❯ <span class="hljs-built_in">cog</span> check\nError:\nFound 1 non compliant commits in c7bee8..HEAD:\n\n_________________________________________________________\n\nErrored commit: 097a12f9c124b7015afa8c9b0e0be95ac6db89ad &lt;Paul Delafosse&gt;\n\tCommit message: <span class="hljs-string">&#39;Your Mother Was A Hamster, And Your Father Smelt Of Elderberries&#39;</span>\n\tCause: Missing commit type separator `:`\n</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You can check your history, starting from the latest tag using <code>--from-latest-tag</code> or <code>-l</code> flag.<br> This is useful when your git repo started to use conventional commits from a certain point in history and you don&#39;t care about editing old commits.</p></div><h2 id="rewrite-non-compliant-commits" tabindex="-1"><a class="header-anchor" href="#rewrite-non-compliant-commits" aria-hidden="true">#</a> Rewrite non-compliant commits</h2><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Using <code>cog edit</code> will modify your commit history and change the commit SHA of edited commit and their child.</p></div><p>Once you have spotted invalid commits you can quickly fix your commit history by running <code>cog edit</code>. This will perform an automatic rebase, cycling through each malformed commit, and letting you edit them with your <code>$EDITOR</code> of choice.</p><p><strong>Example :</strong></p><div class="language-editor ext-editor line-numbers-mode"><pre class="language-editor"><code><span class="hljs-comment"># Editing commit c2bb56b93821ff34282f322be4d2231f53b9ada8</span>\n<span class="hljs-comment"># Replace this message with a conventional commit compliant one</span>\n<span class="hljs-comment"># Save and exit to edit the next errored commit</span>\nYour Mother Was A Hamster, And Your Father Smelt Of Elderberries\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You can use the <code>--from-latest-tag</code> or <code>-l</code> to edit only commits since the latest tag in your repository.</p></div><h2 id="conventional-commit-log" tabindex="-1"><a class="header-anchor" href="#conventional-commit-log" aria-hidden="true">#</a> Conventional commit log</h2><p><code>cog log</code> is just like <code>git log</code> but it displays additional conventional commit information, such as commit scope, commit type etc.</p>',27),l={href:"https://asciinema.org/a/ssH4yRSlc28Rb9dHEDN7TowGe",target:"_blank",rel:"noopener noreferrer"},i=(0,n._)("img",{src:"https://asciinema.org/a/ssH4yRSlc28Rb9dHEDN7TowGe.svg",alt:"asciicast"},null,-1),c=(0,n.uE)('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You can filter the log content with the following flags :</p><ul><li><code>-B</code> : display breaking changes only</li><li><code>-t</code> : filter on commit types</li><li><code>-a</code> : filter on commit authors</li><li><code>-s</code> : filter on commit scopes</li><li><code>-e</code> : ignore non compliant commits</li></ul><p>Those flag can be combined to achieve complex search in your commit history :</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="hljs-built_in">cog</span> log --author <span class="hljs-string">&quot;Paul Delafosse&quot;</span> <span class="hljs-string">&quot;Mike Lubinets&quot;</span> --type feat --scope cli --no-error\n</code></pre></div></div><h2 id="changelogs" tabindex="-1"><a class="header-anchor" href="#changelogs" aria-hidden="true">#</a> Changelogs</h2><p><code>cog changelog</code> can generate changelog automatically.</p><p>Let&#39;s assume the following history :</p><div class="language-git ext-git"><pre class="language-git"><code>*<span class="hljs-title function_ invoke__"> e3ff26a </span>- <span class="hljs-string">(HEAD -&gt; master)</span><span class="hljs-keyword"> feat!: </span>implement parser specification <span class="hljs-meta">&lt;Paul Delafosse&gt;</span>\n*<span class="hljs-title function_ invoke__"> 78dedea </span>-<span class="hljs-keyword"> feat: </span>a commit <span class="hljs-meta">&lt;Paul Delafosse&gt;</span>\n*<span class="hljs-title function_ invoke__"> c361eea </span>-<span class="hljs-keyword"> feat: </span>say hello to the world <span class="hljs-meta">&lt;Paul Delafosse&gt;</span>\n*<span class="hljs-title function_ invoke__"> 6d014b4 </span>-<span class="hljs-keyword"> chore: </span>initial commit <span class="hljs-meta">&lt;Paul Delafosse&gt;</span>\n</code></pre></div><p>Let us now get a changelog :</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="hljs-built_in">cog</span> changelog\n</code></pre></div><div class="language-markdown ext-md"><pre class="language-markdown"><code><span class="hljs-section">## 0.2.0 - 2021-11-10</span>\n<span class="hljs-section">#### Features</span>\n<span class="hljs-bullet">-</span> <span class="hljs-strong">**(hello)**</span> say hello to the galaxy - (da4af95) - Paul Delafosse\n<span class="hljs-section">#### Refactoring</span>\n<span class="hljs-bullet">-</span> <span class="hljs-strong">**(hello)**</span> say hello to the martians - (22db158) - Paul Delafosse\n<span class="hljs-bullet">-</span> - -\n<span class="hljs-section">## 0.1.0 - 2021-11-10</span>\n<span class="hljs-section">#### Features</span>\n<span class="hljs-bullet">-</span> implement parser specification - (e3ff26a) - Paul Delafosse\n<span class="hljs-bullet">-</span> a commit - (78dedea) - Paul Delafosse\n<span class="hljs-bullet">-</span> say hello to the world - (c361eea) - Paul Delafosse\n</code></pre></div><p>As you can see above a changelog is generated for each semver compliant tag.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You can specify a custom changelog range or tag like so :</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="hljs-comment"># Display the changelog between `^1` and `2.0.0`</span>\n<span class="hljs-built_in">cog</span> changelog --at 2.0.0\n\n<span class="hljs-comment"># From `8806a5` to `1.0.0`</span>\n<span class="hljs-built_in">cog</span> changelog 8806a5..1.0.0\n\n<span class="hljs-comment"># From `8806a5` to `HEAD`</span>\n<span class="hljs-built_in">cog</span> changelog 8806a55..\n\n<span class="hljs-comment"># From first commit to `1.0.0`</span>\n<span class="hljs-built_in">cog</span> changelog 8806a5..1.0.0\n</code></pre></div></div><h3 id="built-in-templates" tabindex="-1"><a class="header-anchor" href="#built-in-templates" aria-hidden="true">#</a> Built-in templates</h3><p>A raw changelog is nice, but its even nicer to generate some links for repository hosted on git web platforms such as GitHub. To do this you can use the <code>--template</code> or <code>t</code> flag. Cocogitto comes with three pre built templates:</p><h4 id="default" tabindex="-1"><a class="header-anchor" href="#default" aria-hidden="true">#</a> <code>default</code></h4><p>The default template we saw in the previous section</p><h4 id="full-hash" tabindex="-1"><a class="header-anchor" href="#full-hash" aria-hidden="true">#</a> <code>full_hash</code></h4><p>A changelog template tailored for GitHub releases</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="hljs-built_in">cog</span> changelog --template hull_hash\n</code></pre></div><div class="language-markdown ext-md"><pre class="language-markdown"><code>  #### Features\n<span class="hljs-bullet">  -</span> da4af95b223bb8942ffd289d1a62d930c80d7bbd - <span class="hljs-strong">**(hello)**</span> say hello to the galaxy - @oknozor\n  #### Refactoring\n<span class="hljs-bullet">  -</span> 22db158f6c75aa5e9e7d4ed4a5b5af7b147453d7 - <span class="hljs-strong">**(hello)**</span> say hello to the martians - @oknozor\n<span class="hljs-bullet">  -</span> - -\n  #### Features\n<span class="hljs-bullet">  -</span> e3ff26a8247b9690ce241e9843eea595bcac8d06 - implement parser specification - @oknozor\n<span class="hljs-bullet">  -</span> 78dedeaf5e7222cd338627f7ee982e271a3f9a4c - a commit - Paul Delafosse\n<span class="hljs-bullet">  -</span> c361eeae958a0a28041aecfed10091dc0e6768dd - say hello to the world - @oknozor\n</code></pre></div><p>Below is the changelog as rendered by GitHub release, notice how the committer git signature as been replaced by their github username. To do that you need to tell cocogitto about your contributor&#39;s username in <code>cog.toml</code>:</p><div class="language-toml ext-toml"><pre class="language-toml"><code>  <span class="hljs-section">[changelog]</span>\n  <span class="hljs-attr">authors</span> = [\n      { username = <span class="hljs-string">&quot;oknozor&quot;</span>, signature = <span class="hljs-string">&quot;Paul Delafosse&quot;</span> }\n  ]\n</code></pre></div>',20),r=["src"],p=(0,n.uE)('<h4 id="remote" tabindex="-1"><a class="header-anchor" href="#remote" aria-hidden="true">#</a> <code>remote</code></h4><p>A template generating links for web platform hosted repository.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="hljs-built_in">cog</span> changelog --at 0.1.0 -t remote --remote github.com --owner oknozor --repository  cocogitto\n</code></pre></div><p>As you can see below a changelog is generated with full links to issues, tags, diff and usernames according to the provided remote, owner and repository flags.</p><div class="language-markdown ext-md"><pre class="language-markdown"><code><span class="hljs-section">## [<span class="hljs-string">0.1.0</span>](<span class="hljs-link">https://github.com/oknozor/cocogitto/compare/6d014b40f552fc1ad08f574fe33355175b0783ff..0.1.0</span>) - 2021-11-11</span>\n<span class="hljs-section">#### Features</span>\n<span class="hljs-bullet">-</span> implement parser specification - ([<span class="hljs-string">e3ff26a</span>](<span class="hljs-link">https://github.com/oknozor/cocogitto/commit/e3ff26a8247b9690ce241e9843eea595bcac8d06</span>)) - [<span class="hljs-string">@oknozor</span>](<span class="hljs-link">https://github.com/oknozor</span>)\n<span class="hljs-bullet">-</span> a commit - ([<span class="hljs-string">78dedea</span>](<span class="hljs-link">https://github.com/oknozor/cocogitto/commit/78dedeaf5e7222cd338627f7ee982e271a3f9a4c</span>)) - [<span class="hljs-string">@oknozor</span>](<span class="hljs-link">https://github.com/oknozor</span>)\n<span class="hljs-bullet">-</span> say hello to the world - ([<span class="hljs-string">c361eea</span>](<span class="hljs-link">https://github.com/oknozor/cocogitto/commit/c361eeae958a0a28041aecfed10091dc0e6768dd</span>)) - [<span class="hljs-string">@oknozor</span>](<span class="hljs-link">https://github.com/oknozor</span>)\n</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>To avoid typing the remote information and changelog template everytime you can set some default values in <code>cog.toml</code>.</p><p>Here is the config used by cocogitto itself.</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-section">[changelog]</span>\n<span class="hljs-attr">path</span> = <span class="hljs-string">&quot;CHANGELOG.md&quot;</span>\n<span class="hljs-attr">template</span> = <span class="hljs-string">&quot;remote&quot;</span>\n<span class="hljs-attr">remote</span> = <span class="hljs-string">&quot;github.com&quot;</span>\n<span class="hljs-attr">repository</span> = <span class="hljs-string">&quot;cocogitto&quot;</span>\n<span class="hljs-attr">owner</span> = <span class="hljs-string">&quot;cocogitto&quot;</span>\n<span class="hljs-attr">authors</span> = [\n  { signature = <span class="hljs-string">&quot;Paul Delafosse&quot;</span>, username = <span class="hljs-string">&quot;oknozor&quot;</span> },\n  { signature = <span class="hljs-string">&quot;Jack Dorland&quot;</span>, username = <span class="hljs-string">&quot;jackdorland&quot;</span> },\n  { signature = <span class="hljs-string">&quot;Mike Lubinets&quot;</span>, username = <span class="hljs-string">&quot;mersinvald&quot;</span> },\n  { signature = <span class="hljs-string">&quot;Marcin Puc&quot;</span>, username = <span class="hljs-string">&quot;tranzystorek-io&quot;</span> },\n  { signature = <span class="hljs-string">&quot;Renault Fernandes&quot;</span>, username = <span class="hljs-string">&quot;renaultfernandes&quot;</span> },\n  { signature = <span class="hljs-string">&quot;Pieter Joost van de Sande&quot;</span>, username = <span class="hljs-string">&quot;pjvds&quot;</span> },\n  { signature = <span class="hljs-string">&quot;orhun&quot;</span>, username = <span class="hljs-string">&quot;orhun&quot;</span> },\n  { signature = <span class="hljs-string">&quot;Danny Tatom&quot;</span>, username = <span class="hljs-string">&quot;its-danny&quot;</span> },\n]\n</code></pre></div></div><h3 id="custom-templates" tabindex="-1"><a class="header-anchor" href="#custom-templates" aria-hidden="true">#</a> Custom templates</h3>',7),h=(0,n.Uk)("If you are not happy with the default you can create your own changelog template. Internally cocogitto uses "),u={href:"https://tera.netlify.app/",target:"_blank",rel:"noopener noreferrer"},d=(0,n.Uk)("tera"),m=(0,n.Uk)(" template engine to render changelogs."),g=(0,n.uE)('<p>Also see <a href="../template">template reference</a>.</p><p><strong>Example:</strong></p><div class="language-tera ext-tera"><pre class="language-tera"><code>{% <span class="hljs-meta">for </span>type, typed_commits in commits | sort(attribute=<span class="hljs-string">&quot;type&quot;</span>)| group_by(attribute=<span class="hljs-string">&quot;type&quot;</span>)%}                            \n#### <span class="hljs-keyword">{{ type | upper_first }}</span>\n                                                                                                                        \n    {% <span class="hljs-meta">for </span>scope, scoped_commits in typed_commits | group_by(attribute=<span class="hljs-string">&quot;scope&quot;</span>) %}                                      \n        {% <span class="hljs-meta">for </span>commit in scoped_commits | sort(attribute=<span class="hljs-string">&quot;scope&quot;</span>) %}                                                    \n            {% <span class="hljs-number">if </span>commit.author %}                                                                                      \n                {% <span class="hljs-built_in">set </span>author = <span class="hljs-string">&quot;@&quot;</span> ~ commit.author %}                                                                  \n            {% <span class="hljs-number">else </span>%}                                                                                                  \n                {% <span class="hljs-built_in">set </span>author = commit.signature %}                                                                     \n            {% <span class="hljs-number">endif </span>%}                                                                                                 \n            - <span class="hljs-keyword">{{ commit.id }}</span> - **(<span class="hljs-keyword">{{ scope }}</span>)** <span class="hljs-keyword">{{ commit.summary }}</span> - <span class="hljs-keyword">{{ author }}</span>\n        {% <span class="hljs-meta">endfor </span>%}                                                                                                    \n    {% <span class="hljs-meta">endfor </span>%}                                                                                                        \n    {% <span class="hljs-meta">for </span>commit in typed_commits | unscoped %}                                                                        \n        {% <span class="hljs-number">if </span>commit.author %}                                                                                          \n            {% <span class="hljs-built_in">set </span>author = <span class="hljs-string">&quot;@&quot;</span> ~ commit.author %}                                                                      \n        {% <span class="hljs-number">else </span>%}                                                                                                      \n            {% <span class="hljs-built_in">set </span>author = commit.signature %}                                                                         \n        {% <span class="hljs-number">endif </span>%}                                                                                                     \n            - <span class="hljs-keyword">{{ commit.id }}</span> - <span class="hljs-keyword">{{ commit.summary }}</span> - <span class="hljs-keyword">{{ author }}</span>\n    {% <span class="hljs-meta">endfor </span>%}                                                                                                        \n{% <span class="hljs-meta">endfor </span>%}                                                                                                            \n</code></pre></div><h2 id="automatic-versioning" tabindex="-1"><a class="header-anchor" href="#automatic-versioning" aria-hidden="true">#</a> Automatic versioning</h2><p>The purpose of conventional commits is to be able to bump your project version and changelog automatically. Cocogitto allow you to do this with the <code>cog bump</code> command.</p><p>The <code>bump</code> subcommand will execute the following steps :</p><ol><li>Calculate the next version based on the commit types since the latest tag.</li><li>Append the changes for this version to <code>CHANGELOG.md</code>.</li><li>Execute a set configuration defined pre-bump hooks.</li><li>Create a version commit containing changes made during the previous steps.</li><li>Create a git tag on the version commit.</li><li>Execute a set of configuration defined post-bump hook.</li></ol><h3 id="auto-bump" tabindex="-1"><a class="header-anchor" href="#auto-bump" aria-hidden="true">#</a> Auto bump</h3><p><code>cog bump</code> will calculate the next version based on your commit history since the latest semver tag. Once a tag number as been calculated it will create a tagged commit containing the changelog for this new tag.</p><p><strong>Example:</strong></p><p>Assuming we are working on the following git repository :</p><div class="language-git ext-git"><pre class="language-git"><code>*<span class="hljs-title function_ invoke__"> 8e08b78 </span>- <span class="hljs-string">(HEAD -&gt; master)</span><span class="hljs-keyword"> feat: </span>another cool feature <span class="hljs-meta">&lt;Paul Delafosse&gt;</span>\n*<span class="hljs-title function_ invoke__"> 490b846 </span>-<span class="hljs-keyword"> docs: </span>add some documentation <span class="hljs-meta">&lt;Paul Delafosse&gt;</span>\n*<span class="hljs-title function_ invoke__"> 8bc0d28 </span>-<span class="hljs-keyword"> fix: </span>fix a ugly bug <span class="hljs-meta">&lt;Paul Delafosse&gt;</span>\n*<span class="hljs-title function_ invoke__"> a0c9050 </span>-<span class="hljs-keyword"> feat: </span>add awesome feature <span class="hljs-meta">&lt;Paul Delafosse&gt;</span>\n*<span class="hljs-title function_ invoke__"> 6d014b4 </span>-<span class="hljs-keyword"> chore: </span>initial commit <span class="hljs-meta">&lt;Paul Delafosse&gt;</span>\n</code></pre></div><p>Let us now create a version :</p><div class="language-bash ext-sh"><pre class="language-bash"><code>❯ <span class="hljs-built_in">cog</span> bump --auto\nWarning: using <span class="hljs-string">&#39;cog bump&#39;</span> with the default configuration.\nYou may want to create a <span class="hljs-string">&#39;cog.toml&#39;</span> file in your project root to configure bumps.\n\nFailed to get current version, falling back to 0.0.0\nSkipping irrelevant commits:\n\t- docs: 1\n\nFound feature commit 8e08b7\nFound bug fix commit 8bc0d2\nFound feature commit a0c905\nBumped version: ... -&gt; 0.1.0\n</code></pre></div><p>If we look again at our git log :</p><div class="language-git ext-git"><pre class="language-git"><code>*<span class="hljs-title function_ invoke__"> 76c0ffd </span>- <span class="hljs-string">(HEAD -&gt; master, tag: 0.1.0)</span> chore<span class="hljs-string">(version)</span>: 0.1.0 <span class="hljs-string">(2 minutes ago)</span> <span class="hljs-meta">&lt;Paul Delafosse&gt;</span>\n... \n</code></pre></div><p>Also, a <code>CHANGELOG.md</code> file have been created using the <code>default</code> template:</p><div class="language-markdown ext-md"><pre class="language-markdown"><code><span class="hljs-section"># Changelog</span>\nAll notable changes to this project will be documented in this file. See [<span class="hljs-string">conventional commits</span>](<span class="hljs-link">https://www.conventionalcommits.org/</span>) for commit guidelines.\n<span class="hljs-bullet">-</span> - -\n\n<span class="hljs-section">## 0.1.0 - 2021-11-11</span>\n<span class="hljs-section">#### Bug Fixes</span>\n<span class="hljs-bullet">-</span> fix a ugly bug - (8bc0d28) - Paul Delafosse\n<span class="hljs-section">#### Documentation</span>\n<span class="hljs-bullet">-</span> add some documentation - (490b846) - Paul Delafosse\n<span class="hljs-section">#### Features</span>\n<span class="hljs-bullet">-</span> another cool feature - (8e08b78) - Paul Delafosse\n<span class="hljs-bullet">-</span> add awesome feature - (a0c9050) - Paul Delafosse\n\n<span class="hljs-bullet">-</span> - -\nChangelog generated by [<span class="hljs-string">cocogitto</span>](<span class="hljs-link">https://github.com/cocogitto/cocogitto</span>).\n</code></pre></div><p>Also see <a href="/config">template config</a> if you need to change the default changelog template.</p>',19),b={class:"custom-container tip"},f=(0,n._)("p",{class:"custom-container-title"},"TIP",-1),j=(0,n._)("p",null,"Sometimes getting a version number automatically is not what you want. Cocogitto let you specify the target version with the following flags :",-1),v=(0,n.uE)("<li><code>--auto</code> : choose the next version for you (based on feature commit, bug fixes commit and BREAKING_CHANGE commit).</li><li><code>--major</code> : increment the MAJOR version.</li><li><code>--minor</code> : increment the MINOR version.</li><li><code>--patch</code> : increment the PATCH version.</li><li><code>--version &lt;version&gt;</code> : set version manually ( ex : <code>cog bump --version 3.2.1</code>).</li>",5),y=(0,n._)("code",null,"--pre <metadata>",-1),_=(0,n.Uk)(" : set the "),k={href:"https://semver.org/#spec-item-9",target:"_blank",rel:"noopener noreferrer"},w=(0,n.Uk)("pre-release metatada"),q=(0,n.Uk)("."),x=(0,n.uE)('<p><strong>Example:</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="hljs-built_in">cog</span> bump --major --pre <span class="hljs-string">&quot;beta.1&quot;</span>\n<span class="hljs-comment"># 1.2.3 -&gt; 2.0.0-beta.1</span>\n</code></pre></div>',2),A=(0,n.uE)('<p><strong>Note:</strong> <code>cog bump --auto</code> treats <code>0.y.z</code> versions specially, i.e. it will never do an auto bump to the <code>1.0.0</code> version, even if there are breaking changes. That way, you can keep adding features in the development stage and decide yourself, when your API is stable.</p><h3 id="bump-hooks" tabindex="-1"><a class="header-anchor" href="#bump-hooks" aria-hidden="true">#</a> Bump hooks</h3><h4 id="pre-bump-hooks" tabindex="-1"><a class="header-anchor" href="#pre-bump-hooks" aria-hidden="true">#</a> Pre bump hooks</h4><p>Creating git tag automatically is great, but sometimes you need to edit some file with the new version number, or perform some additional checks before doing so.</p><p>A typical example is editing your project manifest in your package manager configuration file. You can run pre bump commands with the <code>latest</code> and <code>version</code> aliases to reference respectively the latest known tag and the target version.</p><p><strong>Example:</strong></p><p>When adding the following hooks to <code>cog.toml</code>, the hook commands will be run before creating the version commit :</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-comment"># cog.toml</span>\n<span class="hljs-attr">pre_bump_hooks</span> = [\n    <span class="hljs-string">&quot;cargo build --release&quot;</span>,\n    <span class="hljs-string">&quot;echo &#39;bumping from {{latest}} to {{version}}&#39;&quot;</span>,\n    <span class="hljs-string">&quot;cargo bump {{version}}&quot;</span>,\n]\n</code></pre></div><p>And result in the following bump:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>❯ <span class="hljs-built_in">cog</span> bump --auto\nSkipping irrelevant commits:\n\nFound feature commit 9055d9\n   Compiling my_awesome_repo v0.1.0 (/home/okno/_Workshop/MyRepos/my_awesome_repo)\n    Finished release [optimized] target(s) in 0.86s\nbump from 0.1.0 to 0.2.0\nBumped version: 0.1.0 -&gt; 0.2.0\n</code></pre></div>',10),E={class:"custom-container tip"},D=(0,n._)("p",{class:"custom-container-title"},"TIP",-1),P=(0,n.Uk)("If any of the pre-bump command fails cocogitto will abort the bump. Any changes made to the repository during the pre-bump phase will be stashed under "),T=(0,n.Uk)("."),H=(0,n.uE)('<p><strong>Example:</strong></p><p>cog.toml :</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-attr">pre_bump_hooks</span> = [\n  <span class="hljs-string">&quot;cargo build --release&quot;</span>,\n  <span class="hljs-string">&quot;echo &#39;bump from {{latest}} to {{version}}&#39;&quot;</span>,\n  <span class="hljs-string">&quot;exit 1&quot;</span> <span class="hljs-comment"># Fail on purpose here</span>\n]\n</code></pre></div><p>run :</p><div class="language-bash ext-sh"><pre class="language-bash"><code>❯ <span class="hljs-built_in">cog</span> bump --auto\nSkipping irrelevant commits:\n\nFound bug fix commit a0de11\n   Compiling my_awesome_repo v0.2.0 (/home/okno/_Workshop/MyRepos/my_awesome_repo)\n    Finished release [optimized] target(s) in 0.22s\nbump from 0.2.0 to 0.2.1\nError: prehook run `exit 1` failed\n\tAll changes made during hook runs have been stashed on `cog_bump_0.2.1`\n\tyou can run `<span class="hljs-built_in">git</span> stash apply stash@0` to restore these changes.\n</code></pre></div>',5),z=(0,n.uE)('<h4 id="post-bump-hooks" tabindex="-1"><a class="header-anchor" href="#post-bump-hooks" aria-hidden="true">#</a> Post bump hooks</h4><p>Post-bump hooks works exactly like pre-bum hooks. They are run after the version has been created and are typically used to push changes to the remote, publish packages and apply branching model strategies.</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-comment"># cog.toml</span>\n<span class="hljs-attr">post_bump_hooks</span> = [\n    <span class="hljs-string">&quot;git push&quot;</span>,\n    <span class="hljs-string">&quot;git push origin {{version}}&quot;</span>,\n    <span class="hljs-string">&quot;cargo publish&quot;</span>\n]\n</code></pre></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>There is no rollback procedure for post-bump hook, on failure cog will abort and leave the repository in an undefined state. We are working on allowing user to define there rollback procedures but it is not there yet.</p></div><h4 id="version-dsl" tabindex="-1"><a class="header-anchor" href="#version-dsl" aria-hidden="true">#</a> Version DSL</h4><p>It is common to bump your development branch version package manifest after creating a new release. A typical example in the java world would be to bump your maven snapshot on your development branch after a release.</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-comment"># cog.toml</span>\n<span class="hljs-attr">post_bump_hooks</span> = [\n    <span class="hljs-string">&quot;git push&quot;</span>,\n    <span class="hljs-string">&quot;git push origin {{version}}&quot;</span>,\n    <span class="hljs-string">&quot;git checkout develop&quot;</span>,\n    <span class="hljs-string">&quot;git rebase master&quot;</span>,\n    <span class="hljs-string">&quot;mvn versions:set -DnewVersion={{version+minor-SNAPSHOT}}&quot;</span>,\n    <span class="hljs-string">&quot;coco chore \\&quot;bump snapshot to {{version+1minor-SNAPSHOT}}\\&quot;&quot;</span>,\n    <span class="hljs-string">&quot;git push&quot;</span>,\n]\n</code></pre></div><p>As you can see we are bumping the manifest using a small DSL. It as only a few keywords :</p><ul><li>start with the <code>version</code> or <code>latest</code> keyword.</li><li>followed by the <code>+</code> operator.</li><li><code>major</code>, <code>minor</code> and <code>patch</code> to specify the kind of increment you want. Then an optional amount, default being one (<code>version+1minor</code> and <code>version+minor</code> being the same).</li><li>followed by any number of <code>+{amount}{kind}</code> (exemple: <code>version+2major+1patch</code>)</li><li>ended by any alphanumeric character (SemVer additional labels for pre-release and build metadata), here <code>-SNAPSHOT</code>.</li></ul><h4 id="bump-profiles" tabindex="-1"><a class="header-anchor" href="#bump-profiles" aria-hidden="true">#</a> Bump profiles</h4><p>For some branching model or release cadence you might want to bump your versions with different hooks.</p><p>To do so you can define alternate profile hooks in <code>cog.toml</code> :</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-section">[bump_profiles.hotfix]</span>\n<span class="hljs-attr">pre_bump_hooks</span> = [\n  <span class="hljs-comment"># Ensure we are performing a bump from the latest release branch</span>\n  <span class="hljs-string">&quot;&quot;&quot;\n    [[ &quot;$(git rev-parse --abbrev-ref HEAD)&quot; == &quot;release/{{latest}}&quot; ]] &amp;&amp; echo &quot;On branch release/{{latest}}&quot; || exit 1\n    &quot;&quot;&quot;</span>,\n]\n\n<span class="hljs-attr">post_bump_hooks</span> = []\n</code></pre></div><p>Once your custom hook profile is set you can call it with the <code>--hook-profile</code> flag :</p><div class="language-bash ext-sh"><pre class="language-bash"><code>❯ <span class="hljs-built_in">cog</span> bump -h hotfix --auto\nSkipping irrelevant commits:\n\nFound feature commit 5b21b3\nFound bug fix commit a0de11\n[[ $(<span class="hljs-built_in">git</span> rev-parse --abbrev-ref HEAD) == release/0.2.0 ]] &amp;&amp; echo On branch release/0.2.0 || exit 1\nOn branch release/0.2.0\nBumped version: 0.2.0 -&gt; 0.3.0\n</code></pre></div><p>Note that for the sake of readability in this documentation, the above example use a oneliner to check the current branch but you would probably want to can a shell script instead :</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-attr">pre_bump_hooks</span> = [\n  <span class="hljs-string">&quot;&quot;&quot;\n    sh -c &quot;./check_branch.sh&quot;\n    &quot;&quot;&quot;</span>,\n]\n</code></pre></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Hooks are run in isolation therefore, <strong>you need to spawn a sub-shell to be able to access your shell environment</strong> :</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-attr">pre_bump_hooks</span> = [ <span class="hljs-string">&quot;echo $HOME&quot;</span> ] <span class="hljs-comment"># This will print &quot;$HOME&quot;</span>\n</code></pre></div><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-attr">pre_bump_hooks</span> = [ <span class="hljs-string">&quot;sh -c \\&quot;echo $HOME\\&quot;&quot;</span> ] <span class="hljs-comment"># This works</span>\n</code></pre></div><p>You can use the <code>&quot;&quot;&quot;</code> syntax to automatically escape quotes:</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-attr">pre_bump_hooks</span> = [\n  <span class="hljs-string">&quot;&quot;&quot;\n    sh -c &quot;echo $HOME&quot;\n    &quot;&quot;&quot;</span>,\n]\n</code></pre></div></div><h2 id="tag-prefix" tabindex="-1"><a class="header-anchor" href="#tag-prefix" aria-hidden="true">#</a> Tag prefix</h2>',19),C=(0,n.Uk)("It is common to use a tag prefix when creating version in your repository. This is described in the "),F={href:"https://semver.org/#is-v123-a-semantic-version",target:"_blank",rel:"noopener noreferrer"},O=(0,n.Uk)("SemVer specification FAQ"),R=(0,n.Uk)(". This convention provide a handy way to distinguish between release versions and tags that does not represent releases."),S=(0,n._)("p",null,[(0,n.Uk)("To tell "),(0,n._)("code",null,"cog"),(0,n.Uk)(" to pick only version starting with a prefix set this in your "),(0,n._)("code",null,"cog.toml"),(0,n.Uk)(" file :")],-1),I=(0,n._)("div",{class:"language-toml ext-toml"},[(0,n._)("pre",{class:"language-toml"},[(0,n._)("code",null,[(0,n._)("span",{class:"hljs-attr"},"tag_prefix"),(0,n.Uk)(" = "),(0,n._)("span",{class:"hljs-string"},'"v"'),(0,n.Uk)("\n")])])],-1),N={},U=(0,a(3744).Z)(N,[["render",function(s,e){const a=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[o,(0,n._)("p",null,[(0,n._)("a",l,[i,(0,n.Wm)(a)])]),c,(0,n._)("img",{src:s.$withBase("github-release-changelog.png"),alt:"Github release changelog screenshot"},null,8,r),p,(0,n._)("p",null,[h,(0,n._)("a",u,[d,(0,n.Wm)(a)]),m]),g,(0,n._)("div",b,[f,j,(0,n._)("ul",null,[v,(0,n._)("li",null,[y,_,(0,n._)("a",k,[w,(0,n.Wm)(a)]),q])]),x]),A,(0,n._)("div",E,[D,(0,n._)("p",null,[P,(0,n._)("code",null,"cog_bump_"+(0,t.zw)(s.version),1),T]),H]),z,(0,n._)("p",null,[C,(0,n._)("a",F,[O,(0,n.Wm)(a)]),R]),S,I],64)}]])},3744:(s,e)=>{e.Z=(s,e)=>{const a=s.__vccOpts||s;for(const[s,n]of e)a[s]=n;return a}},8687:(s,e,a)=>{a.r(e),a.d(e,{data:()=>n});const n={key:"v-94d140a0",path:"/cog_guide/",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Repository initialization",slug:"repository-initialization",children:[{level:3,title:"Create a new repository",slug:"create-a-new-repository",children:[]},{level:3,title:"Initialize an existing repo",slug:"initialize-an-existing-repo",children:[]}]},{level:2,title:"Check commit history",slug:"check-commit-history",children:[]},{level:2,title:"Rewrite non-compliant commits",slug:"rewrite-non-compliant-commits",children:[]},{level:2,title:"Conventional commit log",slug:"conventional-commit-log",children:[]},{level:2,title:"Changelogs",slug:"changelogs",children:[{level:3,title:"Built-in templates",slug:"built-in-templates",children:[]},{level:3,title:"Custom templates",slug:"custom-templates",children:[]}]},{level:2,title:"Automatic versioning",slug:"automatic-versioning",children:[{level:3,title:"Auto bump",slug:"auto-bump",children:[]},{level:3,title:"Bump hooks",slug:"bump-hooks",children:[]}]},{level:2,title:"Tag prefix",slug:"tag-prefix",children:[]}],filePathRelative:"cog_guide/README.md",git:{updatedTime:1637750134e3,contributors:[{name:"Paul Delafosse",email:"paul.delafosse@protonmail.com",commits:11}]}}}}]);