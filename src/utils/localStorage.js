const THEME = 'THEME';

export const getThemeLocalStorage = () =>{
    console.log()
    return localStorage.getItem(THEME)
    

}
export const setThemeLocalStorage = (value) =>{
    localStorage.setItem(THEME,value)
}

export const clearThemeLocalStorage = () =>{
    localStorage.clear(THEME)
}