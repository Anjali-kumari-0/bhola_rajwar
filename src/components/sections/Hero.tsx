import content from "../../constants/content.json";

const Hero = () => {
  return (
    <section className="section-padding">
      <div className="container-layout grid lg:grid-cols-2 gap-10 items-center">

        <div>
          <p className="primary-color uppercase tracking-widest mb-4">
            {content.hero.subtitle}
          </p>

          <h1 className="text-6xl font-bold leading-tight mb-6">
            {content.hero.title1}
            <br />
            <span className="primary-color">
              {content.hero.title2}
            </span>
            <br />
            {content.hero.title3}
          </h1>

          <p className="secondary-text text-lg mb-8">
            {content.hero.description}
          </p>

          <button className="primary-button px-8 py-4 rounded-xl">
            {content.hero.button}
          </button>
        </div>

        <div>
          <img
            src="/lawyer.png"
            alt="lawyer"
            className="rounded-3xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;