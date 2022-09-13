// //INHERITANCE//

// //Postal Worker and Chef

// class Person{
//     constructor(name, age, favColor, car){
//         this.name = name
//         this.age = age
//         this.favColor = favColor
//         this.car = car
//     }

    
// class PostalWorker extends Person {
//       constructor(name, age, favColor, car){
//         super(name, age, favColor)
//         this.name = name
//         this.age = age
//         this.favColor = favColor
//         this.car = car
//       }

//       PostalWorker.coffee = function () {
//         console.log('I need espresso!');
//       }
//     }
// }
    
//     class Chef extends Person {
//       constructor(name, age, favColor, car){
//         super(name, age, favColor)
//         this.name = name
//         this.age = age
//         this.favColor = favColor
//         this.car = car
//       }

//       Chef.drink = function () {
//         console.log('Tom Collins');
//       }
//     }


//     let post1 = new PostalWorker ('Christina', '57', 'green', 'Honda Civic')
//     console.log(post1.car);
//     let post2 = new PostalWorker ('Ron', '62', 'cyan', 'Toyota 4Runner')
//     console.log(post2.favColor);

//     let firstChef = new chef('Bobby', '31', 'teal')
//     console.log(firstChef.name);
//     let secondChef = new chef('Angela', '38', 'purple')
//     console.log(secondChef.age);

   // Bank Account

   class BankAccount {
    constructor(ownerName, balance, acctNum) {
      this.ownerName = ownerName
      this.balance = balance
      this.acctNum = acctNum
    }
    deposit(dep) {
      console.log(`Deposit of ${this.balance}.`)
      return this.balance += dep
    }

    withdraw(draw) {
      console.log(`Withdrawal of ${this.balance}.`)
      return this.balance -= draw
    }
  

  class CheckingAccount extends BankAccount {
    constructor(ownerName, balance, acctNum, overdraftEnabled) {
      super(ownerName, balance, acctNum)
      this.overdraftEnabled = overdraftEnabled;
    }

    withdrawChecking() {
      if(this.overdraftEnabled == true && balance -= draw < 0){ 
        console.log('Account is overdrafted.');
        balance = this.balance - draw
      } else {
        super.withdraw()
        }
      }
  }

  class SavingsAccount extends BankAccount {
    withdraw() {
        console.log('Withdrawal not permitted.');
    }
  }
  
  const malcAccount = new CheckingAccount('Malcolm', 1000, 9999)
  console.log(malcAccount.balance);
  malcAccount.deposit(250)
  console.log(malcAccount.balance);
  malcAccount.withdraw(400)
  console.log(malcAccount.balance);
   const malc = new CheckingAccount(true)
   console.log(malc.withdraw(300.00));
   console.log(malc.balance);