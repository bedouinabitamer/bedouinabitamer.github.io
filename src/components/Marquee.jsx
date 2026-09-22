import { marquee } from '../data/content'
import './Marquee.css'

export default function Marquee() {
  // The track is rendered twice so the loop is seamless at -50%.
  const track = [...marquee, ...marquee]

  return (
    <div className="marquee" aria-label="Tech stack">
      <div className="marquee__track">
        {track.map((item, i) => (
          <span className="marquee__item" key={`${item}-${i}`} aria-hidden={i >= marquee.length}>
            {item}
            <span className="marquee__sep" aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
