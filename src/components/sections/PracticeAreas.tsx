import content from "../../constants/content.json";

const PracticeAreas = () => {
  return (
    <section className="section-padding secondary-background">

      <div className="container-layout">

        <h2 className="text-4xl font-bold mb-12">
          Practice Areas
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {content.practiceAreas.map((item) => (
            <div
              key={item.title}
              className="card-background p-8 rounded-2xl border primary-border"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="secondary-text">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;