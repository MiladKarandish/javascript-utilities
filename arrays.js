// Remove duplicated object from array => best performance
const removeDuplicates = (array) => Array.from(new Map(array.map((item) => [item["id"], item])).values())
