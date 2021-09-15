const recordType = "Vacancy";

class Record {
  constructor(id, type) {
    this.id = id;
    this.type = type;
  }

  getId() {
    return this.id;
  }

  getType() {
    return this.type;
  }
}

class Service {
  constructor(record) {
    this.record = record.id;
  }

  submitForApproval() {
    console.log(`Submitted for approval Vacancy: ${this.record}`);
  }
  approve() {
    console.log(`Approved Record: ${this.record}`);
  }

  reject() {
    console.log(`Rejected Record: ${this.record}`);
  }
}

const softwareEngineerVacancy = new Record("SoftwareEngineer0001", recordType);
const frontEndEngineerVacancy = new Record("FrontEndEngineer0020", recordType);

const approvedVacancy = (applicants) => {
  const service = new Service(applicants);
  service.submitForApproval();
  service.approve();
};

const rejectedVacancy = (applicants) => {
  const service = new Service(applicants);
  service.submitForApproval();
  service.reject();
};

approvedVacancy(softwareEngineerVacancy);
rejectedVacancy(frontEndEngineerVacancy);
