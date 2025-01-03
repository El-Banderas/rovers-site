
export const isMobile = () => {
    const width = window.innerHeight
const height =  window.innerWidth;

    if (width < 768 && height < 500) console.log("True")
    else console.log("False")
    if (width < 768 && height < 500) return true
    else return false
}