import './globals.css'
import styles from './page.module.css'

export default function Home() {
  const links = [
    {
      title: '🛍️ Jokez Shop',
      url: 'https://www.jokez.shop',
      description: 'Shop my latest products',
      icon: '🛍️',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: '😂 My Joke Website',
      url: 'https://www.degenjokez.xyz',
      description: 'Laugh with my daily jokes',
      icon: '😂',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: '💰 Crypto Site (Testnet)',
      url: 'https://www.yielddelta.xyz',
      description: 'Test out AI powered liquidity Vaults',
      icon: '💰',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      title: '📈 Virtual Options Platform',
      url: 'https://www.marketstockpick.com',
      description: 'Practice trading options with virtual money',
      icon: '📈',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    }
  ]

  const socialLinks = [
    { name: 'X (Twitter)', icon: '𝕏', url: 'https://www.x.com/glugo21', color: '#000000' },
    { name: 'Instagram', icon: '📷', url: 'https://www.instagram.com/glugo123', color: '#E4405F' },
    { name: 'YouTube', icon: '▶️', url: 'https://youtube.co/@foolishloco', color: '#FF0000' },
    { name: 'TikTok', icon: '🎵', url: 'https://www.tiktok.com/@degenjokez', color: '#000000' },
    { name: 'Snapchat', icon: '👻', url: 'https://snapchat.com/t/qyfU2uRR', color: '#FFFC00' }
  ]

  return (
    <main className={styles.container}>
      <div className={styles.backgroundBlobs}>
        <div className={styles.blob1}></div>
        <div className={styles.blob2}></div>
        <div className={styles.blob3}></div>
      </div>

      <div className={styles.content}>
        <div className={styles.profile}>
          <div className={styles.avatarWrapper}>
            <div className={styles.avatarRing}></div>
            <div className={styles.avatar}>
              <img
                src="/avatar.svg"
                alt="Profile Avatar"
                className={styles.avatarImage}
              />
            </div>
          </div>
          <h1 className={styles.name}>Hey, I'm Your Name!</h1>
          <p className={styles.bio}>
            Content Creator • Entrepreneur • Tech Enthusiast
          </p>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>26K+</span>
              <span className={styles.statLabel}>TikTok</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>Posts</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>4</span>
              <span className={styles.statLabel}>Projects</span>
            </div>
          </div>
        </div>

        <div className={styles.socialMedia}>
          <h2 className={styles.sectionTitle}>Connect With Me</h2>
          <div className={styles.socialGrid}>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialButton}
                style={{ '--social-color': social.color }}
                title={social.name}
              >
                <span className={styles.socialIcon}>{social.icon}</span>
              </a>
            ))}
          </div>
        </div>

        <div className={styles.linksSection}>
          <h2 className={styles.sectionTitle}>Featured Links</h2>
          <div className={styles.links}>
            {links.map((link, index) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkCard}
                style={{ '--card-gradient': link.gradient, '--delay': `${index * 0.1}s` }}
              >
                <div className={styles.linkIconWrapper}>
                  <span className={styles.linkIcon}>{link.icon}</span>
                </div>
                <div className={styles.linkContent}>
                  <h3 className={styles.linkTitle}>{link.title}</h3>
                  <p className={styles.linkDescription}>{link.description}</p>
                </div>
                <div className={styles.linkArrow}>→</div>
              </a>
            ))}
          </div>
        </div>

        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <p>Made with ❤️ using Next.js</p>
            <p className={styles.footerLinks}>
              <a href="#privacy">Privacy</a>
              <span>•</span>
              <a href="#terms">Terms</a>
              <span>•</span>
              <a href="#contact">Contact</a>
            </p>
          </div>
        </footer>
      </div>
    </main>
  )
}
