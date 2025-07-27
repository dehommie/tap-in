import Image, { ImageProps } from 'next/image'

const UnoptimizedImage = ({ src, alt, ...props }: ImageProps) => {
    return <Image src={src} alt={alt} {...props} unoptimized />
}

export default UnoptimizedImage