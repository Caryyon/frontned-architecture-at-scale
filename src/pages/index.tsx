import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'

const FAAS = 'Frontend Architecture at Scale'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <h1>{FAAS}</h1>
        <h2>We couldn't afford divops.com</h2>

        <Features />

        <div className="explanation">
          <p>
            {FAAS} started with an idea that frontend architecture has grown
            beyond its early stages and that we as a community should be sharing
            our experiences. A Friday Clubhouse about micro-frontends has
            solidified into something much more. With a rotating panel of guests
            and topics, it’s sure to be educational as well as diverse and
            entertaining.
          </p>
          <p>
            Interested in learning more? Check out our{' '}
            <ExtLink href="https://www.notion.so/Frontend-Architecture-at-Scale-d659cd6a92a44f888e7414601e8c794c">
              Notion board
            </ExtLink>{' '}
            for a list of past and upcoming topics.
          </p>
        </div>
      </div>
    </>
  )
}
