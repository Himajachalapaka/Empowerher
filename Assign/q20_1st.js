function createCounter(){
    let count = 0;
    function increment(){
        count++;
        console.log("Present count:", count)
    }
    function decrement(){
        count--;
        console.log("Present count:", count)
    }
    function current(){
        console.log("Present count:", count);
    }
    return{
        increment,
        decrement,
        current
    };
}
const counter = createCounter();

counter.increment();
counter.increment();
counter.decrement();
counter.current();