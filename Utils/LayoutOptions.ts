const PagesWithNavbarList=[
    '/',
]
const PagesWithFooterList=[
    '/',
]

export const shouldShowNavbar=(path:string)=>{
    return PagesWithNavbarList.includes(path);
}
export const shouldShowFooter=(path:string)=>{
    return PagesWithFooterList.includes(path);
}