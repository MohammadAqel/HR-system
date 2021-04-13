'use strict';
let cvTableEl=document.getElementById('cvTable');
let tableHeader=['Name', 'Email', 'Department','Salary']
let allCv=[];
let total=0;

function makeTableHeader(){
    let trEl=document.createElement('tr');
    for(let i=0;i<tableHeader.length;i++){
        let thEl=document.createElement('th');
        thEl.textContent=tableHeader[i];
        trEl.appendChild(thEl);
    }
    cvTableEl.appendChild(trEl);
}

function randNum(){
    return Math.floor((Math.random()*(500-100))+100);
}

function Cv(name,email,department,salary){
    this.name=name;
    this.email=email;
    this.department=department;
    this.salary=salary;
    allCv.push(this);
    this.renderNewRow();

}

Cv.prototype.renderNewRow=function(){
let trEl=document.createElement('tr');
let nameTdEl=document.createElement('td');
let emailTdEl=document.createElement('td');
let departmentTdEl=document.createElement('td');
let randNumEl=document.createElement('td');

nameTdEl.textContent=this.name;
emailTdEl.textContent=this.email;
departmentTdEl.textContent=this.department;
randNumEl.textContent=this.salary;
trEl.appendChild(nameTdEl);
trEl.appendChild(emailTdEl);
trEl.appendChild(departmentTdEl);
trEl.appendChild(randNumEl);
cvTableEl.appendChild(trEl);

}

let addForm=document.getElementById('addEmp');
addForm.addEventListener('submit',handClick)

function handClick(event){
// event.preventDefault();
let cvName=event.target.cvName.value;
let cvEmail=event.target.cvEmail.value;
let cvDepartment=event.target.cvDepartment.value;
let cvSalary=randNum();
let newCv=new Cv(cvName,cvEmail,cvDepartment,cvSalary);
total+=cvSalary;

let totalCv=document.getElementById('total');
totalCv.textContent=`Total ${total}`;
localStorage.setItem('cv',JSON.stringify(allCv));

addForm.reset();
}
makeTableHeader();

let x=JSON.parse(localStorage.getItem('cv'));
if(x){
    for(let i=0;i<x.length;i++){
        new Cv(x[i].name,x[i].email,x[i].department,x[i].salary);
        total+=x[i].salary;
        let totalCv=document.getElementById('total');
        totalCv.textContent=`Total ${total}`;
    }
}