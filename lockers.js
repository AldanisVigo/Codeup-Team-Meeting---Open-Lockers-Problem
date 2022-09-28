const numLockers = 100
const numStudents = numLockers
let lockers = Array(numLockers).fill(false)
let currentLockers = []
let currentStudent = 0
const iterateThroughLockers = (lockers) => {
  let openedLockers = []
  lockers.forEach(function(lock, ind) {
    lock && openedLockers.push(ind + 1)
  })
  return openedLockers.join(", ")
}
while (currentStudent < numStudents) {
    currentStudent++
    if(currentStudent == 1){
        lockers.fill(true)
    }else if(currentStudent == 2){
        lockers = lockers.map((isOpen, i)=>{
            return (i+1) % 2 === 0 ? false : isOpen
        })
    }else{    
        lockers = lockers.map(function(isOpen, i) {
            return (i+1) % this.student === 0 ? !isOpen : isOpen;
        }, {
            student: currentStudent
        })
    }
    currentLockers.push(lockers)
} 
console.log("Open lockers: " + iterateThroughLockers(lockers))