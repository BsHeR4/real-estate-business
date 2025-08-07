import React from 'react'
import './ClientProfile.css'

/**
 * ClientProfile Component
 *
 * A reusable component for displaying client information including profile photo, name, and location.
 *
 * Props:
 * - name (string): Client's name
 * - location (string): Client's location
 * - photo (string): URL/path to client's profile photo
 *
 * Usage:
 * <ClientProfile
 *   name: "Wade Warren",
 *   location: "USA, California",
 *   photo: "/assets/imgs/Profile.png"
 * />
 *
 * Dependencies:
 * - ClientProfile.css: Styling module
 */
const ClientProfile = ({name, location, photo}) => {
    return (
        <div className={'mk-client-profile'}>
            <img src={photo} alt={`${name}'s profile`} className={'mk-client-photo'}/>
            <div className={'mk-client-info'}>
                <p className={'mk-client-name'}>{name}</p>
                <p className={'mk-client-location'}>{location}</p>
            </div>
        </div>
    )
}
export default ClientProfile
