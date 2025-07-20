export default function HeroSection({ data }: { data: any }) {
  return (
    <section className="bg-gray-100 py-16 text-center">
      <h1 className="text-4xl font-bold">{data.heading}</h1>
      <p className="mt-2 text-lg">{data.subheading}</p>
      {data.backgroundImage && (
        <img src={data.backgroundImage} alt="Hero" className="mx-auto mt-4 rounded-lg" />
      )}
    </section>
  )
}
