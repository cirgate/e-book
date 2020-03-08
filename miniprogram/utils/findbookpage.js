module.exports = {
  findbookpage: findbookpage //host接口
}

const myarray = [
  {
    'title': 'sas',
    address: '2-9addr',
    name: '2-9name'
  },
  {
    'title': 'dddd',
    address: '1-10addr',
    name: 'ddddname'
  },
  {
    'title': 'dsdsddsd',
    address: '....',
    name: '....'
  }
];
function findbookpage(str) {
  let myreturn = {
    addr: "",
    name: ''
  }
  for (let index in myarray) {
    if (myarray[index].title === str) {
      myreturn.addr = myarray[index].address;
      myreturn.name = myarray[index].name;
      console.log(myreturn)
      return myreturn
    }
  }
  return myreturn
}