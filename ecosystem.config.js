module.exports = {
    apps: [
      {
        name: "qiskit-fall-fest",
  
        // ใช้ Node 24 ของ Qiskit เท่านั้น
        interpreter: "C:\\Program Files\\node-v24\\node-v24.20.0\\node.exe",
  
        // Static server ที่ติดตั้งใน project
        script: "node_modules\\serve\\build\\main.js",
  
        // out คือ output จาก Next.js output: "export"
        args: "out -l tcp://127.0.0.1:3001 -s",
  
        // project root
        cwd: "C:\\inetpub\\qtt2026",
  
        instances: 1,
        exec_mode: "fork",
        watch: false,
        autorestart: true,
        max_memory_restart: "512M",
  
        env: {
          NODE_ENV: "production",
        },
  
        error_file: "C:\\inetpub\\qtt2026\\logs\\qiskit-error.log",
        out_file: "C:\\inetpub\\qtt2026\\logs\\qiskit-out.log",
        time: true,
      },
    ],
  };