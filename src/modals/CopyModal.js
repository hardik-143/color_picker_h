import React from 'react'
import ModalLayout from './ModalLayout'

const CopyModal = () => {

  return (
    <ModalLayout
        title="Copy Color"
        show={false}
        setShow={() => {}}
    >
        <p>
            color copied
        </p>
    </ModalLayout>
  )
}

export default CopyModal