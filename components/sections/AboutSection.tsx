export default function AboutSection({ data }: { data: any }) {
  return (
    <section className="py-16 text-center bg-white">
      <h2 className="text-3xl font-semibold">{data.title}</h2>
      <p className="mt-2 text-gray-700">{data.description}</p>
      {data.teamImage && (
        <img src={data.teamImage} alt="Team" className="mx-auto mt-4 rounded-lg" />
      )}
    </section>
  )
}
