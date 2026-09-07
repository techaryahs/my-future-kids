import { Metadata } from 'next'
import Link from 'next/link'
import { Bot, FlaskConical, Cpu, Code2, Glasses, School } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About BeFutureKids | Future-Ready Education',
  description: 'Learn about BeFutureKids and our mission to empower young minds through Robotics, STEM, AI, Coding and future-focused learning.',
}

export default function AboutPage() {
  const offerings = [
    {
      title: 'Robotics',
      description: 'Hands-on learning through designing, building, and experimenting with technology.',
      icon: Bot,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      title: 'STEM Education',
      description: 'Interactive learning experiences that bring Science, Technology, Engineering, and Mathematics to life.',
      icon: FlaskConical,
      color: 'bg-emerald-50 text-emerald-600',
    },
    {
      title: 'Artificial Intelligence',
      description: 'Introducing students to the concepts and possibilities of AI in an age-appropriate and engaging way.',
      icon: Cpu,
      color: 'bg-purple-50 text-purple-600',
    },
    {
      title: 'Coding',
      description: 'Helping students understand computational thinking and create with technology.',
      icon: Code2,
      color: 'bg-rose-50 text-rose-600',
    },
    {
      title: 'AR / VR Learning',
      description: 'Immersive educational experiences that make complex concepts easier to explore and understand.',
      icon: Glasses,
      color: 'bg-amber-50 text-amber-600',
    },
    {
      title: 'School Innovation Programs',
      description: 'Supporting schools with future-focused learning programs and technology-enabled education initiatives.',
      icon: School,
      color: 'bg-indigo-50 text-indigo-600',
    },
  ]

  const reasons = [
    'Hands-On Learning',
    'Future-Focused Skills',
    'Engaging Experiences',
    'Learning Through Creation',
    'Designed for Curious Minds',
  ]

  const processSteps = [
    { title: 'EXPLORE', desc: 'Discovering new concepts and technologies.' },
    { title: 'EXPERIMENT', desc: 'Testing ideas and understanding how things work.' },
    { title: 'CREATE', desc: 'Building projects and applying knowledge.' },
    { title: 'LEARN', desc: 'Understanding the underlying principles.' },
    { title: 'INNOVATE', desc: 'Developing new solutions to problems.' },
  ]

  return (
    <div className="bg-white pt-24 pb-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto mb-6">
          Building the Future, <span className="text-blue-600">One Young Mind at a Time.</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-4">
          At BeFutureKids, we believe education should prepare children not just for exams, but for the rapidly changing world ahead.
        </p>
        <p className="text-lg text-slate-500 max-w-3xl mx-auto mb-10">
          We create engaging, hands-on learning experiences that introduce young minds to Robotics, STEM, Artificial Intelligence, Coding, and emerging technologies.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/book/student-program" className="px-8 py-3.5 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200">
            Explore Programs
          </Link>
          <Link href="/book/school-demo" className="px-8 py-3.5 bg-white text-slate-700 border border-slate-200 font-medium rounded-full hover:bg-slate-50 transition-colors shadow-sm">
            Book a Demo
          </Link>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 font-medium rounded-full text-sm mb-6">
                Our Mission
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Empowering through active learning</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Our mission is to make future-ready learning accessible, engaging, and meaningful for students.
              </p>
              <p className="text-slate-600 font-medium mb-4">We aim to help children develop:</p>
              <ul className="grid grid-cols-2 gap-y-3 gap-x-4 text-slate-600">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Creativity</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Critical Thinking</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Problem Solving</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Curiosity</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Innovation Mindset</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Technology Confidence</li>
              </ul>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-[3rem] blur-xl opacity-50 -z-10"></div>
              <div className="bg-slate-900 text-white p-10 lg:p-14 rounded-3xl shadow-xl">
                <div className="inline-block px-4 py-1.5 bg-white/10 font-medium rounded-full text-sm mb-6 text-blue-200">
                  Our Vision
                </div>
                <h3 className="text-2xl lg:text-3xl font-medium leading-tight text-white mb-6">
                  "To empower the next generation with the knowledge, skills, and confidence to understand, create, and shape the future."
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Learning Beyond Textbooks</h2>
          <p className="text-lg text-slate-600">
            We offer comprehensive programs designed to turn curious minds into confident creators.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((item, index) => (
            <div key={index} className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${item.color}`}>
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Approach & Why Us */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-white">Our Approach</h2>
              <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                We believe children learn best when they actively participate. Instead of simply consuming information, students should have opportunities to explore ideas, experiment with technology, build projects, and solve problems.
              </p>
              
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full border border-slate-700 bg-slate-800 text-slate-300 group-hover:text-blue-400 group-hover:border-blue-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors z-10">
                      <span className="text-xs font-semibold">{index + 1}</span>
                    </div>
                    <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-4 rounded-xl border border-slate-800 bg-slate-800/50 shadow-sm">
                      <h4 className="font-bold text-slate-200">{step.title}</h4>
                      <p className="text-sm text-slate-400 mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800 p-10 rounded-3xl border border-slate-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Bot className="w-48 h-48" />
              </div>
              <h2 className="text-3xl font-bold mb-8 relative z-10 text-white">Why BeFutureKids?</h2>
              <ul className="space-y-6 relative z-10">
                {reasons.map((reason, index) => (
                  <li key={index} className="flex items-center gap-4 text-lg text-slate-200">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          
          <div className="bg-indigo-50 rounded-3xl p-10 flex flex-col items-start border border-indigo-100">
            <div className="px-4 py-1.5 bg-indigo-100 text-indigo-700 font-semibold rounded-full text-xs tracking-wider uppercase mb-6">
              For Schools
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Building Future-Ready Schools</h2>
            <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
              BeFutureKids works with educational institutions to introduce engaging technology-based learning experiences. We provide Robotics Programs, STEM Learning, AI Awareness, Innovation Labs, and Teacher Support to help your school lead the future of education.
            </p>
            <Link href="/book/partnership" className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-colors shadow-sm">
              Partner With Us
            </Link>
          </div>

          <div className="bg-emerald-50 rounded-3xl p-10 flex flex-col items-start border border-emerald-100">
            <div className="px-4 py-1.5 bg-emerald-100 text-emerald-700 font-semibold rounded-full text-xs tracking-wider uppercase mb-6">
              For Parents & Students
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Helping Young Minds Explore Their Potential</h2>
            <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
              Technology should not only be consumed. Children should understand how it works, explore it, and learn to create with it. Our programs provide a safe, engaging, and enriching environment for your child to discover their passion for innovation.
            </p>
            <Link href="/book/student-program" className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition-colors shadow-sm">
              Explore Programs
            </Link>
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-600 text-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The Future Belongs to Those Who Create It.
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Let's help the next generation become confident thinkers, creators, and innovators.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/book/student-program" className="px-8 py-3.5 bg-white text-blue-600 font-medium rounded-full hover:bg-slate-50 transition-colors shadow-lg">
              Explore Programs
            </Link>
            <Link href="/book/school-demo" className="px-8 py-3.5 bg-blue-700 text-white border border-blue-500 font-medium rounded-full hover:bg-blue-800 transition-colors shadow-sm">
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
