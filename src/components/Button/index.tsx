import styles from './styles.module.scss';
import classNames from 'classnames';

const Button = ({ children, url, className }: { children: string, url?: string, className?: string }): JSX.Element | null => {

  const Inner = () => (
    <button className={classNames(styles.Button, className)}>
      {children}
    </button>
  );

  if (!url) return <Inner />

  return (
    <a
      href={url}
      target={url.includes('http') ? '_blank' : undefined}
    >
      <Inner />
    </a>
  );
};

export default Button;
