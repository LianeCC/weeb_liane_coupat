import BanText from "../components/BanText";
import Hero from "../components/Hero";
import Testimony from "../components/Testimony";
import AnimatedSquare from "../components/AnimatedSquare";

export default function Home() {
  return (
    <div>
      <Hero />
      <Testimony />
      <BanText
        caption="Des ressources pour tous les niveaux"
        titleParts={[
          { text: "Apprenez", highlight: true },
          { text: "et", highlight: false },
          { text: "progressez", highlight: true },
        ]}
        text="Que vous débutiez en développement web ou que vous soyez un expert cherchant à approfondir vos connaissances, nous vous proposons des tutoriels, guides et bonnes pratiques pour apprendre efficacement."
        buttonText="Explorer les ressources"
        buttonLink="/method"
        imageLeft
        imageSrc="/images/Desktop-ban.png"
        imageAlt="Méthode"
      />
      <BanText
        caption="LE WEB, UN ÉCOSYSTÈME EN CONSTANTE ÉVOLUTION"
        titleParts={[
          { text: "Restez informé des dernières", highlight: false },
          { text: "tendances", highlight: true },
        ]}
        text="Chaque semaine, nous analysons les nouveautés du web : frameworks émergents, bonnes pratiques SEO, accessibilité, et bien plus encore. Ne manquez aucune actualité du digital !"
        buttonText="Lire les articles récents"
        buttonLink="/articles"
        showSquares
      />
    </div>
  ) 
}
