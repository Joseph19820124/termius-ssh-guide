export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-emerald-400">Termius SSH Guide</h1>
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

        {/* What is Termius */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-emerald-400 mb-4">What is Termius?</h3>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <p className="text-slate-300 leading-relaxed">
              Termius is a modern, cross-platform SSH client that works on Windows, macOS, Linux, iOS, and Android.
              It provides a clean interface for managing SSH connections, supports key-based authentication,
              and offers features like SFTP file transfer, port forwarding, and connection syncing across devices.
            </p>
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

        {/* Tips */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-emerald-400 mb-4">Pro Tips</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Use Groups",
                desc: "Organize multiple servers into groups for easier management"
              },
              {
                title: "SFTP Support",
                desc: "Use the built-in SFTP feature to transfer files to/from your server"
              },
              {
                title: "Port Forwarding",
                desc: "Set up local or remote port forwarding for secure tunneling"
              },
              {
                title: "Snippets",
                desc: "Save frequently used commands as snippets for quick access"
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
          <h3 className="text-2xl font-bold text-emerald-400 mb-4">Troubleshooting</h3>
          <div className="space-y-4">
            {[
              {
                problem: "Connection Refused",
                solution: "Ensure SSH is running on the server (systemctl status sshd) and port 22 is open in firewall"
              },
              {
                problem: "Permission Denied",
                solution: "Check username/password or verify your SSH key is added to authorized_keys"
              },
              {
                problem: "Connection Timeout",
                solution: "Verify the IP address is correct and the server is reachable (try ping)"
              },
              {
                problem: "Host Key Verification Failed",
                solution: "The server's key has changed - verify it's expected, then remove old key from known_hosts"
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
            Explore the app&apos;s features like SFTP, port forwarding, and snippets to boost your productivity.
          </p>
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
