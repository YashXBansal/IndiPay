interface Feature {
  title: string;
  description: string;
  icon?: JSX.Element; // Optional: You can add icons if needed
}

interface FeatureSectionProps {
  features: Feature[];
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ features }) => {
  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Features
        </h2>
        <div className="flex flex-wrap justify-center">
          {features.map((feature, index) => (
            <div key={index} className="w-full md:w-1/3 p-6">
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                {feature.icon && (
                  <div className="text-blue-600 mb-4">{feature.icon}</div>
                )}
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
