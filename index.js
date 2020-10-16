const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let val
      for (val in collection) {
        callback(collection[val])
      }
      return collection
    },

    map: function(collection, callback) {

      const newArr = []
      
      if (!(collection instanceof Array)) {
        collection = Object.values(collection)
      }

      for (let i = 0; i < collection.length; i++) {
        newArr.push(callback(collection[i]))
      }

      return newArr
    },

    reduce: function(collection, callback, acc) {
      let newArr = []
      newArr = collection
      if (!acc) {
        acc = newArr[0]
        newArr = newArr.slice(1)
      }

      for (let i = 0; i < newArr.length; i++) {
        acc = callback(acc, newArr[i], newArr)
      }
      return acc
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()

