import './globals.css'
import styles from './page.module.css'

// Animation timing constants
const CATEGORY_ANIMATION_DELAY = 0.1 // seconds delay between category groups
const LINK_ANIMATION_DELAY = 0.05 // seconds delay between links within a category

export default function Home() {
  // Profile configuration - easily customizable
  const profile = {
    name: 'Your Name',
    bio: 'Digital Creator | Entrepreneur | Building Cool Stuff ✨',
    // Default avatar - replace with your own image URL or local file in /public folder
    profileImage: '/default-avatar.svg',
  }

  // Links organized by categories for better navigation
  const linkCategories = [
    {
      category: '🛒 Shop & Products',
      links: [
        {
          title: 'Jokez Shop',
          url: 'https://www.jokez.shop',
          description: 'Shop my latest products',
          icon: '🛍️'
        }
      ]
    },
    {
      category: '🎭 Entertainment',
      links: [
        {
          title: 'My Joke Website',
          url: 'https://www.degenjokez.xyz',
          description: 'Laugh with my daily jokes',
          icon: '😂'
        }
      ]
    },
    {
      category: '💼 Projects & Tech',
      links: [
        {
          title: 'Crypto Site (Testnet)',
          url: 'https://www.yielddelta.xyz',
          description: 'Test out AI powered liquidity Vaults',
          icon: '💰'
        }
      ]
    },
    {
      category: '🌐 Social Media',
      links: [
        {
          title: 'Twitter / X',
          url: 'https://twitter.com',
          description: 'Follow me for updates',
          icon: '🐦'
        },
        {
          title: 'Instagram',
          url: 'https://instagram.com',
          description: 'Behind the scenes content',
          icon: '📸'
        },
        {
          title: 'YouTube',
          url: 'https://youtube.com',
          description: 'Watch my latest videos',
          icon: '🎬'
        }
      ]
    }
  ]

  return (
    <main className={styles.container}>
      {/* Profile Header Section */}
      <header className={styles.header}>
        <div className={styles.profileImageWrapper}>
          <img
            src={profile.profileImage}
            alt={`${profile.name}'s profile`}
            className={styles.profileImage}
          />
          <div className={styles.profileImageOverlay}>
            <span className={styles.editIcon}>📷</span>
          </div>
        </div>
        <h1 className={styles.name}>{profile.name}</h1>
        <p className={styles.bio}>{profile.bio}</p>
      </header>

      {/* Links Section with Categories */}
      <section className={styles.linksSection}>
        {linkCategories.map((category, categoryIndex) => (
          <div key={category.category} className={styles.categoryGroup}>
            <h2 className={styles.categoryTitle}>{category.category}</h2>
            <div className={styles.links}>
              {category.links.map((link, linkIndex) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkCard}
                  style={{ animationDelay: `${(categoryIndex * CATEGORY_ANIMATION_DELAY) + (linkIndex * LINK_ANIMATION_DELAY)}s` }}
                  title={link.description}
                >
                  <span className={styles.linkIcon}>{link.icon}</span>
                  <div className={styles.linkContent}>
                    <h3 className={styles.linkTitle}>{link.title}</h3>
                    <p className={styles.linkDescription}>{link.description}</p>
                  </div>
                  <span className={styles.linkArrow}>→</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>Made with ❤️ using Next.js</p>
        <p className={styles.footerSubtext}>Customize your own links bio page</p>
      </footer>
    </main>
  )
}
