export const sortByHighest = ({details : {price : firstItem}}:any, {details : {price : secondItem}}:any) :number => {
    return secondItem-firstItem
}
  
export const sortByLowest = ({details : {price : firstItem}}:any, {details : {price : secondItem}}:any) :number => {
    return firstItem-secondItem
}

export const reducer = (previousValue :number, currentValue :number) => previousValue + currentValue;