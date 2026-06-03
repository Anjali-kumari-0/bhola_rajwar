// import content from "../../constants/content.json";
// import lawyer from "../../assets/lawyer.jpeg";

// const Hero = () => {
//   return (
//     <section className="section-padding">
//       <div className="container-layout grid lg:grid-cols-2 gap-10 items-center">

//         <div>
//           <p className="primary-color uppercase tracking-widest mb-4">
//             {content.hero.subtitle}
//           </p>

//           <h1 className="text-6xl font-bold leading-tight mb-6">
//             {content.hero.title1}
//             <br />
//             <span className="primary-color">
//               {content.hero.title2}
//             </span>
//             <br />
//             {content.hero.title3}
//           </h1>

//           <p className="secondary-text text-lg mb-8">
//             {content.hero.description}
//           </p>

//           <button className="primary-button px-8 py-4 rounded-xl">
//             {content.hero.button}
//           </button>
//         </div>

//         <div>
//           <img
//             src={lawyer}
//             alt="lawyer"
//             className="rounded-3xl shadow-2xl"
//           />
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Hero;
import content from "../../constants/content.json";
import lawyer from "../../assets/lawyer.jpeg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-4">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-stone-50 via-white to-stone-100" />

      <div className="container-layout grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div className="pl-4">

          <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700">
            ⚖️ Trusted Legal Representation
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl xl:text-7xl font-bold leading-tight text-slate-900">
            Protecting
            <span className="block text-amber-600">
              Your Rights
            </span>
            With Confidence
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Professional legal counsel for civil, criminal,
            property, family and corporate matters.
            Dedicated to delivering justice with integrity
            and expertise.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-xl bg-slate-900 px-8 py-4 font-medium text-white transition hover:bg-slate-800">
              Book Consultation
            </button>

            <button className="rounded-xl border border-slate-300 px-8 py-4 font-medium text-slate-700 hover:bg-slate-50">
              View Practice Areas
            </button>
          </div>

          {/* Stats */}
          <div className="mt-12 flex gap-10">
            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                25+
              </h3>
              <p className="text-slate-500">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                5000+
              </h3>
              <p className="text-slate-500">
                Cases Handled
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                98%
              </h3>
              <p className="text-slate-500">
                Success Rate
              </p>
            </div>
          </div>

        </div>

        {/* Right Image */}
        <div className="relative">

          {/* Background Accent */}
          <div className="absolute -right-8 -top-8 h-72 w-72 rounded-full bg-amber-200 blur-3xl opacity-40" />

          <div className="relative overflow-hidden rounded-[32px] border border-white/50 bg-white p-3 shadow-[0_30px_60px_rgba(0,0,0,0.12)]">

            <img
              src={lawyer}
              alt="Advocate"
              className="h-[650px] w-full rounded-[24px] object-cover object-top"
            />

            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 rounded-2xl bg-white px-6 py-4 shadow-xl">
              <p className="text-3xl font-bold text-amber-600">
                25+
              </p>
              <p className="text-sm text-slate-600">
                Years of Legal Excellence
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;