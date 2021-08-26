import React from 'react'
import Modal from './modal'

function HomePostModal({ onClick }) {
    return (
        <Modal>
            <div className="flex flex-col w-96 px-8">
                <button className="h-10 border-b text-red-600">Şikayet Et</button>
                <button className="h-10 border-b text-red-600">Takibi Bırak</button>
                <button className="h-10 border-b">Gönderiye Git</button>
                <button className="h-10 border-b">Paylaş</button>
                <button className="h-10 border-b">Bağlantıyı Kopyala</button>
                <button className="h-10 border-b">Sitene Göm</button>
                <button className="h-10 border-b" onClick={onClick}>İptal</button>
            </div>
        </Modal>
    )
}

export default HomePostModal
