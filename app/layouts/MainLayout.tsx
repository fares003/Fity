import React from 'react'

function MainLayout({children,Header,Footer}: {children: React.ReactNode, Header?: React.ReactNode, Footer?: React.ReactNode}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header>{Header}</header>
      <main>{children}</main>
      <footer>{Footer}</footer>
    </div>
  )
}

export default MainLayout