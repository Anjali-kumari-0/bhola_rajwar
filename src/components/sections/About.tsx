import content from "../../constants/content.json";

const About = () => {
  return (
    <section className="section-padding py-10 px-5">

      <div className="container-layout grid lg:grid-cols-2 gap-10 items-center">

        <img
          src="/office.jpg"
          alt="office"
          className="rounded-3xl"
        />

        <div>

          <h2 className="text-5xl font-bold mb-6">
            {content.about.title}
          </h2>

          <p className="secondary-text text-lg leading-8">
            {content.about.description}
          </p>

        </div>
      </div>

    </section>
  );
};

export default About;