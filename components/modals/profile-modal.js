import React from 'react'
import Modal from './modal'

function ProfileModal({ onClick }) {
    return (
        <Modal>
            <div className="flex flex-col w-96 px-8">
                <button className="h-10 border-b text-red-600">Bu kullanıcıyı engelle</button>
                <button className="h-10 border-b text-red-600">Kısıtla</button>
                <button className="h-10 border-b text-red-600">Kullanıcı Şikayet Et</button>
                <button className="h-10 border-b" onClick={onClick}>İptal</button>
            </div>
        </Modal>
    )
}

export default ProfileModal
