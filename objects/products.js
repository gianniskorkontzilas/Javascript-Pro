const contacts = [{firstname: "Alice", lastname: "W.", phoneNumber: "210456656"},
{firstname: "Bob", lastname: "M.", phoneNumber: "21048456565"}
]

function insertContact(firstname, lastname, phoneNumber) {
    if (!firstname || !lastname || !phoneNumber) {
        return
    }

    contacts.push({firstname, lastname, phoneNumber})
}

function deleteContact(phoneNumber) {
    if (!phoneNumber) return

    let contact = contacts.find(c => c.phoneNumber === phoneNumber)
    if (!contact) return

    let contactPosition = contacts.findIndex(c => c.phoneNumber === phoneNumber)
    contacts.splice(contactPosition, 1)
}

function replace(oldNumber, newNumber) {
    let oldContact = contacts.find(c => c.phoneNumber === oldNumber)
    if (!oldContact) return
    
    let newContact = contacts.find(c => c.phoneNumber === newNumber)
    if (newContactcontact) return

    contacts.forEach(c => {
        if (c.phoneNumber === oldNumber) c.phoneNumber = newNumber})
}

function traverse(contacts) {
    contacts.forEach(c => console.log(c))
}