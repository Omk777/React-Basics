let contacts=[
    {id:'1',name:"Omkar Khot"},
    {id:'2',name:"Sam"}
]

export async function getContacts(){
    console.log(contacts);
    
    return contacts;
}

export async function getContact(id){
    return contacts.find((c)=> c.id===id)
}

export async function createCon({request}) {
    const formData=await request.formData();
    const name=formData.get('name');
    const newContact ={id:Date.now().toString(),name}
    contacts.push(newContact)
    return newContact
    
}

export async function updateContact(id,formData){
    const contact=contacts.find((c)=>c.id===id);
    if(contact)contact.name=formData.get('name')
        return contact;
}

export async function deleteContact(id) {
    contacts=contacts.filter((c)=>c.id!==id)
    return true
    
}