/* eslint-disable react/no-unescaped-entities */
import Hero from '@components/Hero';
import Section from '@components/Section';
import styles from './styles.module.scss';
import RSVP from '@components/RSVP';
import Button from '@components/Button';
import FAQ from '@components/FAQ';
import Timeline from '@components/Timeline';

const Home = () => {
  return (
    <main className={styles.Home}>
      <Hero />

      <Section
        image='/images/sections/info.jpg'
        heading='The Special Day'
        className={styles.info}
      >
        <h3>Date</h3>
        <p>Sunday 21 April 2024 </p>

        <h3>Time</h3>
        <p>14:00 - 22:00</p>

        <h3>Venue</h3>
        <p>Kleinkaap</p>

        <Button url='https://goo.gl/maps/TLpL7cjfaZTaa4AX6' className={styles.button}>
          DIRECTIONS
        </Button>
      </Section>

      <Section
        image='/images/sections/mary.jpg'
        heading="Mary's Story"
        alignRight
        className={styles.story}
      >
        <p>
          Ek dink nog aan die dae<br />
          nou reeds lank verby<br />
          toe Renaldo as 'n P.N.H.S leier<br />
          vir die groentjie sê in watter ry om te bly.<br />
          <br />
          My hart klop 'n bietjie vinniger,<br />
          en my bene raak lam.<br />
          Maar ongelukkig<br />
          is hy net vuur en vlam<br />
          vir die ontgroening.<br />
          <br />
          Die tienerlewe het vinnig verbygegaan,<br />
          en het in die vergeetboek beland.<br />
          Skielik was daar 'n man,<br />
          volmaak deur God se hand.<br />
          <br />
          Renaldo het verskyn<br />
          en my lewe heeltemal laat skyn.<br />
          Hy benader my met uiterste sorg<br />
          en ek sal sy warm liefde altyd volg.<br />
          In hierdie liefde vind ek geen valsheid -<br />
          Net die mooiste melodie en waarheid.<br />
          <br />
          My hart het sy redes,<br />
          Waarvan my brein niks verstaan,<br />
          Maar sonder hom langs-my,<br />
          Sal ek beslis vergaan.<br />
          <br />
          Die Jawoord is uitgespreek,<br />
          Word saam met my oud,<br />
          In die huwelikskuit.<br />
          Die jare voor ons is vol goud.<br />
          <br />
          Hier seil ons nou,<br />
          Hy is dié man wat die sleutel<br />
          tot my hart besit.<br />
          Ons twee is vir ewig bymekaar!<br />
          'n Lied en 'n lag op die huweliksdag,<br />
          en 'n glasie omhoog op die mooiste paar...<br />
        </p>
      </Section>

      <Section
        image='/images/sections/renaldo.jpg'
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
          I’m open to your love , beyond time or eternal scars. <br />
          Our love story's script will forever to grow. <br />
        </p>
      </Section>

      <Section
        image='/images/sections/party.jpg'
        heading='The Wedding Party'
        alignRight
      >
        <h3>Groomsmen</h3>
        <ul>
          <li>Voden Fourie (Best man)</li>
          <li>Tiaan van der Walt (Master of Ceremonies)</li>
          <li>Ross Laubscher</li>
          <li>Roulin Mentoor</li>
          <li>Lebang Thloaele</li>
        </ul>
        <br />
        <h3>Bridesmaids</h3>
        <ul>
          <li>Martinette Stander (Maid of Honour)</li>
          <li>Suné van der Walt</li>
          <li>Angelique van der Walt</li>
          <li>Izaan Maritz</li>
          <li>Sankia Odendaal</li>
        </ul>
        <br />
        <h3>Flower girls</h3>
        <ul>
          <li>Angelique van der Walt</li>
          <li>Suné van der Walt</li>
        </ul>
        <br />
        <h3>Ring bearer</h3>
        <ul>
          <li>Daniel Bredenkamp</li>
        </ul>
      </Section>

      <Section
        image='/images/sections/speeches.jpg'
        heading='The Wedding Party'
      >
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
        <li>Tiaan van der Walt</li>
      </Section>

      <Section
        image='/images/sections/program.jpeg'
        heading='The Program'
        alignRight
        id="program"
      >
        <Timeline />
      </Section>


      <Section
        image='/images/sections/rsvp.jpg'
        heading='RSVP'
        id="rsvp"
      >
        <RSVP />
      </Section>

      <Section
        image='/images/sections/gifts.jpg'
        heading='Gifts'
        alignRight
      >
        <p>As we begin this new chapter in our lives, we feel incredibly blessed to have the love and support of our cherished family and friends.</p>
        <p>We'd be more than happy with a contribution, which you can transfer here:</p>
        <br />
        <p>
          <b>Bank:</b>  Capitec <br />
          <b>Account Type:</b> Savings <br />
          <b>Account Name:</b> Maryanke <br />
          <b>Account Number:</b> 1496253823 <br />
        </p>
      </Section>

      <Section
        image='/images/sections/faq.jpg'
        heading='Frequently Asked Questions'
      >
        <FAQ />
      </Section>
    </main>
  )
}


export default Home;
