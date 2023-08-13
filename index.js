// function hello(name) {
//        // return function extra () {
//        // return "Hola mundo" //   }
//        return 'hola '+  name   }
// console.log(hello('rain'))
//*
// function add(x,y=0) {

    

//      return x -  y     
// }
// console.log(add(5)) *///*********/ */


// const user = {
//      name: 'Daniel',                ///properties
//      lastname: 'her',
//      age: '24',
//      address: {
//           country: 'colomgbia',
//           city: 'bogota',
//           street: 'main street 1',
//      },

//      friends: ['brandon', 'salazar',['daniel']],
     
//      active: true,
     

//      // send: function () {

//      //      return 'sending'
//      // }

//      send() {                          ///methods

//           return 'sending'
//      }
//      }

     


// const using= user
// console.log(user.address.city )
// console.log(user.friends)
// // console.log(user.friends[2])
// // console.log(user.send)
// console.log(user.send())

///shorthan property names

// const name = 'laptop'
// const price = 3000

// const newProduct = {
//      //i can declare then with :name or this instead
//      name,
//      price
// }

// console.log(newProduct)

///DOM MANIPULATION 
// DON O EL DOCUMENT OBJET MODEL

//inspect code console
// document    document.tile   document.body.h1

// const title = document.createElement('h1')
// // console.log(title)
// title.innerText = 'DOM'

// const  button = document.createElement('button')
// button.innerText = 'click'

// button.addEventListener('click', function () {
//     title.innerText = 'updating , please be patience ...' 
//     console.log('updating, heei')
//     alert('se realizo un click')
// })

// document.body.append(title)
// document.body.append(button)


//Destructuring

// const user = {
//      name: 'jose',
//      age: 35
// }

// function printInfo(user) {  /// {}
//     // const {name, age} = user;

//      return '<h1>Hola' + user['name'] + '</h1>' //alos user.name
//     // return '<h1>Hola' + name + '</h1>'
// }

// console.log(printInfo(user))

// document.body.innerHTML = printInfo(user)


///FUNCIONES ANONIMAS

// function start() {
//      return 'Starting...'
     
// }

// console.log(start())


// ////******* */

// console.log(function () {
//      return 'Starting...2'
     
// }())

// const showT = () => 'Hello';
// const showN  = () => 22;
// const showB  = () => true;
// const showA  = () => [1,2,3,1,4,5]
// ///to show objects 1 call the complete functoin, 2 use {} in line arrows


// const button = document.createElement('button')
// button.innerText = 'clicking now'

// button.addEventListener('click', () => {
//      const showText = () => 'Hello'
//      alert(showText())
     
// })

// document.body.append(button)

///ARROY FUNCTION

// function add(x, y) {
//      return x + y 
// }

// const addd = (x,y) =>  {
//      return x + y
// }


// ///INLINE ARROW FUNCTIONS

// const showText = () => 'Hello' /// to call objects, you must use  {}


// console.log(showText)


///RETURN
///string lines



// const background = 'blue'
// const color = 'white'
// const isAuthorized = true

// // const result = ` styles available ${background}${color}`
// // console.log(result)


// const button = document.createElement('button')
// button.innerText = 'clicking now'

// //operador ternario
// button.style =`background: ${isAuthorized ? 'black' : background }; color: ${color}`





// button.addEventListener('click', () => {

//      return alert('finished')

//      if (isAuthorized) {
//           alert('authorized')

//      }else {
//           alert('no authorized')
//      }

//      ///return acaba con la funcion donde sea que lo pongamos
     
// })

// document.body.append(button)


////ARREGLOS


// const names= ['ryan', 'joe', 'maria']

// for (let i = 0; i < names.length; i++) {
//      const element = names[i];
//      console.log(element)
     
// }

// names.forEach(function (name) {
//     console.log(name)
     
// }) 


///MAP ,  FIND ,   

// const saved = names.map(function (name) { ///does not change  names 
//      return 'hola ${name}'
      
//  }) 


//  const nameFound = names.find(function (name) {
//     if (name === 'joe' ) {
//        return name
//     }
      
//  }) 


//  const found = names.filter(function (name) {  //crear un  nuevo arreglo  con elementos que hallamos filtrado
//      if (name !== 'joe') {
          
//           return name
//      }
       
//   }) 

//  console.log(save)
// console.log(found)




// const names= ['ryan', 'joe', 'maria']
// const newNames = ['marcos', 'mario','luna']



///mix arrays
// console.log(names.concat(newNames))


///spread operators


// console.log([...names, ...newNames])


// const user= {
//      name: 'daniel',
//      lastname: 'herrera'

// }

// const address = {
//      street: 'main street 3242',
//      city: 'bogota'
// }


// const userInfo = {
//      ...user,
//      ...address
// }


/// he is saved in userInfo without afecting the others



///ecmascript modules

///control +  space

///NORMAL


// import {add, points} from './add.js'

// console.log(add(10, 30))
// console.log(points)




//POR DEFECTO


// import addModule from './add.js'

// console.log(addModule)



///OPTIONAL CHANNING


// const person = {
//      name: 'daniel',
//      address: {
//           city: 'pereira'
//      },
//      location: 'ddd'
// }

// console.log(person.address?.city)



//Async await


// const data = fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(function () {
//      console.log('data finilized')
     
//     })

// console.log('linea2 '+ data)

// const ul = document.createElement('ul')
// const li = document.createElement('li')

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(function (response) {
//           return  response.json()
          
//                    // return console.log(response)
          
//      }).then(function (data) {
//           console.log(data)
//           data.forEach(function (post){
//                const li = document.createElement('li')
//                li.innerText = post.title
//                ul.append(li)
               
//           })
//           document.body.append(ul);
//      })


     ////other way   
     ///await , it has to be within a function


// const ul = document.createElement('ul')
// const li = document.createElement('li')
     
// async function loadData() {

//           const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//           const data = await response.json()
//           console.log(data)
//           data.forEach(function (post){
//                const li = document.createElement('li')
//                li.innerText = post.title
//                ul.append(li)
               
//           })
//           document.body.append(ul);
// } 
               
      
     


// loadData()
// console.log()