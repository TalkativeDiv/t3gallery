import React from 'react'
import ImagePage from '~/components/image-page'

export default function ImageModal({ params: { id: imgId } }: { params: { id: string } }) {
    const idAsNumber = Number(imgId)
    if (Number.isNaN(idAsNumber)) throw new Error('Invalid image ID')
    return <ImagePage imgId={idAsNumber} />
}