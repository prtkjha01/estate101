import React from 'react'

export default function Footer() {
    return (
        <div
            style={{
                backgroundColor: '#003166',
                marginTop: '5rem'
            }}
        ><p
            style={{
                marginBottom: '0',
                padding: '5rem 10rem',
                textAlign: 'center',
                color: '#fff'

            }}
        ><a href="www.instagram.com" className='px-3' style={{ color: '#fff' }}>instagram</a>
                <a href="www.instagram.com" className='px-3' style={{ color: '#fff' }}>facebook</a>
                <a href="www.instagram.com" className='px-3' style={{ color: '#fff' }}>twitter</a>
            </p>
        </div>
    )
}
