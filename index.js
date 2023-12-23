const guests=["Guadalupe","Ollie", "Aki"];
function writeCards(names) {
    let messages = []
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${guests[i]}, for the wonderful surprise gift!`)
    }
    return messages;
}
function countDown(startingNumber){
    if (startingNumber< 0 || !
        Number.isInteger(startingNumber)) {
            console.log("Positive numbers only");
            return;
        }
    for (let i=startingNumber; i>=0; i--){
        console.log(i);
    }
}
    