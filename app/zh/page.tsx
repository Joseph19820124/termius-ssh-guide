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

        {/* What is Termius */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-emerald-400 mb-4">什么是 Termius？</h3>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <p className="text-slate-300 leading-relaxed">
              Termius 是一款现代化的跨平台 SSH 客户端，支持 Windows、macOS、Linux、iOS 和 Android。
              它提供简洁的界面来管理 SSH 连接，支持密钥认证，并具有 SFTP 文件传输、端口转发和跨设备同步等功能。
            </p>
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

        {/* Tips */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-emerald-400 mb-4">实用技巧</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "使用分组",
                desc: "将多个服务器整理成分组，便于管理"
              },
              {
                title: "SFTP 支持",
                desc: "使用内置的 SFTP 功能在本地和服务器之间传输文件"
              },
              {
                title: "端口转发",
                desc: "设置本地或远程端口转发，实现安全隧道"
              },
              {
                title: "代码片段",
                desc: "将常用命令保存为代码片段，方便快速访问"
              },
            ].map((tip) => (
              <div key={tip.title} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h4 className="font-semibold text-cyan-400 mb-2">{tip.title}</h4>
                <p className="text-slate-400 text-sm">{tip.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-emerald-400 mb-4">常见问题排查</h3>
          <div className="space-y-4">
            {[
              {
                problem: "连接被拒绝",
                solution: "确保服务器上 SSH 服务正在运行（systemctl status sshd），并且防火墙已开放 22 端口"
              },
              {
                problem: "权限被拒绝",
                solution: "检查用户名/密码是否正确，或确认 SSH 密钥已添加到 authorized_keys 文件"
              },
              {
                problem: "连接超时",
                solution: "确认 IP 地址正确，且服务器可达（尝试 ping 测试）"
              },
              {
                problem: "主机密钥验证失败",
                solution: "服务器密钥已更改 - 确认这是预期的更改后，从 known_hosts 文件中删除旧密钥"
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
            探索应用的更多功能，如 SFTP、端口转发和代码片段，提升你的工作效率。
          </p>
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
