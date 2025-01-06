function Tea(type) {
    this.type = type;
    this.describe = () => {
        return `this is a cup of ${this.type} tea`;
    }
}
let lemonTea = new Tea("lemmon");
console.log(lemonTea);
console.log(lemonTea.describe());
 
/*
Output:
Tea { type: 'lemmon', describe: [Function (anonymous)] }
this is a cup of lemmon tea
*/
