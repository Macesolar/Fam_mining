let item= [0,1,2,3,4,5,6,7,8,9];
let nextIndex = 0


export function chatindex() {
    if (nextIndex >= item.length) {
            nextIndex = 0;
        }
        nextIndex++;
    return (
        item[nextIndex - 1]
        
    )
    
}
