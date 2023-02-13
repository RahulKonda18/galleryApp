import './index.css'

const ThumbnailItem = props => {
  const {details, select, click} = props
  const {thumbnailUrl, thumbnailAltText} = details
  const check = select === details.id ? 'none' : 'hello'
  const change = () => {
    click(details)
  }
  return (
    <li onClick={change} className="thumbnail-spacing">
      <button type="button">
        <img className={check} src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
