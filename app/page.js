import './globals.css'
import styles from './page.module.css'

export default function Home() {
  const links = [
    {
      title: '🛍️ Jokez Shop',
      url: 'https://www.jokez.shop',
      description: 'Shop my latest products'
    },
    {
      title: '😂 My Joke Website',
      url: 'https://www.degenjokez.xyz',
      description: 'Laugh with my daily jokes'
    }
  ]

  return (
    <main className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.avatar}>
          <span className={styles.avatarEmoji}>👋</span>
        </div>
        <h1 className={styles.name}>Welcome!</h1>
        <p className={styles.bio}>Check out all my links below</p>
      </div>

      <div className={styles.links}>
        {links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkCard}
          >
            <h2 className={styles.linkTitle}>{link.title}</h2>
            <p className={styles.linkDescription}>{link.description}</p>
          </a>
        ))}
      </div>

      <footer className={styles.footer}>
        <p>Made with ❤️ using Next.js</p>
      </footer>
    </main>
  )
}
