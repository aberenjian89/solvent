export const NAVIGATION_CHANGED = "NAVIGATION_CHANGED";


export const navigation_changed = (status,class_name)=>({
    type: NAVIGATION_CHANGED,
    status,
    class_name
})
