import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'

export default function PageRenderer({ sections }: { sections: any[] }) {
  return (
    <>
      {sections?.map((section, index) => {
        switch (section?._type) {
          case 'heroSection':
            return <HeroSection key={index} data={section} />
          case 'aboutSection':
            return <AboutSection key={index} data={section} />
          default:
            return null
        }
      })}
    </>
  )
}
