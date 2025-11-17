import { Building2, Factory, Cpu, Gamepad2, Sparkles } from 'lucide-react';

export default function Industries() {
  const industries = [
    {
      icon: Building2,
      title: 'Real Estate / Construction / BIM',
      description: 'Clash-free coordination, predictable handovers.',
      gradient: 'from-blue-600 to-cyan-600',
      emoji: '🏗️'
    },
    {
      icon: Factory,
      title: 'Manufacturing & Industrial',
      description: 'Automation ROI, MES/OT data sanity.',
      gradient: 'from-cyan-600 to-emerald-600',
      emoji: '🏭'
    },
    {
      icon: Cpu,
      title: 'Tech / SaaS',
      description: 'Clean microservices, safe deploys, sane costs.',
      gradient: 'from-emerald-600 to-blue-600',
      emoji: '💻'
    },
    {
      icon: Gamepad2,
      title: 'Gaming / iGaming',
      description: 'Low-latency infra, anti-fraud telemetry, 10× readiness.',
      gradient: 'from-blue-600 to-cyan-600',
      emoji: '🎮'
    }
  ];

  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.1),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-cyan-300 text-sm font-medium mb-6 animate-bounce-slow">
            <Sparkles className="w-4 h-4 animate-spin-slow" />
            <span>Industries</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Built for Leaders Who{' '}
            <span className="text-gradient">
              Can't Afford Downtime
            </span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${industry.gradient} rounded-3xl opacity-0 group-hover:opacity-50 blur-xl transition duration-500`} />
                <div className="relative h-full p-8 rounded-3xl glass-effect hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                  <div className="mb-6">
                    <div className="text-5xl mb-4 animate-float-delayed group-hover:scale-125 transition-transform duration-300">
                      {industry.emoji}
                    </div>
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl glass-effect border border-white/10">
                      <Icon className="w-7 h-7 text-cyan-400 group-hover:text-emerald-400 transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                    {industry.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
