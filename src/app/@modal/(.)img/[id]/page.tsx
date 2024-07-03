import React from 'react'
import { getSpecificImage } from '~/server/queries'
import { Modal } from "./modal"
import ImagePage from '~/components/image-page'
export default function ImageModal({
    params: { id: imgId }
}: {
    params: { id: string }
}) {
    const idAsNumber = Number(imgId)
    if (Number.isNaN(idAsNumber)) throw new Error('Invalid image ID')

        return (
        <Modal>
            <ImagePage imgId={idAsNumber} />
        </Modal>
    )
}