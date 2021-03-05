import Lightning from './svgs/lightning'
import Jamstack from './svgs/jamstack'
import Scroll from './svgs/scroll'

const features = [
  {
    text: 'Micro-Frontends',
    icon: Scroll,
  },
  {
    text: 'Code Splitting',
    icon: Lightning,
  },
  {
    text: 'Monorepos',
    icon: Jamstack,
  },
]

const Features = () => (
  <div className="features">
    {features.map(({ text, icon: Icon }) => (
      <div className="feature" key={text}>
        {Icon && <Icon height={24} width={24} />}
        <h4>{text}</h4>
      </div>
    ))}
  </div>
)

export default Features
