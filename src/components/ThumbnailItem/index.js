import './index.css'

const ThumbnailItem = props => {
  const {eachThumbnail, onChangePicture, isActive} = props
  const {imageUrl, thumbnailUrl, imageAltText, thumbnailAltText} = eachThumbnail

  const onClickChangePicture = () => {
    onChangePicture(imageUrl, imageAltText)
  }
  const activeClass = isActive ? 'active-thumb-nails' : 'thumb-nail-image'

  return (
    <li className="list-item">
      <button type="button" className="button-styling">
        <img
          src={thumbnailUrl}
          className={activeClass}
          alt={thumbnailAltText}
          onClick={onClickChangePicture}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
