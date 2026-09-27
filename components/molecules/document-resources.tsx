type Props = {
  links: { rel: string; href: string }[];
  styles: string[];
};

export function DocumentResources({ links, styles }: Props) {
  return (
    <>
      {links.map(({ rel, href }) => (
        <link key={`${rel}:${href}`} rel={rel} href={href} />
      ))}
      {styles.map((css, index) => (
        <style key={index} dangerouslySetInnerHTML={{ __html: css }} />
      ))}
    </>
  );
}
