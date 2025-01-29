
const greeting = function (name){
    return `Hi, ${name}`;
}

//Arrow funtion -explicit return
const newGreeting = (name) =>{
    return `Hi, ${name}`;
}

//Arrow funtion - implicit return
const newGreetingImplicit = name => `Hi ${name}`;
const newGreetingImplicitWithParameters = (name,lastName) => `Hi ${name} ${lastName}`;

//Lexical Binding

const finctionalCharacter = {
    name: 'Uncle Ben',
    messegeWithTraditionalFunction: function(message){
        console.log(`${this.name} says: ${message}`);
    },
    messegeWithArrowFunction: (message) =>{
        console.log(`${this.name} says:${message}`);
    }
}

finctionalCharacter.messegeWithTraditionalFunction(`With great power comes great responsability.`);
finctionalCharacter.messegeWithArrowFunction(`Beware of Doctor Octopus.`);

