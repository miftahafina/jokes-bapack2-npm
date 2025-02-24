import { data } from "./data.js";

export const joke = () => {
    const lastIndex   = data.length - 1
    const randomIndex = Math.floor(Math.random() * lastIndex)
    const randomJoke  = data[randomIndex]

    return randomJoke
}