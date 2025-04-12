export default function getModifiedArray(arr) {
    let modifiedArray = [...arr];
    modifiedArray[0] = "Start";
    modifiedArray[arr.length-1] = "End";
    return modifiedArray;
}