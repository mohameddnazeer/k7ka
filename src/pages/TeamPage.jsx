import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function MemberCard({ name, image }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 ease-out hover:border-[#6551a0] hover:-translate-y-1 flex flex-col items-center">
      {/* Photo */}
      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden shadow-lg ring-2 ring-transparent group-hover:ring-[#6551a0] transition-all duration-300 group-hover:scale-105">
        {image && !imgError ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#A91D22] to-purple-800 flex items-center justify-center">
            <span className="text-3xl font-black text-white">{name.charAt(0)}</span>
          </div>
        )}
      </div>

      {/* Name */}
      <h3 className="text-lg font-black font-serif text-center text-[#1F2937] group-hover:text-[#6551a0] transition">
        {name}
      </h3>
      <p className="text-sm text-gray-500 text-center mt-1 font-bold">
        عضو فريق العمل
      </p>
    </div>
  );
}

export default function TeamPage() {
  const teamMembers = [
    { name: "حوريه أسامه", image: "/imgs/10.jpeg" },
    { name: "بسمه رضا", image: "/imgs/13.jpeg" },
    { name: "عائشه حسين", image: "/imgs/11.jpeg" },
    { name: "مريم محمد", image: "/imgs/17.jpeg" },
    { name: "اسراء احمد", image: "/imgs/15.jpeg" },
    { name: "امل اشرف", image: "/imgs/11.jpeg" },
    { name: "رفعت محمد", image: "/imgs/2.jpeg" },
    { name: "خلود ايمن", image: "/imgs/8.jpeg" },
    { name: "بهاء جمال", image: "/imgs/12.jpeg" },
    { name: "احمد ايمن", image: "/imgs/16.jpeg" },
    { name: "احمد ابراهيم", image: "/imgs/19.jpeg" },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#1F2937]" dir="rtl">
      <NavBar />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16">
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
            <span className="w-4 h-4 bg-[#6551a0] block"></span>
            <h2 className="text-2xl font-black font-serif text-[#1F2937]">
              أعضاء الفريق
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teamMembers.map((member, index) => (
              <MemberCard key={index} name={member.name} image={member.image} />
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
