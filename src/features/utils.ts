export const sortByHighest = ({details : {price : firstItem}}:any, {details : {price : secondItem}}:any) => {
    return secondItem-firstItem
}
  
export const sortByLowest = ({details : {price : firstItem}}:any, {details : {price : secondItem}}:any) => {
    return firstItem-secondItem
}
let myArr :any = []

// filter method to filter array based on details.size

// filter method to filer array based on details.type