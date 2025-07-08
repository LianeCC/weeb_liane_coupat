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
    <section className="py-16">
      
      <div className={`flex ${layout} justify-between items-center max-w-[1280px] mx-auto`}>
        
        {/* Bloc image */}
        <div className="flex justify-center items-center">
          {showSquares && <AnimatedSquare />}
          {!showSquares && imageSrc && (
            <img
              src={imageSrc}
              alt={imageAlt} 
              className="w-[1280px] h-auto object-cover"
            />
          )}
        </div>

        {/* Bloc texte */}
        <div className="w-full flex flex-col gap-10 text-left">
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
