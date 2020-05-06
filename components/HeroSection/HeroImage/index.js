const HeroImage = () => (
  <picture>
    <source media="(min-width: 800px)" srcSet="/romance.png" />
    <img src="/romance_square.png" alt="Romantic Hero Image of Steph and Vic" />
  </picture>
)

export default HeroImage;
