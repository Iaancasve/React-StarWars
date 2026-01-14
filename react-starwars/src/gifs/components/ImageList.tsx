import { type Image } from '../../mock-data/images.mock.ts'

interface Props {
    images: Image[];
}

export const ImageList = ({images}: Props) => {
  return (
    <div className="images-container">
        {images.map((image) => (
          <div key={image.id} className="images-card">
            <img src={image.image} alt={image.name} />
            <h3>{image.name}</h3>
            <p>
              {image.width}x{image.height} (1.5mb)
            </p>
          </div>
        ))}
      </div>
  )
}
