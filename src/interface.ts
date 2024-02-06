interface BussinesssPartner {
    name: string;
    credit: number;
  }
  
  interface Contact {
    email: string;
    phone: string;
  }
  
  type Customer = BussinesssPartner & Contact;
  let customer: Customer = {
    name: "Gulnar",
    credit: 1000,
    email: "",
    phone: "",
  };
  
  interface ICar {
    model: string;
    year: number;
    color: string;
    readonly chassisNumber: string;
  }  