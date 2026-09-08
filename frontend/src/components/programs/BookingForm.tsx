"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Loader2,
  Sparkles,
} from "lucide-react";
import { programs } from "@/constants/programs";

const initialForm = {
  parentName: "",
  studentName: "",
  email: "",
  phone: "",
  studentAge: "",
  city: "",
  interestedIn: "",
  experienceLevel: "",
  preferredLearning: "",
  message: "",
};

export default function BookingForm() {
  const [form, setForm] = useState(initialForm);

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("loading");

    try {
      const res = await fetch("/api/book-demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm(initialForm);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background Effects */}
      <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-purple-600/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
            <Sparkles size={16} />
            START THE JOURNEY
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-white md:text-5xl">
            Give Your Child a
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Future-Ready Advantage.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            Tell us a little about your child and our team will help you find
            the perfect learning program based on their age, interests, and
            experience.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                <GraduationCap size={22} />
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Personalized Learning Path
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-400">
                  Programs designed around age, interest and learning level.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-500/15 text-purple-400">
                <CheckCircle2 size={22} />
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Hands-On Technology Learning
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-400">
                  Students learn by building, experimenting and creating.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400">
                <Sparkles size={22} />
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Future-Focused Skills
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-400">
                  Robotics, AI, Coding, STEM and immersive technologies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="rounded-[2rem] border border-white/10 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 md:p-9 shadow-2xl transition-colors duration-200">
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white">
              Book a Free Consultation
            </h3>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Fill in the details below and our team will contact you shortly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Names */}
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Parent Name *
                </label>

                <input
                  type="text"
                  name="parentName"
                  required
                  value={form.parentName}
                  onChange={handleChange}
                  placeholder="Enter parent name"
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 px-4 py-3 text-sm text-slate-900 dark:text-slate-100 outline-none transition placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-500 focus:bg-white dark:focus:bg-slate-800 focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Student Name
                </label>

                <input
                  type="text"
                  name="studentName"
                  value={form.studentName}
                  onChange={handleChange}
                  placeholder="Enter student name"
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 px-4 py-3 text-sm text-slate-900 dark:text-slate-100 outline-none transition placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-500 focus:bg-white dark:focus:bg-slate-800 focus:ring-4 focus:ring-blue-500/10"
                />
              </div>
            </div>

            {/* Email Phone */}
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Email Address *
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@email.com"
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 px-4 py-3 text-sm text-slate-900 dark:text-slate-100 outline-none transition placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-500 focus:bg-white dark:focus:bg-slate-800 focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Phone Number *
                </label>

                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 00000 00000"
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 px-4 py-3 text-sm text-slate-900 dark:text-slate-100 outline-none transition placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-500 focus:bg-white dark:focus:bg-slate-800 focus:ring-4 focus:ring-blue-500/10"
                />
              </div>
            </div>

            {/* Age City */}
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Student Age
                </label>

                <select
                  name="studentAge"
                  value={form.studentAge}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 px-4 py-3 text-sm text-slate-900 dark:text-slate-100 outline-none transition focus:border-blue-500 focus:bg-white dark:focus:bg-slate-800 focus:ring-4 focus:ring-blue-500/10"
                >
                  <option value="" className="text-slate-500 dark:bg-slate-800">Select age</option>
                  <option value="6-9" className="dark:bg-slate-800">6 - 9 Years</option>
                  <option value="10-13" className="dark:bg-slate-800">10 - 13 Years</option>
                  <option value="14-17" className="dark:bg-slate-800">14 - 17 Years</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                  City
                </label>

                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="Enter your city"
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 px-4 py-3 text-sm text-slate-900 dark:text-slate-100 outline-none transition placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-500 focus:bg-white dark:focus:bg-slate-800 focus:ring-4 focus:ring-blue-500/10"
                />
              </div>
            </div>

            {/* Program */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                Interested Program
              </label>

              <select
                name="interestedIn"
                value={form.interestedIn}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 px-4 py-3 text-sm text-slate-900 dark:text-slate-100 outline-none transition focus:border-blue-500 focus:bg-white dark:focus:bg-slate-800 focus:ring-4 focus:ring-blue-500/10"
              >
                <option value="" className="text-slate-500 dark:bg-slate-800">Select a program</option>

                {programs.map((program) => (
                  <option key={program.slug} value={program.title} className="dark:bg-slate-800">
                    {program.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Experience */}
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Experience Level
                </label>

                <select
                  name="experienceLevel"
                  value={form.experienceLevel}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 px-4 py-3 text-sm text-slate-900 dark:text-slate-100 outline-none transition focus:border-blue-500 focus:bg-white dark:focus:bg-slate-800 focus:ring-4 focus:ring-blue-500/10"
                >
                  <option value="" className="text-slate-500 dark:bg-slate-800">Select level</option>
                  <option value="Beginner" className="dark:bg-slate-800">Beginner</option>
                  <option value="Intermediate" className="dark:bg-slate-800">Intermediate</option>
                  <option value="Advanced" className="dark:bg-slate-800">Advanced</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Preferred Learning
                </label>

                <select
                  name="preferredLearning"
                  value={form.preferredLearning}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 px-4 py-3 text-sm text-slate-900 dark:text-slate-100 outline-none transition focus:border-blue-500 focus:bg-white dark:focus:bg-slate-800 focus:ring-4 focus:ring-blue-500/10"
                >
                  <option value="" className="text-slate-500 dark:bg-slate-800">Select type</option>
                  <option value="Online" className="dark:bg-slate-800">Online</option>
                  <option value="Offline" className="dark:bg-slate-800">Offline</option>
                  <option value="Hybrid" className="dark:bg-slate-800">Hybrid</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                Additional Message
              </label>

              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us anything else you'd like us to know..."
                className="w-full resize-none rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 px-4 py-3 text-sm text-slate-900 dark:text-slate-100 outline-none transition placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-500 focus:bg-white dark:focus:bg-slate-800 focus:ring-4 focus:ring-blue-500/10"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:from-blue-700 hover:to-indigo-700 disabled:cursor-not-allowed disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={19} className="animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Book Free Consultation
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </>
              )}
            </button>

            {status === "success" && (
              <div className="flex items-center justify-center gap-2 rounded-xl bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-850 p-4 text-sm font-medium text-green-700 dark:text-green-300">
                <CheckCircle2 size={18} />
                Thank you! We&apos;ve received your enquiry.
              </div>
            )}

            {status === "error" && (
              <div className="rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-850 p-4 text-center text-sm font-medium text-red-600 dark:text-red-300">
                Something went wrong. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
