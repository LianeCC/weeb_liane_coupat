import AnimatedSquare from "./AnimatedSquare";

export default function BanText({
  caption,
  titleParts = [], // tableau, par exemple [{ text: "Apprenez", highlight: true }]
  text,
  buttonText,
  buttonLink,
  imageLeft = false,
  showSquares = false,
  imageSrc,
  imageAlt = "",
}) {
  const layout = imageLeft ? "flex-col-reverse md:flex-row-reverse" : "flex-col-reverse md:flex-row";

  return (
    <section className="py-0 md:py-16 my-16 md:my-0 mx-6 sm:mx-4 md:mx-0">
      
      <div className={`flex ${layout} justify-between items-center mx-8 sm:mx-4 md:mx-4 max-w-[1280px] mx-auto`}>
        
        {/* Bloc image */}
        <div className="hidden sm:block md:block flex justify-center items-center">
          {showSquares && <AnimatedSquare />}
          {!showSquares && imageSrc && (
            <img
              src={imageSrc}
              alt={imageAlt} 
              className="w-[400px] sm:w-[600px] md:w-[1280px] h-auto object-cover"
            />
          )}
        </div>

        {/* Bloc texte */}
        <div className="w-full flex flex-col gap-4 sm:gap-8 md:gap-10 text-left">
          <caption className="uppercase text-left">{caption}</caption>
          
          <h1 className="text-left">
            {titleParts.map(({ text, highlight }, index) => (
              <span
                key={index}
                className={
                  highlight
                    ? "text-tertiary"
                    : ""
                }
              >
                {text + " "}
              </span>
            ))}
          </h1>

          <p>{text}</p>
          <div>
            <a
              href={buttonLink}
              className="inline-flex items-center gap-2 font-semibold hover:text-tertiary"
            >
              {buttonText} <span className="text-xl">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
