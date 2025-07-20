import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'

export default function PageRenderer({ sections }: { sections: any[] }) {
  return (
    <>
      {sections?.map((section, index) => {
        if (section._type === 'heroSection') {
          return <HeroSection key={index} data={section} />
        }

        if (section._type === 'aboutSection') {
          return <AboutSection key={index} data={section} />
        }

        return null 
      })}
    </>
  )
}


