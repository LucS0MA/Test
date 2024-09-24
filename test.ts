// ex1 :



const messsageText: string = "Hello Bob!"; // you should type on this line
const messageCreatedAt: Date = new Date(); // this one too

function stringifyMessage(text: string, createdAt: Date): string { // this one too
	return `${text}, the ${createdAt.toLocaleDateString()}`;
}

console.log(stringifyMessage(messsageText, messageCreatedAt))



// ex2 :



type Message = { from: string, message:  string, isRead?: boolean }

const message1: Message = { from: "Bob", message: "Hello Alice!", isRead: true };
const message2: Message = { from: "Alice", message: "Hi Bob!" };

console.log(message1,  message2)



// ex3 :



const messages: Message[] = [message1, message2]; // type this line
function readMessages(messagesList: Message[]):number { // this one too
	messages.forEach(message => {message.isRead = true;
    });
	return messagesList.length;
}
readMessages(messages);

console.log(readMessages(messages))



// ex4 :



type Notif = { at: number, state: "unread"  | "read" }
const notification1: Notif = { at: 1694011133, state: "unread" };
const notification2: Notif = { at: 1694011532, state: "read" };



// ex5 : 



function readNotificationOrMessage(notificationOrMessage: Notif | Message): void { // type this line
	if  ("isRead" in notificationOrMessage) {
        notificationOrMessage.isRead = true;
    } else if ("state" in notificationOrMessage) {
        notificationOrMessage.state = "read";
    }
	// this function does NOT return anything
}

console.log(readNotificationOrMessage(notification1))
