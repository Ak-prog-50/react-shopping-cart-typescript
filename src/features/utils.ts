export const sortByHighest = ({details : {price : firstItem}}:any, {details : {price : secondItem}}:any) :number => {
    return secondItem-firstItem
}
  
export const sortByLowest = ({details : {price : firstItem}}:any, {details : {price : secondItem}}:any) :number => {
    return firstItem-secondItem
}

// filter method to filter array based on details.size

// filter method to filer array based on details.type