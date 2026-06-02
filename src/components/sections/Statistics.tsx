import content from "../../constants/content.json";

const Statistics = () => {
  return (
    <section className="section-padding secondary-background">

      <div className="container-layout grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {content.stats.map((item) => (
          <div
            key={item.label}
            className="card-background p-8 rounded-2xl text-center"
          >
            <h3 className="text-5xl font-bold primary-color mb-4">
              {item.number}
            </h3>

            <p className="secondary-text">
              {item.label}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
};

export default Statistics;