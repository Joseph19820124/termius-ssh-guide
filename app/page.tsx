import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-emerald-400">Termius SSH Guide</h1>
          <Link href="/zh" className="text-sm text-slate-400 hover:text-white transition-colors">
            中文
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            How to Use Termius to SSH into a Linux Server
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A complete guide to connecting to your Linux server using Termius - the modern SSH client for all platforms.
          </p>
        </section>

        {/* What is Termius - Enhanced */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-emerald-400 mb-4">What is Termius?</h3>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 space-y-4">
            <p className="text-slate-300 leading-relaxed">
              Termius is a modern, cross-platform SSH client that works on Windows, macOS, Linux, iOS, and Android.
              Unlike legacy tools limited to desktop environments, Termius provides a seamless remote management experience across all your devices.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-slate-700/30 rounded-lg p-4">
                <h4 className="font-semibold text-cyan-400 mb-2">Protocols Supported</h4>
                <p className="text-slate-400 text-sm">SSH, SFTP, Mosh, and Telnet</p>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-4">
                <h4 className="font-semibold text-cyan-400 mb-2">Security</h4>
                <p className="text-slate-400 text-sm">AES-256 encrypted vault, ECDSA, ed25519 keys, FIDO2 support</p>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-4">
                <h4 className="font-semibold text-cyan-400 mb-2">Productivity</h4>
                <p className="text-slate-400 text-sm">Multi-tab interface, split-view, autocomplete suggestions</p>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-4">
                <h4 className="font-semibold text-cyan-400 mb-2">Cloud Sync</h4>
                <p className="text-slate-400 text-sm">Sync connections and credentials across unlimited devices</p>
              </div>
            </div>
          </div>
        </section>

        {/* Prerequisites */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-emerald-400 mb-4">Prerequisites</h3>
          <ul className="space-y-3">
            {[
              "A Linux server with SSH enabled (port 22 open)",
              "Server IP address or hostname",
              "Username and password, or SSH private key",
              "Termius installed on your device",
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
            <h3 className="text-2xl font-bold text-white">Download and Install Termius</h3>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 space-y-4">
            <p className="text-slate-300">
              Download Termius from the official website or your platform&apos;s app store:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { platform: "Windows/macOS/Linux", link: "termius.com/download" },
                { platform: "iOS", link: "App Store" },
                { platform: "Android", link: "Google Play Store" },
              ].map((item) => (
                <div key={item.platform} className="bg-slate-700/50 rounded-lg p-4">
                  <p className="font-semibold text-emerald-400">{item.platform}</p>
                  <p className="text-slate-400 text-sm">{item.link}</p>
                </div>
              ))}
            </div>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mt-4">
              <p className="text-blue-300 text-sm">
                <strong>Free vs Pro:</strong> The free plan includes basic SSH and host management.
                Pro adds SFTP, cloud sync, snippets, and port forwarding features.
              </p>
            </div>
          </div>
        </section>

        {/* Step 2: Create New Host */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-xl font-bold text-slate-900">2</span>
            <h3 className="text-2xl font-bold text-white">Create a New Host</h3>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 space-y-4">
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="text-emerald-400 font-mono">a.</span>
                <span className="text-slate-300">Open Termius and click the <code className="bg-slate-700 px-2 py-1 rounded text-emerald-400">+ New Host</code> button</span>
              </li>
              <li className="flex gap-4">
                <span className="text-emerald-400 font-mono">b.</span>
                <span className="text-slate-300">Enter a friendly label for your server (e.g., &quot;My Linux Server&quot;)</span>
              </li>
              <li className="flex gap-4">
                <span className="text-emerald-400 font-mono">c.</span>
                <span className="text-slate-300">Enter the server&apos;s IP address or hostname in the <code className="bg-slate-700 px-2 py-1 rounded text-emerald-400">Address</code> field</span>
              </li>
              <li className="flex gap-4">
                <span className="text-emerald-400 font-mono">d.</span>
                <span className="text-slate-300">Set the port (default is <code className="bg-slate-700 px-2 py-1 rounded text-emerald-400">22</code>)</span>
              </li>
              <li className="flex gap-4">
                <span className="text-emerald-400 font-mono">e.</span>
                <span className="text-slate-300">Optionally add tags and assign to a group for organization</span>
              </li>
            </ol>
          </div>
        </section>

        {/* Step 3: Configure Authentication */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-xl font-bold text-slate-900">3</span>
            <h3 className="text-2xl font-bold text-white">Configure Authentication</h3>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 space-y-6">
            {/* Password Auth */}
            <div>
              <h4 className="text-lg font-semibold text-cyan-400 mb-3">Option A: Password Authentication</h4>
              <ol className="space-y-2 text-slate-300">
                <li>1. Enter your username in the <code className="bg-slate-700 px-2 py-1 rounded text-emerald-400">Username</code> field</li>
                <li>2. Enter your password in the <code className="bg-slate-700 px-2 py-1 rounded text-emerald-400">Password</code> field</li>
                <li>3. Click <code className="bg-slate-700 px-2 py-1 rounded text-emerald-400">Save</code></li>
              </ol>
            </div>

            {/* Key Auth */}
            <div className="border-t border-slate-600 pt-6">
              <h4 className="text-lg font-semibold text-cyan-400 mb-3">Option B: SSH Key Authentication (Recommended)</h4>
              <ol className="space-y-2 text-slate-300">
                <li>1. Enter your username</li>
                <li>2. Click on the <code className="bg-slate-700 px-2 py-1 rounded text-emerald-400">Keys</code> section</li>
                <li>3. Click <code className="bg-slate-700 px-2 py-1 rounded text-emerald-400">+ Add Key</code></li>
                <li>4. Either generate a new key pair or import your existing private key</li>
                <li>5. If generating new keys, copy the public key to your server&apos;s <code className="bg-slate-700 px-2 py-1 rounded text-emerald-400">~/.ssh/authorized_keys</code></li>
                <li>6. Click <code className="bg-slate-700 px-2 py-1 rounded text-emerald-400">Save</code></li>
              </ol>
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 mt-4">
                <p className="text-emerald-300 text-sm">
                  <strong>Tip:</strong> Use ed25519 keys for better security. They&apos;re shorter but as secure as 4096-bit RSA keys due to a more complex algorithm.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Step 4: Connect */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-xl font-bold text-slate-900">4</span>
            <h3 className="text-2xl font-bold text-white">Connect to Your Server</h3>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 space-y-4">
            <ol className="space-y-4 text-slate-300">
              <li className="flex gap-4">
                <span className="text-emerald-400 font-mono">a.</span>
                <span>Find your saved host in the Termius hosts list</span>
              </li>
              <li className="flex gap-4">
                <span className="text-emerald-400 font-mono">b.</span>
                <span>Double-click or tap to connect</span>
              </li>
              <li className="flex gap-4">
                <span className="text-emerald-400 font-mono">c.</span>
                <span>On first connection, you&apos;ll be asked to verify the server&apos;s fingerprint - click <code className="bg-slate-700 px-2 py-1 rounded text-emerald-400">Accept</code></span>
              </li>
              <li className="flex gap-4">
                <span className="text-emerald-400 font-mono">d.</span>
                <span>You&apos;re now connected! You should see the Linux terminal prompt</span>
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
          <h3 className="text-2xl font-bold text-emerald-400 mb-4">Advanced Features</h3>

          {/* Port Forwarding */}
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-4">
            <h4 className="text-xl font-semibold text-white mb-4">Port Forwarding</h4>
            <p className="text-slate-300 mb-4">Termius provides a step-by-step wizard to set up port forwarding:</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-slate-700/30 rounded-lg p-4">
                <h5 className="font-semibold text-cyan-400 mb-2">Local Forwarding</h5>
                <p className="text-slate-400 text-sm">Access a remote server&apos;s port locally. Example: Forward MySQL port 3306 to your machine.</p>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-4">
                <h5 className="font-semibold text-cyan-400 mb-2">Remote Forwarding</h5>
                <p className="text-slate-400 text-sm">Open a port on remote machine to forward to your local device.</p>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-4">
                <h5 className="font-semibold text-cyan-400 mb-2">Dynamic Forwarding</h5>
                <p className="text-slate-400 text-sm">Create a SOCKS proxy to access multiple services through one tunnel.</p>
              </div>
            </div>
          </div>

          {/* Snippets */}
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-4">
            <h4 className="text-xl font-semibold text-white mb-4">Snippets</h4>
            <p className="text-slate-300 mb-4">Save and reuse command sequences to reduce repetitive tasks:</p>
            <ul className="space-y-2 text-slate-300">
              <li className="flex gap-2">
                <span className="text-emerald-400">•</span>
                <span>Create snippets with <strong>variables</strong> for flexible parameters</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-400">•</span>
                <span>Organize into <strong>Snippet Packages</strong> for better management</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-400">•</span>
                <span>Auto-run snippets on connection by attaching to hosts</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-400">•</span>
                <span>Use <strong>AI-powered</strong> shell script generation from descriptions</span>
              </li>
            </ul>
            <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm mt-4">
              <p className="text-slate-400"># Example snippet with variable</p>
              <p className="text-slate-300">docker logs -f <span className="text-yellow-400">{"{{container_name}}"}</span></p>
            </div>
          </div>

          {/* SFTP */}
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-4">
            <h4 className="text-xl font-semibold text-white mb-4">SFTP File Transfer</h4>
            <p className="text-slate-300 mb-4">Transfer files between your local machine and remote servers:</p>
            <ul className="space-y-2 text-slate-300">
              <li className="flex gap-2">
                <span className="text-emerald-400">•</span>
                <span>Drag-and-drop interface for easy file transfers</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-400">•</span>
                <span>Run two SFTP connections simultaneously</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-400">•</span>
                <span>Transfer files directly between two remote hosts</span>
              </li>
            </ul>
          </div>

          {/* Jump Hosts */}
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <h4 className="text-xl font-semibold text-white mb-4">Jump Hosts (Bastion)</h4>
            <p className="text-slate-300 mb-4">
              Connect through intermediate servers using the <strong>Host Chain</strong> feature.
              This provides the same functionality as <code className="bg-slate-700 px-2 py-1 rounded text-emerald-400">ssh -J</code> or ProxyJump.
            </p>
          </div>
        </section>

        {/* SSH Security Best Practices - NEW SECTION */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-emerald-400 mb-4">SSH Security Best Practices</h3>
          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h4 className="font-semibold text-white mb-3">Authentication</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Use SSH key authentication instead of passwords</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Prefer <strong>ed25519</strong> keys - shorter but equally secure as 4096-bit RSA</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Enable two-factor authentication (2FA) with Google Authenticator or Duo</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Rotate SSH keys every 1-2 years</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h4 className="font-semibold text-white mb-3">Access Control</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Disable root login - use sudo instead (<code className="bg-slate-700 px-1 rounded text-emerald-400">PermitRootLogin no</code>)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Use <code className="bg-slate-700 px-1 rounded text-emerald-400">AllowUsers</code> or <code className="bg-slate-700 px-1 rounded text-emerald-400">AllowGroups</code> to limit SSH access</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Restrict access to specific IP addresses via firewall</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Use <strong>fail2ban</strong> to block brute-force attempts</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h4 className="font-semibold text-white mb-3">Connection Security</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Change default port 22 to reduce automated attacks</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Set idle timeout to disconnect inactive sessions</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Use strong ciphers: <code className="bg-slate-700 px-1 rounded text-emerald-400">aes256-gcm</code> or <code className="bg-slate-700 px-1 rounded text-emerald-400">chacha20-poly1305</code></span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Keep SSH software updated for security patches</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pro Tips - Enhanced */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-emerald-400 mb-4">Pro Tips</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Use Groups & Tags",
                desc: "Organize servers by project, environment (prod/dev), or region for quick access"
              },
              {
                title: "Multi-Tab & Split View",
                desc: "Work in multiple sessions simultaneously with tabs and split-view support"
              },
              {
                title: "Autocomplete",
                desc: "Enable autocomplete for commands, arguments, and file paths to save time"
              },
              {
                title: "Team Sharing",
                desc: "Share hosts, keys, identities, and snippets with your team via Vaults"
              },
              {
                title: "Cloud Integration",
                desc: "Integrate with AWS and DigitalOcean for seamless cloud server management"
              },
              {
                title: "Mosh Support",
                desc: "Use Mosh for mobile connections - handles intermittent connectivity better than SSH"
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
          <h3 className="text-2xl font-bold text-emerald-400 mb-4">Mobile SSH Client Apps</h3>
          <p className="text-slate-300 mb-6">
            Besides Termius, there are many excellent SSH client apps for mobile devices. Here&apos;s a comparison of the best options:
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
                    <th className="text-left py-3 px-2 text-cyan-400">App</th>
                    <th className="text-left py-3 px-2 text-cyan-400">Features</th>
                    <th className="text-left py-3 px-2 text-cyan-400">Price</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-700">
                    <td className="py-3 px-2 font-semibold text-emerald-400">Termius</td>
                    <td className="py-3 px-2">Cross-platform sync, SSH/SFTP/Mosh/Telnet, port forwarding, snippets</td>
                    <td className="py-3 px-2">Free + Subscription</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-3 px-2 font-semibold text-emerald-400">Blink Shell</td>
                    <td className="py-3 px-2">Professional terminal, Mosh support, Bluetooth keyboard optimized, Vim/Emacs friendly</td>
                    <td className="py-3 px-2">$19.99</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-3 px-2 font-semibold text-emerald-400">Prompt 3</td>
                    <td className="py-3 px-2">By Panic, Mac/iOS sync, FaceID/YubiKey support, beautiful UI</td>
                    <td className="py-3 px-2">One-time purchase</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-3 px-2 font-semibold text-emerald-400">ShellFish</td>
                    <td className="py-3 px-2">High-speed SSH, drag &amp; drop files, iOS Files integration</td>
                    <td className="py-3 px-2">$2.99/mo or $29.99</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-3 px-2 font-semibold text-emerald-400">ServerCat</td>
                    <td className="py-3 px-2">Server monitoring + SSH, Docker management, system resource monitoring</td>
                    <td className="py-3 px-2">Free + Subscription</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2 font-semibold text-emerald-400">WebSSH</td>
                    <td className="py-3 px-2">Simple and practical, SSH/SFTP/port forwarding</td>
                    <td className="py-3 px-2">$12.99 lifetime</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
              <p className="text-blue-300 text-sm"><strong>Free options:</strong> a-Shell, iSH Shell</p>
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
                    <th className="text-left py-3 px-2 text-cyan-400">App</th>
                    <th className="text-left py-3 px-2 text-cyan-400">Features</th>
                    <th className="text-left py-3 px-2 text-cyan-400">Price</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-700">
                    <td className="py-3 px-2 font-semibold text-emerald-400">Termius</td>
                    <td className="py-3 px-2">Cross-platform sync, enterprise-grade, SFTP, ed25519 key support</td>
                    <td className="py-3 px-2">Free + Subscription</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-3 px-2 font-semibold text-emerald-400">JuiceSSH</td>
                    <td className="py-3 px-2">Beautiful UI, no ads, multi-theme, script support, plugins</td>
                    <td className="py-3 px-2">Free + Pro upgrade</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-3 px-2 font-semibold text-emerald-400">ConnectBot</td>
                    <td className="py-3 px-2">Open source, lightweight, actively maintained (2025), no ads</td>
                    <td className="py-3 px-2">Free</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-3 px-2 font-semibold text-emerald-400">Termux</td>
                    <td className="py-3 px-2">Full Linux environment, 1500+ packages, pkg manager, power user favorite</td>
                    <td className="py-3 px-2">Free (open source)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2 font-semibold text-emerald-400">Royal TSX</td>
                    <td className="py-3 px-2">Multi-protocol (RDP/VNC/SSH), team sharing, credential management</td>
                    <td className="py-3 px-2">Subscription</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-xl p-6 border border-emerald-500/20">
            <h4 className="text-lg font-semibold text-white mb-4">Recommendations by Use Case</h4>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { useCase: "Cross-platform sync", app: "Termius", note: "iOS/Android/Mac/Windows/Linux" },
                { useCase: "iOS professional", app: "Blink Shell", note: "Best keyboard support" },
                { useCase: "Android free & open source", app: "ConnectBot", note: "Actively maintained" },
                { useCase: "Android power users", app: "Termux", note: "Full Linux environment" },
                { useCase: "Server monitoring + SSH", app: "ServerCat", note: "iOS only" },
                { useCase: "Simple occasional use", app: "WebSSH / JuiceSSH", note: "Easy to use" },
              ].map((item) => (
                <div key={item.useCase} className="flex items-start gap-3">
                  <span className="text-emerald-400">→</span>
                  <div>
                    <span className="text-white font-medium">{item.useCase}:</span>{" "}
                    <span className="text-cyan-400">{item.app}</span>
                    <span className="text-slate-400 text-sm"> ({item.note})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Troubleshooting - Enhanced */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-emerald-400 mb-4">Troubleshooting</h3>
          <div className="space-y-4">
            {[
              {
                problem: "Connection Refused",
                solution: "Ensure SSH is running: systemctl status sshd. Check firewall: ufw allow 22 or firewall-cmd --add-service=ssh"
              },
              {
                problem: "Permission Denied (publickey)",
                solution: "Verify key permissions: chmod 600 ~/.ssh/id_ed25519 and chmod 700 ~/.ssh. Check authorized_keys on server."
              },
              {
                problem: "Connection Timeout",
                solution: "Verify IP/hostname is correct. Check if server is reachable with ping. Ensure no network firewall is blocking port 22."
              },
              {
                problem: "Host Key Verification Failed",
                solution: "Server key changed (reinstall or IP reuse). Remove old key: ssh-keygen -R hostname, then reconnect."
              },
              {
                problem: "Too Many Authentication Failures",
                solution: "SSH agent has too many keys loaded. Specify key explicitly or use ssh-add -D to clear agent."
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
          <h3 className="text-2xl font-bold text-white mb-4">You&apos;re All Set!</h3>
          <p className="text-slate-300 max-w-xl mx-auto">
            You can now securely connect to your Linux server using Termius.
            Explore advanced features like SFTP, port forwarding, snippets, and jump hosts to boost your productivity.
          </p>
        </section>

        {/* Sources */}
        <section className="mt-12 pt-8 border-t border-slate-700">
          <h4 className="text-lg font-semibold text-slate-400 mb-4">Sources & References</h4>
          <ul className="space-y-2 text-sm text-slate-500">
            <li><a href="https://termius.com/documentation" className="hover:text-emerald-400 transition-colors">Termius Official Documentation</a></li>
            <li><a href="https://www.techrepublic.com/article/how-to-use-termius-ssh/" className="hover:text-emerald-400 transition-colors">TechRepublic - How to use Termius</a></li>
            <li><a href="https://www.cyberciti.biz/tips/linux-unix-bsd-openssh-server-best-practices.html" className="hover:text-emerald-400 transition-colors">nixCraft - OpenSSH Server Best Practices</a></li>
            <li><a href="https://www.brandonchecketts.com/archives/ssh-ed25519-key-best-practices-for-2025" className="hover:text-emerald-400 transition-colors">SSH Key Best Practices 2025</a></li>
            <li><a href="https://geekflare.com/dev/best-terminals-ssh-apps/" className="hover:text-emerald-400 transition-colors">Geekflare - Best Terminals/SSH Apps for iPad and iPhone</a></li>
            <li><a href="https://theserverhost.com/blog/post/best-ssh-client-for-android" className="hover:text-emerald-400 transition-colors">TheServerHost - Top 7 Best SSH client for Android</a></li>
            <li><a href="https://blink.sh/" className="hover:text-emerald-400 transition-colors">Blink Shell Official</a></li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center text-slate-400">
          <p>Termius SSH Guide - Built with Next.js</p>
        </div>
      </footer>
    </div>
  );
}
