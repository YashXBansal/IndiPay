interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl mb-8">{description}</p>
        <a
          href={buttonLink}
          className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-gray-200"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default CTASection;
