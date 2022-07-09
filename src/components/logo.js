/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from './link';

export default function Logo({ src, ...rest }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        cursor: 'pointer',
        mr: 15,
        width: 55,
        height: 55,
      }}
      {...rest}
    >
      <Image src={src} alt="grooming salon logo" title='Грумінг-салон для домашніх тварин в Києві' />
    </Link>
  );
}
