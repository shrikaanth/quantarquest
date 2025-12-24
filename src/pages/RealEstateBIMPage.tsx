import { Building2, CheckCircle, Target, Shield, Zap, TrendingDown, Calendar, MessageCircle, ArrowRight, FileCheck, Layers, AlertTriangle, Clock, BarChart, Workflow } from 'lucide-react';
import Navigation from '../components/Navigation';
import WaveBackground from '../components/WaveBackground';
import FloatingShapes from '../components/FloatingShapes';
import Card3D from '../components/Card3D';
import { Link } from 'react-router-dom';

export default function RealEstateBIMPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <WaveBackground />
      <FloatingShapes />
      <Navigation />

      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-emerald-400 text-transparent bg-clip-text">
                Real Estate / Construction / BIM
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 mb-4 font-light">
              From Scattered Files to Cloud BIM
            </p>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Clash control • Coordination dashboards • Lifecycle handover
            </p>
          </div>

          <Card3D className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 p-10 rounded-2xl max-w-5xl mx-auto mb-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-red-400 mb-3">The Problem:</h3>
                <p className="text-slate-300 text-lg">
                  Models scattered across emails, clashes discovered on-site, coordination meetings that never converge, and handovers that feel like archaeological digs.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-emerald-400 mb-3">Our Solution:</h3>
                <p className="text-slate-300 text-lg">
                  Cloud BIM with clash control, coordination dashboards, and lifecycle handover — proven <span className="text-cyan-400 font-semibold">BIM outsourcing</span> that actually works.
                </p>
              </div>
            </div>
          </Card3D>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center gap-2"
            >
              <Calendar className="w-6 h-6" />
              Book Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              What We Deliver
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card3D key={index} className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 p-8 rounded-2xl hover:border-cyan-500/40 transition-all">
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg p-4 w-fit mb-6">
                  <service.icon className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300 text-lg">{service.description}</p>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">
              Our BIM Services
            </span>
          </h2>
          <p className="text-xl text-slate-400 text-center mb-16">End-to-End BIM Outsourcing</p>

          <div className="grid md:grid-cols-2 gap-8">
            {bimServices.map((service, index) => (
              <Card3D key={index} className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 p-8 rounded-2xl hover:border-blue-500/40 transition-all">
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300 text-lg mb-6">{service.description}</p>
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                      <p className="text-slate-400">{feature}</p>
                    </div>
                  ))}
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
              Outcomes You Can Measure
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {outcomes.map((outcome, index) => (
              <Card3D key={index} className="bg-slate-900/50 backdrop-blur-sm border border-emerald-500/20 p-8 rounded-xl hover:border-emerald-500/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-lg p-3 flex-shrink-0">
                    <TrendingDown className="w-8 h-8 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{outcome.metric}</h3>
                    <p className="text-slate-400">{outcome.description}</p>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>

          <Card3D className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 p-8 rounded-2xl text-center max-w-3xl mx-auto">
            <p className="text-xl text-slate-300">
              <span className="text-cyan-300 font-semibold">Fewer meetings. Fewer change orders. Predictable handovers.</span>
            </p>
          </Card3D>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
              Our Process
            </span>
          </h2>
          <p className="text-xl text-slate-400 text-center mb-16">Structured & Predictable</p>

          <div className="space-y-6 max-w-5xl mx-auto">
            {process.map((step, index) => (
              <Card3D key={index} className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 p-8 rounded-xl hover:border-blue-500/40 transition-all">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-2xl font-bold text-white">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-slate-300 text-lg">{step.description}</p>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 text-transparent bg-clip-text">
              Technologies We Work With
            </span>
          </h2>

          <Card3D className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 p-10 rounded-2xl max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">BIM Software</h3>
                <div className="space-y-3">
                  {bimSoftware.map((software, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
                      <p className="text-slate-300">{software}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Collaboration Platforms</h3>
                <div className="space-y-3">
                  {platforms.map((platform, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500" />
                      <p className="text-slate-300">{platform}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card3D>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text">
              FAQs
            </span>
          </h2>
          <p className="text-xl text-slate-400 text-center mb-16">Common Questions</p>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card3D key={index} className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-slate-300 text-lg">{faq.answer}</p>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <Card3D className="bg-gradient-to-br from-blue-600/20 to-emerald-600/20 backdrop-blur-sm border border-cyan-500/30 p-12 rounded-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to Transform Your BIM Process?
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center gap-2"
              >
                <Calendar className="w-6 h-6" />
                Book a Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-6 h-6" />
                Chat on WhatsApp
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <p className="text-2xl text-slate-200 font-light">
              From scattered files to structured coordination.
            </p>
          </Card3D>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    icon: AlertTriangle,
    title: 'Clash Detection & Resolution',
    description: 'Automated clash detection with priority-based resolution workflows.',
  },
  {
    icon: Workflow,
    title: 'Coordination Dashboards',
    description: 'Real-time visibility into model status, issues, and coordination progress.',
  },
  {
    icon: FileCheck,
    title: 'Lifecycle Handover',
    description: 'Structured handover packages with as-built documentation.',
  },
  {
    icon: Layers,
    title: 'Model Federation',
    description: 'Unified federated models across all disciplines.',
  },
  {
    icon: BarChart,
    title: 'Quantity Takeoffs',
    description: 'Accurate quantity extraction and cost estimation from BIM models.',
  },
  {
    icon: Clock,
    title: '4D/5D BIM',
    description: 'Time and cost dimensions integrated into your BIM workflow.',
  },
];

const bimServices = [
  {
    title: 'BIM Modeling & Coordination',
    description: 'Complete BIM modeling services with multi-discipline coordination.',
    features: [
      'Architectural, Structural, MEP modeling',
      'LOD 200 to LOD 400 development',
      'Cross-discipline coordination',
      'Model validation and QA/QC',
    ],
  },
  {
    title: 'Clash Detection & Management',
    description: 'Systematic clash detection and resolution workflows.',
    features: [
      'Automated clash detection runs',
      'Priority-based clash categorization',
      'Resolution tracking and reporting',
      'Coordination meeting support',
    ],
  },
  {
    title: 'BIM Documentation',
    description: 'Generate construction-ready documentation from BIM models.',
    features: [
      ' 2D drawings from 3D models',
      'Shop drawings and fabrication details',
      'As-built documentation',
      'Closeout packages',
    ],
  },
  {
    title: 'Cloud BIM Management',
    description: 'Cloud-based BIM platforms for seamless collaboration.',
    features: [
      'Autodesk Construction Cloud setup',
      'Model versioning and access control',
      'Mobile field access',
      'Integration with project management tools',
    ],
  },
];

const outcomes = [
  {
    metric: 'Fewer Coordination Meetings',
    description: 'Automated clash detection reduces coordination cycles by up to 40%.',
  },
  {
    metric: 'Reduced Change Orders',
    description: 'Early clash resolution prevents costly on-site changes.',
  },
  {
    metric: 'Faster Approval Cycles',
    description: 'Cloud collaboration accelerates review and approval workflows.',
  },
  {
    metric: 'Predictable Handovers',
    description: 'Structured closeout processes ensure smooth project delivery.',
  },
];

const process = [
  {
    title: 'Initial Assessment',
    description: 'Review existing models, files, and coordination requirements. Define LOD targets and deliverable schedules.',
  },
  {
    title: 'Model Setup & Federation',
    description: 'Establish cloud workspace, federate models, and configure clash detection rules.',
  },
  {
    title: 'Coordination Cycles',
    description: 'Run automated clash detection, categorize issues, and track resolution through coordination meetings.',
  },
  {
    title: 'Documentation & Handover',
    description: 'Generate construction documentation, prepare as-built models, and deliver closeout packages.',
  },
];

const bimSoftware = [
  'Autodesk Revit',
  'Autodesk Navisworks',
  'Autodesk BIM 360',
  'Autodesk Construction Cloud',
  'Tekla Structures',
  'ArchiCAD',
];

const platforms = [
  'Procore',
  'BIM 360',
  'ACC (Autodesk Construction Cloud)',
  'Trimble Connect',
  'PlanGrid',
  'Newforma',
];

const faqs = [
  {
    question: 'What is your BIM modeling capacity?',
    answer: 'We have a dedicated team of BIM specialists capable of handling projects of all sizes, from small residential to large commercial and infrastructure projects.',
  },
  {
    question: 'Do you work with international projects?',
    answer: 'Yes, we have experience with projects across North America, Europe, Middle East, and Asia-Pacific, following local standards and codes.',
  },
  {
    question: 'What LOD levels do you support?',
    answer: 'We provide modeling services from LOD 200 (conceptual) to LOD 400 (fabrication), depending on project requirements.',
  },
  {
    question: 'How do you handle data security?',
    answer: 'We follow strict data security protocols including NDAs, secure cloud platforms, and access controls. All project data remains your property.',
  },
  {
    question: 'Can you work with our existing BIM platform?',
    answer: 'Yes, we adapt to your preferred BIM platform and workflows. We have experience with all major BIM collaboration platforms.',
  },
  {
    question: 'What is your typical turnaround time?',
    answer: 'Turnaround depends on project scope, but typical coordination cycles run weekly, with clash reports delivered within 48 hours of model updates.',
  },
];
