import classNames from 'classnames';
import styles from './styles.module.scss';
import Image from 'next/image';

interface IProps {
  children: React.ReactNode;
  alignRight?: boolean
  image: string;
  heading: string;
  className?: string;
  id?: string;
}

const Section = (props: IProps): JSX.Element | null => {
  const classes = classNames(
    styles.Section,
    props.alignRight && styles.alignRight,
    props.className
  );

  return (
    <section className={classes} id={props.id}>
      <div className={styles.image}>
        <Image
          fill
          alt="Wedding"
          src={props.image}
          quality={100}
        />
      </div>
      <div className={styles.content}>
        <h1>{props.heading}</h1>
        {props.children}
      </div>
    </section>
  );
};

export default Section;
