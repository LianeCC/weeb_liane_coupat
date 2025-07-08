import Button from "./Button";

export default function Hero() {
  return (
    <div>
      <h1 className="p-8">Explorez le <span className="text-tertiary font-light">Web</span> sous toutes ses <span className="underline underline-offset-8 decoration-tertiary">facettes</span></h1>
      <p className="text-[18px] leading-[1.6] max-w-[834px] mx-auto">Le monde du web évolue constamment, et nous sommes là pour vous guider à travers ses tendances, technologies et meilleures pratiques. Que vous soyez développeur, designer ou passionné du digital, notre blog vous offre du contenu de qualité pour rester à la pointe.</p>
        <div className="flex justify-center mt-8">
            <button className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-tertiary transition-colors">
                Découvrir les articles
            </button>
            <Button to="/blog" className="ml-4 bg-primary border-white text-white px-6 py-3 rounded-lg hover:bg-secondary hover:border-secondary transition-colors">
                S'abonner à la newsletter
            </Button>
        </div>
        <div className="mt-20 text-center">
            <img src="/images/Desktop-hero.png" alt="Hero" className="mx-auto w-full max-w-[1100px] h-auto" />
        </div>
    </div>
  )
}
