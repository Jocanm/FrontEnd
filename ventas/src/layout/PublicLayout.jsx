import React from 'react'

const PublicLayout = ({children}) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <main className="w-full h-full">{children}</main>
        </div>
    )
}

export default PublicLayout
