 /* Javascript Array And It's Methods */

// Array.prototype.copyWithin()

// The copyWithin() method of Array instances shallow copies part of this array to another location in the same array and returns this array without modifying its length.

// copyWithin(target, start)
// copyWithin(target, start, end)



{
    let array = ['a' , 'b' , 'c' , 'd' , 'e' , 'f' , 'g' , 'h']

     let array1 = array.copyWithin(1 , 3)

     console.log(array1);

     let array3 = array.copyWithin(1 , 0 ,5)

     console.log(array3);
}

// Array.prototype.entries()

// The entries() method of Array instances returns a new array iterator object that contains the key/value pairs for each index in the array.

// entries()


{
    let array = ['a' , 'b' , 'c' , 'd' , 'e' , 'f' , 'g' , 'h']

    let array1 = array.entries()

    console.log(array1.next().value);
    console.log(array1.next().value);
    console.log(array1.next().value);
    console.log(array1.next().value);
    console.log(array1.next().value);
    console.log(array1.next().value);
    console.log(array1.next().value);
    console.log(array1.next().value);


    


}



// Array.prototype.every()

// The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

// every(callbackFn)
// every(callbackFn, thisArg)


{
    let num =['10','20','30','40','50']

    let arr =num.every((item)=> item <=30)

    console.log(arr);
    

}


// Array.prototype.fill()

// The fill() method of Array instances changes all elements within a range of indices in an array to a static value. It returns the modified array.

// fill(value)
// fill(value, start)
// fill(value, start, end)



{
    let array = ['a' , 'b' , 'c' , 'd' , 'e' , 'f' , 'g' , 'h']

    let array1 = array.fill(1 , 3)

    console.log(array1);

    let array2 = array.fill('1' , 3 ,5)

    console.log(array2);
    

}