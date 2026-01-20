import Link from "next/link";

export default function HomeZh() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-emerald-400">Termius SSH 指南</h1>
          <Link href="/" className="text-sm text-slate-400 hover:text-white transition-colors">
            English
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            如何使用 Termius 连接 Linux 服务器
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            一份完整的指南，教你如何使用 Termius（一款支持多平台的现代 SSH 客户端）连接到你的 Linux 服务器。
          </p>
        </section>

        {/* What is Termius - Enhanced */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-emerald-400 mb-4">什么是 Termius？</h3>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 space-y-4">
            <p className="text-slate-300 leading-relaxed">
              Termius 是一款现代化的跨平台 SSH 客户端，支持 Windows、macOS、Linux、iOS 和 Android。
              与仅限于桌面环境的传统工具不同，Termius 在所有设备上提供无缝的远程管理体验。
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-slate-700/30 rounded-lg p-4">
                <h4 className="font-semibold text-cyan-400 mb-2">支持的协议</h4>
                <p className="text-slate-400 text-sm">SSH、SFTP、Mosh 和 Telnet</p>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-4">
                <h4 className="font-semibold text-cyan-400 mb-2">安全性</h4>
                <p className="text-slate-400 text-sm">AES-256 加密保险库、ECDSA、ed25519 密钥、FIDO2 支持</p>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-4">
                <h4 className="font-semibold text-cyan-400 mb-2">生产力</h4>
                <p className="text-slate-400 text-sm">多标签界面、分屏视图、自动补全建议</p>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-4">
                <h4 className="font-semibold text-cyan-400 mb-2">云同步</h4>
                <p className="text-slate-400 text-sm">在无限设备间同步连接和凭据</p>
              </div>
            </div>
          </div>
        </section>

        {/* Prerequisites */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-emerald-400 mb-4">前提条件</h3>
          <ul className="space-y-3">
            {[
              "一台已启用 SSH 的 Linux 服务器（端口 22 已开放）",
              "服务器的 IP 地址或主机名",
              "用户名和密码，或 SSH 私钥",
              "已安装 Termius 应用",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-sm font-bold text-slate-900">
                  {i + 1}
                </span>
                <span className="text-slate-300">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Step 1: Install Termius */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-xl font-bold text-slate-900">1</span>
            <h3 className="text-2xl font-bold text-white">下载并安装 Termius</h3>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 space-y-4">
            <p className="text-slate-300">
              从官方网站或应用商店下载 Termius：
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { platform: "Windows/macOS/Linux", link: "termius.com/download" },
                { platform: "iOS", link: "App Store" },
                { platform: "Android", link: "Google Play 商店" },
              ].map((item) => (
                <div key={item.platform} className="bg-slate-700/50 rounded-lg p-4">
                  <p className="font-semibold text-emerald-400">{item.platform}</p>
                  <p className="text-slate-400 text-sm">{item.link}</p>
                </div>
              ))}
            </div>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mt-4">
              <p className="text-blue-300 text-sm">
                <strong>免费版 vs 专业版：</strong>免费版包含基础 SSH 和主机管理功能。
                专业版增加 SFTP、云同步、代码片段和端口转发功能。
              </p>
            </div>
          </div>
        </section>

        {/* Step 2: Create New Host */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-xl font-bold text-slate-900">2</span>
            <h3 className="text-2xl font-bold text-white">创建新主机</h3>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 space-y-4">
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="text-emerald-400 font-mono">a.</span>
                <span className="text-slate-300">打开 Termius，点击 <code className="bg-slate-700 px-2 py-1 rounded text-emerald-400">+ New Host</code>（新建主机）按钮</span>
              </li>
              <li className="flex gap-4">
                <span className="text-emerald-400 font-mono">b.</span>
                <span className="text-slate-300">输入一个便于识别的标签（例如"我的 Linux 服务器"）</span>
              </li>
              <li className="flex gap-4">
                <span className="text-emerald-400 font-mono">c.</span>
                <span className="text-slate-300">在 <code className="bg-slate-700 px-2 py-1 rounded text-emerald-400">Address</code>（地址）字段中输入服务器的 IP 地址或主机名</span>
              </li>
              <li className="flex gap-4">
                <span className="text-emerald-400 font-mono">d.</span>
                <span className="text-slate-300">设置端口（默认为 <code className="bg-slate-700 px-2 py-1 rounded text-emerald-400">22</code>）</span>
              </li>
              <li className="flex gap-4">
                <span className="text-emerald-400 font-mono">e.</span>
                <span className="text-slate-300">可选：添加标签并分配到分组以便于管理</span>
              </li>
            </ol>
          </div>
        </section>

        {/* Step 3: Configure Authentication */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-xl font-bold text-slate-900">3</span>
            <h3 className="text-2xl font-bold text-white">配置身份认证</h3>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 space-y-6">
            {/* Password Auth */}
            <div>
              <h4 className="text-lg font-semibold text-cyan-400 mb-3">方式 A：密码认证</h4>
              <ol className="space-y-2 text-slate-300">
                <li>1. 在 <code className="bg-slate-700 px-2 py-1 rounded text-emerald-400">Username</code>（用户名）字段中输入用户名</li>
                <li>2. 在 <code className="bg-slate-700 px-2 py-1 rounded text-emerald-400">Password</code>（密码）字段中输入密码</li>
                <li>3. 点击 <code className="bg-slate-700 px-2 py-1 rounded text-emerald-400">Save</code>（保存）</li>
              </ol>
            </div>

            {/* Key Auth */}
            <div className="border-t border-slate-600 pt-6">
              <h4 className="text-lg font-semibold text-cyan-400 mb-3">方式 B：SSH 密钥认证（推荐）</h4>
              <ol className="space-y-2 text-slate-300">
                <li>1. 输入用户名</li>
                <li>2. 点击 <code className="bg-slate-700 px-2 py-1 rounded text-emerald-400">Keys</code>（密钥）部分</li>
                <li>3. 点击 <code className="bg-slate-700 px-2 py-1 rounded text-emerald-400">+ Add Key</code>（添加密钥）</li>
                <li>4. 生成新的密钥对，或导入已有的私钥</li>
                <li>5. 如果是新生成的密钥，将公钥复制到服务器的 <code className="bg-slate-700 px-2 py-1 rounded text-emerald-400">~/.ssh/authorized_keys</code> 文件中</li>
                <li>6. 点击 <code className="bg-slate-700 px-2 py-1 rounded text-emerald-400">Save</code>（保存）</li>
              </ol>
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 mt-4">
                <p className="text-emerald-300 text-sm">
                  <strong>提示：</strong>推荐使用 ed25519 密钥以获得更好的安全性。虽然密钥更短，但由于采用更复杂的算法，安全性与 4096 位 RSA 密钥相当。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Step 4: Connect */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-xl font-bold text-slate-900">4</span>
            <h3 className="text-2xl font-bold text-white">连接到服务器</h3>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 space-y-4">
            <ol className="space-y-4 text-slate-300">
              <li className="flex gap-4">
                <span className="text-emerald-400 font-mono">a.</span>
                <span>在 Termius 主机列表中找到已保存的主机</span>
              </li>
              <li className="flex gap-4">
                <span className="text-emerald-400 font-mono">b.</span>
                <span>双击或点击以连接</span>
              </li>
              <li className="flex gap-4">
                <span className="text-emerald-400 font-mono">c.</span>
                <span>首次连接时，系统会要求你验证服务器指纹 - 点击 <code className="bg-slate-700 px-2 py-1 rounded text-emerald-400">Accept</code>（接受）</span>
              </li>
              <li className="flex gap-4">
                <span className="text-emerald-400 font-mono">d.</span>
                <span>连接成功！你应该能看到 Linux 终端提示符</span>
              </li>
            </ol>

            {/* Terminal mockup */}
            <div className="mt-6 bg-slate-900 rounded-lg p-4 font-mono text-sm">
              <div className="flex gap-2 mb-3">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              </div>
              <p className="text-green-400">Welcome to Ubuntu 22.04.3 LTS</p>
              <p className="text-slate-400">Last login: Mon Jan 20 10:30:45 2025 from 192.168.1.100</p>
              <p className="text-slate-300"><span className="text-emerald-400">user@server</span>:<span className="text-cyan-400">~</span>$ <span className="animate-pulse">_</span></p>
            </div>
          </div>
        </section>

        {/* Advanced Features - NEW SECTION */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-emerald-400 mb-4">高级功能</h3>

          {/* Port Forwarding */}
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-4">
            <h4 className="text-xl font-semibold text-white mb-4">端口转发</h4>
            <p className="text-slate-300 mb-4">Termius 提供分步向导帮助你设置端口转发：</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-slate-700/30 rounded-lg p-4">
                <h5 className="font-semibold text-cyan-400 mb-2">本地转发</h5>
                <p className="text-slate-400 text-sm">在本地访问远程服务器的端口。例如：将 MySQL 的 3306 端口转发到本地。</p>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-4">
                <h5 className="font-semibold text-cyan-400 mb-2">远程转发</h5>
                <p className="text-slate-400 text-sm">在远程机器上开放端口，转发到本地设备。</p>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-4">
                <h5 className="font-semibold text-cyan-400 mb-2">动态转发</h5>
                <p className="text-slate-400 text-sm">创建 SOCKS 代理，通过一个隧道访问多个服务。</p>
              </div>
            </div>
          </div>

          {/* Snippets */}
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-4">
            <h4 className="text-xl font-semibold text-white mb-4">代码片段</h4>
            <p className="text-slate-300 mb-4">保存并复用命令序列，减少重复操作：</p>
            <ul className="space-y-2 text-slate-300">
              <li className="flex gap-2">
                <span className="text-emerald-400">•</span>
                <span>使用<strong>变量</strong>创建灵活的参数化代码片段</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-400">•</span>
                <span>使用<strong>片段包</strong>进行分组管理</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-400">•</span>
                <span>将代码片段绑定到主机，连接时自动执行</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-400">•</span>
                <span>使用 <strong>AI 功能</strong>从描述生成 Shell 脚本</span>
              </li>
            </ul>
            <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm mt-4">
              <p className="text-slate-400"># 带变量的代码片段示例</p>
              <p className="text-slate-300">docker logs -f <span className="text-yellow-400">{"{{container_name}}"}</span></p>
            </div>
          </div>

          {/* SFTP */}
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-4">
            <h4 className="text-xl font-semibold text-white mb-4">SFTP 文件传输</h4>
            <p className="text-slate-300 mb-4">在本地和远程服务器之间传输文件：</p>
            <ul className="space-y-2 text-slate-300">
              <li className="flex gap-2">
                <span className="text-emerald-400">•</span>
                <span>拖放界面，轻松传输文件</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-400">•</span>
                <span>同时运行两个 SFTP 连接</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-400">•</span>
                <span>在两台远程主机之间直接传输文件</span>
              </li>
            </ul>
          </div>

          {/* Jump Hosts */}
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <h4 className="text-xl font-semibold text-white mb-4">跳板机（堡垒机）</h4>
            <p className="text-slate-300 mb-4">
              使用<strong>主机链</strong>功能通过中间服务器连接。
              这与 <code className="bg-slate-700 px-2 py-1 rounded text-emerald-400">ssh -J</code> 或 ProxyJump 功能相同。
            </p>
          </div>
        </section>

        {/* SSH Security Best Practices - NEW SECTION */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-emerald-400 mb-4">SSH 安全最佳实践</h3>
          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h4 className="font-semibold text-white mb-3">身份认证</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>使用 SSH 密钥认证代替密码</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>优先使用 <strong>ed25519</strong> 密钥 - 更短但与 4096 位 RSA 同等安全</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>启用双因素认证（2FA），如 Google Authenticator 或 Duo</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>每 1-2 年轮换 SSH 密钥</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h4 className="font-semibold text-white mb-3">访问控制</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>禁用 root 登录 - 改用 sudo（<code className="bg-slate-700 px-1 rounded text-emerald-400">PermitRootLogin no</code>）</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>使用 <code className="bg-slate-700 px-1 rounded text-emerald-400">AllowUsers</code> 或 <code className="bg-slate-700 px-1 rounded text-emerald-400">AllowGroups</code> 限制 SSH 访问</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>通过防火墙限制特定 IP 地址访问</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>使用 <strong>fail2ban</strong> 阻止暴力破解尝试</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h4 className="font-semibold text-white mb-3">连接安全</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>修改默认端口 22 以减少自动化攻击</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>设置空闲超时以断开不活跃的会话</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>使用强加密算法：<code className="bg-slate-700 px-1 rounded text-emerald-400">aes256-gcm</code> 或 <code className="bg-slate-700 px-1 rounded text-emerald-400">chacha20-poly1305</code></span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>保持 SSH 软件更新以获取安全补丁</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pro Tips - Enhanced */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-emerald-400 mb-4">实用技巧</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "分组与标签",
                desc: "按项目、环境（生产/开发）或区域组织服务器，快速访问"
              },
              {
                title: "多标签与分屏",
                desc: "使用标签和分屏视图同时处理多个会话"
              },
              {
                title: "自动补全",
                desc: "启用命令、参数和文件路径的自动补全以节省时间"
              },
              {
                title: "团队共享",
                desc: "通过保险库与团队共享主机、密钥、身份和代码片段"
              },
              {
                title: "云集成",
                desc: "与 AWS 和 DigitalOcean 集成，无缝管理云服务器"
              },
              {
                title: "Mosh 支持",
                desc: "在移动网络中使用 Mosh - 比 SSH 更好地处理间歇性连接"
              },
            ].map((tip) => (
              <div key={tip.title} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h4 className="font-semibold text-cyan-400 mb-2">{tip.title}</h4>
                <p className="text-slate-400 text-sm">{tip.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mobile SSH Clients - NEW SECTION */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-emerald-400 mb-4">手机 SSH 客户端推荐</h3>
          <p className="text-slate-300 mb-6">
            除了 Termius，还有许多优秀的手机 SSH 客户端应用。以下是各平台最佳选择的对比：
          </p>

          {/* iOS Apps */}
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-4">
            <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">📱</span> iOS (iPhone/iPad)
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-600">
                    <th className="text-left py-3 px-2 text-cyan-400">应用</th>
                    <th className="text-left py-3 px-2 text-cyan-400">特点</th>
                    <th className="text-left py-3 px-2 text-cyan-400">价格</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-700">
                    <td className="py-3 px-2 font-semibold text-emerald-400">Termius</td>
                    <td className="py-3 px-2">跨平台同步、SSH/SFTP/Mosh/Telnet、端口转发、代码片段</td>
                    <td className="py-3 px-2">免费 + 订阅</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-3 px-2 font-semibold text-emerald-400">Blink Shell</td>
                    <td className="py-3 px-2">专业终端、Mosh 支持、蓝牙键盘优化、Vim/Emacs 友好</td>
                    <td className="py-3 px-2">$19.99</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-3 px-2 font-semibold text-emerald-400">Prompt 3</td>
                    <td className="py-3 px-2">Panic 出品、Mac/iOS 同步、FaceID/YubiKey 支持</td>
                    <td className="py-3 px-2">一次性购买</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-3 px-2 font-semibold text-emerald-400">ShellFish</td>
                    <td className="py-3 px-2">高速 SSH、拖放文件、iOS 文件集成</td>
                    <td className="py-3 px-2">$2.99/月 或 $29.99</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-3 px-2 font-semibold text-emerald-400">ServerCat</td>
                    <td className="py-3 px-2">服务器监控 + SSH、Docker 管理、系统资源监控</td>
                    <td className="py-3 px-2">免费 + 订阅</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2 font-semibold text-emerald-400">WebSSH</td>
                    <td className="py-3 px-2">简单实用、SSH/SFTP/端口转发</td>
                    <td className="py-3 px-2">$12.99 买断</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
              <p className="text-blue-300 text-sm"><strong>免费选择：</strong>a-Shell、iSH Shell</p>
            </div>
          </div>

          {/* Android Apps */}
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-4">
            <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">🤖</span> Android
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-600">
                    <th className="text-left py-3 px-2 text-cyan-400">应用</th>
                    <th className="text-left py-3 px-2 text-cyan-400">特点</th>
                    <th className="text-left py-3 px-2 text-cyan-400">价格</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-700">
                    <td className="py-3 px-2 font-semibold text-emerald-400">Termius</td>
                    <td className="py-3 px-2">跨平台同步、企业级功能、SFTP、ed25519 密钥支持</td>
                    <td className="py-3 px-2">免费 + 订阅</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-3 px-2 font-semibold text-emerald-400">JuiceSSH</td>
                    <td className="py-3 px-2">界面美观、无广告、多主题、脚本支持</td>
                    <td className="py-3 px-2">免费 + 付费升级</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-3 px-2 font-semibold text-emerald-400">ConnectBot</td>
                    <td className="py-3 px-2">开源免费、轻量级、持续更新（2025）、无广告</td>
                    <td className="py-3 px-2">免费</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-3 px-2 font-semibold text-emerald-400">Termux</td>
                    <td className="py-3 px-2">完整 Linux 环境、1500+ 软件包、pkg 包管理器</td>
                    <td className="py-3 px-2">免费（开源）</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2 font-semibold text-emerald-400">Royal TSX</td>
                    <td className="py-3 px-2">多协议支持 (RDP/VNC/SSH)、团队共享、凭据管理</td>
                    <td className="py-3 px-2">订阅制</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-xl p-6 border border-emerald-500/20">
            <h4 className="text-lg font-semibold text-white mb-4">按需求推荐</h4>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { useCase: "跨平台同步", app: "Termius", note: "iOS/Android/Mac/Windows/Linux" },
                { useCase: "iOS 专业用户", app: "Blink Shell", note: "最佳键盘支持" },
                { useCase: "Android 免费开源", app: "ConnectBot", note: "持续维护中" },
                { useCase: "Android 极客用户", app: "Termux", note: "完整 Linux 环境" },
                { useCase: "服务器监控 + SSH", app: "ServerCat", note: "仅限 iOS" },
                { useCase: "简单偶尔使用", app: "WebSSH / JuiceSSH", note: "易于上手" },
              ].map((item) => (
                <div key={item.useCase} className="flex items-start gap-3">
                  <span className="text-emerald-400">→</span>
                  <div>
                    <span className="text-white font-medium">{item.useCase}：</span>
                    <span className="text-cyan-400">{item.app}</span>
                    <span className="text-slate-400 text-sm">（{item.note}）</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Troubleshooting - Enhanced */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-emerald-400 mb-4">常见问题排查</h3>
          <div className="space-y-4">
            {[
              {
                problem: "连接被拒绝",
                solution: "确保 SSH 服务正在运行：systemctl status sshd。检查防火墙：ufw allow 22 或 firewall-cmd --add-service=ssh"
              },
              {
                problem: "权限被拒绝（publickey）",
                solution: "检查密钥权限：chmod 600 ~/.ssh/id_ed25519 和 chmod 700 ~/.ssh。确认服务器上的 authorized_keys 文件。"
              },
              {
                problem: "连接超时",
                solution: "确认 IP/主机名正确。用 ping 检查服务器是否可达。确保没有网络防火墙阻止 22 端口。"
              },
              {
                problem: "主机密钥验证失败",
                solution: "服务器密钥已更改（重装或 IP 复用）。删除旧密钥：ssh-keygen -R hostname，然后重新连接。"
              },
              {
                problem: "认证失败次数过多",
                solution: "SSH 代理加载了太多密钥。明确指定密钥或使用 ssh-add -D 清除代理。"
              },
            ].map((item) => (
              <div key={item.problem} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h4 className="font-semibold text-red-400 mb-2">{item.problem}</h4>
                <p className="text-slate-300 text-sm">{item.solution}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section className="text-center bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-xl p-8 border border-emerald-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">大功告成！</h3>
          <p className="text-slate-300 max-w-xl mx-auto">
            现在你可以使用 Termius 安全地连接到你的 Linux 服务器了。
            探索 SFTP、端口转发、代码片段和跳板机等高级功能，提升你的工作效率。
          </p>
        </section>

        {/* Sources */}
        <section className="mt-12 pt-8 border-t border-slate-700">
          <h4 className="text-lg font-semibold text-slate-400 mb-4">参考资料</h4>
          <ul className="space-y-2 text-sm text-slate-500">
            <li><a href="https://termius.com/documentation" className="hover:text-emerald-400 transition-colors">Termius 官方文档</a></li>
            <li><a href="https://www.techrepublic.com/article/how-to-use-termius-ssh/" className="hover:text-emerald-400 transition-colors">TechRepublic - 如何使用 Termius</a></li>
            <li><a href="https://www.cyberciti.biz/tips/linux-unix-bsd-openssh-server-best-practices.html" className="hover:text-emerald-400 transition-colors">nixCraft - OpenSSH 服务器最佳实践</a></li>
            <li><a href="https://www.brandonchecketts.com/archives/ssh-ed25519-key-best-practices-for-2025" className="hover:text-emerald-400 transition-colors">SSH 密钥最佳实践 2025</a></li>
            <li><a href="https://geekflare.com/dev/best-terminals-ssh-apps/" className="hover:text-emerald-400 transition-colors">Geekflare - iOS 最佳 SSH 应用</a></li>
            <li><a href="https://theserverhost.com/blog/post/best-ssh-client-for-android" className="hover:text-emerald-400 transition-colors">TheServerHost - Android 最佳 SSH 客户端</a></li>
            <li><a href="https://blink.sh/" className="hover:text-emerald-400 transition-colors">Blink Shell 官网</a></li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center text-slate-400">
          <p>Termius SSH 指南 - 使用 Next.js 构建</p>
        </div>
      </footer>
    </div>
  );
}
