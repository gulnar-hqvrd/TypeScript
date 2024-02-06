// type User = {
//   name: string;
//   surname: string;
//   email: string;
//   phone: string;
// };

// const user: User = {
//   name: "Gulnar",
//   surname: "Hagverdiyeva",
//   email  : "gulnarhagverdiyevaa@gmail.com",
//   phone : "123456789"
// };

//Union

type Id = string | number;
type IdNumber = number | string;

class Personal {
  id: Id;
  idNo: IdNumber;
  constructor(id: Id, idNo: IdNumber) {
    this.id = id;
    this.idNo = idNo;
  }
}

type user = { userId: number; name: string };
type Admin = { adminId: number; name: string };
type Project = { projectname: string; projectNo: number; starttime: Date };

type UserProject = user & Project;
type AdminProject = Admin & Project;

const gulnar: UserProject = {
  userId: 1,
  name: "Gulnar",
  projectname: "Project 1",
  projectNo: 1,
  starttime: new Date(),
};


interface BussinesssPartner {
    name : string;
    credit : number;
}

interface Contact{
    email: string;
    phone : string;
}

type Customer = BussinesssPartner & Contact;
let customer : Customer = {
    name : "Gulnar",
    credit : 1000,
    email : "",
    phone : "",

}