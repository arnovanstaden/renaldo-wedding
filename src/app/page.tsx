import Hero from '@components/Hero';
import Section from '@components/Section';

export default function Home() {
  return (
    <main>
      <Hero />
      <Section
        image='/images/sections/info.jpeg'
        heading='The Day'
      >
        Blah
      </Section>
      <Section
        image='/images/sections/mary.jpeg'
        heading="Mary's Story"
        alignRight
      >
        Blah
      </Section>
    </main>
  )
}
