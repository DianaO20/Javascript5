export function func(number1, number2){
    console.log(number1 + number2)
}


export function func1(number1, number2 = 4){
    console.log(arguments[0] + number2)
}


export const name = function(firstName, lastName){
    return `${firstName} ${lastName}`
}

export const arrayExample = function() {
    return Object.values(arguments)
}