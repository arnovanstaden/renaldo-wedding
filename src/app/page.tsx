/* eslint-disable react/no-unescaped-entities */
import Hero from '@components/Hero';
import Section from '@components/Section';
import styles from './styles.module.scss';
import RSVP from '@components/RSVP';
import Button from '@components/Button';
import FAQ from '@components/FAQ';

const Home = () => {
  return (
    <main className={styles.Home}>
      <Hero />

      <Section
        image='/images/sections/info.jpeg'
        heading='The Day'
        className={styles.info}
      >
        <h3>Date</h3>
        <p>Sunday 24 April 14:00</p>

        <h3>Venue</h3>
        <p>Kleinkaap</p>

        <Button url='https://goo.gl/maps/TLpL7cjfaZTaa4AX6' className={styles.button}>
          Directions
        </Button>
      </Section>

      <Section
        image='/images/sections/mary.jpeg'
        heading="Mary's Story"
        alignRight
        className={styles.story}
      >
        <p>
          Ek dink nog aan die dae <br />
          nou reeds lank verby <br />
          toe Renaldo as 'n P.N.H.S leier <br />
          vir die groentjie sê in watter ry om te bly. <br />
          <br /> <br />
          My hart klop 'n bietjie vinniger, <br />
          en my bene raak lam. <br />
          Maar ongelukkig <br />
          is hy net vuur en vlam <br />
          vir die ontgroening. <br />
          <br /> <br />
          Die tyd het vinnig verbygegaan <br />
          en die ongemaklike tienerlewe <br />
          het in die vergeetboek beland. <br />
          Skielik was daar 'n man, volmaak deur God gegewe. <br />
          <br /> <br />
          Renaldo het gekom <br />
          en my lewe heeltemal verander. <br />
          Hy benader my met liefde <br />
          en uiterste sorg. <br />
          In hierdie liefde vind ek geen valsheid - <br />
          Net die mooiste melodie wat ons altyd sal nader. <br />
          <br /> <br />
          My hart het sy redes, <br />
          Waarvan my brein niks verstaan, <br />
          Maar sonder hom langs-my, <br />
          Sal ek beslis vergaan. <br />
          <br /> <br />
          Die Jawoord is uitgespreek, <br />
          Word saam met my oud, <br />
          In die huwelikskuit. <br />
          Die jare voor ons is vol goud. <br />
          <br /> <br />
          Hier seil ons nou, <br />
          Hy is dié man wat die sleutel <br />
          tot my hart besit. <br />
          Ons twee is vir ewig bymekaar! <br />
          'n Lied en 'n lag op die huweliksdag, <br />
          en 'n glasie omhoog op die mooiste paar...</p> <br />
      </Section>

      <Section
        image='/images/sections/renaldo.jpeg'
        heading="Renaldo's Story"
        className={styles.story}
      >
        <p>
          As we meet beneath the night sky's gleam, <br />
          Our hearts weave promises connecting a sacred stream, <br />
          The breeze whispers secrets through rustling trees <br />
          As our hopes and dreams take flight, wild and free. <br />
          <br /> <br />
          We share our souls, our thoughts, and fears, <br />
          As fireflies twirl, sensing joy and cheers, <br />
          Each word a bond, a step towards trust, <br />
          A stillness, as if the universe must. <br />
          <br /> <br />
          Our hearts beat in rhythm, a love symphony, <br />
          Together, we vow to walk life's melody, <br />
          Through life's storms and its whims, <br />
          We'll treasure this love, our precious gem. <br />
          <br /> <br />
          We seal under the stars. <br />
          As we bask in this moment's glow, <br />
          Our love story's script will forever to grow. <br />
          I’m open to your love , beyond time or eternal scars. <br />
        </p>
      </Section>

      <Section
        image='/images/sections/party.jpeg'
        heading='The Wedding Party'
        alignRight
      >
        <h3>Groomsmen</h3>
        <ul>
          <li>Voden Fourie (Best man)</li>
          <li>Tiaan van der Walt (Seremoniemeester)</li>
          <li>Ross Laubscher</li>
          <li>Willem van der Walt</li>
          <li>Mark McCallum</li>
        </ul>
        <br />
        <h3>Bridesmaids</h3>
        <ul>
          <li>Martinette Stander (Hoofstrooi)</li>
          <li>Suné van der Walt</li>
          <li>Angelique van der Walt</li>
          <li>Izaan Maritz</li>
          <li>René Swart</li>
        </ul>
        <br />
        <h3>Flower girls</h3>
        <ul>
          <li>Sankia Odendaal</li>
          <li>Prianka Jonck</li>
        </ul>
        <br />
        <h3>Ring bearer</h3>
        <ul>
          <li>Daniel Bredenkamp</li>
        </ul>
      </Section>

      <Section
        image='/images/sections/speeches.jpeg'
        heading='The Wedding Party'
      >
        <h3>Escorting Renaldo</h3>
        <li>Mariette Laubscher</li>
        <br />
        <h3>Escorting Maryanke</h3>
        <li>Wim Pols</li>
        <br />
        <h3>Speeches</h3>
        <li>Gaele van der Walt</li>
        <li>Leon La Grange</li>
        <li>Marius Erasmus</li>
        <li>Veruschka Laubscher</li>
        <li>Angelique van der Walt</li>
        <li>Suné van der Walt</li>
        <li>Martinette Stander</li>
        <li>Voden Fourie</li>
      </Section>

      <Section
        image='/images/sections/rsvp.jpeg'
        heading='RSVP'
        alignRight
        id="rsvp"
      >
        <RSVP />
      </Section>

      <Section
        image='/images/sections/faq.jpeg'
        heading='Frequently Asked Questions'
      >
        <FAQ />
      </Section>
    </main>
  )
}


export default Home;
