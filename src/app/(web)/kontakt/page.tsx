import Link from 'next/link'

export const metadata = {
  title: 'Kontakt | Own Your Cycle',
  description: 'Menštruačný cyklus je zrkadlom nášho zdravia',
}

export default function KontaktPage() {
  return (
    <>
      <div className="bg-red-50 pt-12 px-2 min-h-screen">
        <section className="container mx-auto">
          <h1 className="mt-12 text-6xl text-center font-semibold">Kontakt</h1>
          <p className="mt-6 text-center text-2xl">Kde ma nájdeš?</p>
        </section>

        <section className="container mx-auto">
          <div className="mt-6 bg-white p-12 shadow-sm mx-auto text-xl flex flex-wrap flex-col md:flex-row justify-center items-center">
            <div className="flex justify-center">
              <div className="mr-2">Email: </div>
              <div>
                <Link
                  href="mailto:ownyourcycle@gmail.com"
                  className="font-semibold border-b-2 hover:border-black transition-colors"
                >
                  ownyourcycle@gmail.com
                </Link>
              </div>
            </div>
            <div className="px-6 text-4xl text-gray-400 font-thin hidden md:block">|</div>
            <div className="flex justify-center">
              <div className="mr-2">Instagram: </div>
              <div>
                <Link
                  href="https://instagram.com/ownyourcycle"
                  className="font-semibold border-b-2 hover:border-black transition-colors"
                >
                  @ownyourcycle
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
