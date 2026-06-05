import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function TeamPage() {
  const teamMembers = [
    "حوريه أسامه",
    "بسمه رضا",
    "عائشه حسين",
    "مريم محمد",
    "اسراء احمد",
    "امل اشرف",
    "رفعت محمد",
    "خلود ايمن",
    "بهاء جمال",
    "احمد ايمن",
    "احمد ابراهيم",
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#1F2937]" dir="rtl">
      <NavBar />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 ">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-white border border-gray-300 hover:border-[#961da9] text-[#1F2937] hover:text-[#961da9] text-sm font-black px-5 py-2.5 rounded-full transition shadow-sm hover:shadow-md"
          >
            <span className="text-lg">→</span>
            عودة للرئيسية
          </Link>
        </div>

        {/* Header Section */}
        <header className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-2 h-2 bg-[#961da9] block"></span>
            <span className="w-2 h-2 bg-[#961da9] block"></span>
            <span className="w-2 h-2 bg-[#961da9] block"></span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black font-serif text-[#1F2937] mb-4">
            فريق العمل الصحفي
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            الفريق المتفاني الذي يقدم لكم التغطية الصحفية الدقيقة والتحقيقات المتعمقة
          </p>
        </header>

        {/* Group Photo Section */}
        <section className="mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
            <img
              src="/imgs/group.jpeg"
              alt="فريق العمل الصحفي"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>
        </section>

        {/* Team Members Grid */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-300">
            <span className="w-4 h-4 bg-[#A91D22] block"></span>
            <h2 className="text-2xl font-black font-serif text-[#1F2937]">
              أعضاء الفريق
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teamMembers.map((name, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 ease-out hover:border-[#A91D22] hover:-translate-y-1"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#A91D22] to-purple-800 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-black text-white">
                    {name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-black font-serif text-center text-[#1F2937] group-hover:text-[#A91D22] transition">
                  {name}
                </h3>
                <p className="text-sm text-gray-500 text-center mt-2 font-bold">
                  عضو فريق العمل
                </p>
              </div>
            ))}
          </div>
        </section>


      </div>

      <Footer />
    </div>
  );
}
