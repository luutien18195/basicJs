var quotes ="Darkness cannot drive out darkness; "+
			"only light can do that. "+
			"Hate cannot drive out hate; "+
			"only love cando that.";
			console.log(quotes);
var firstPost = quotes.indexOf("only");
var lastPost = quotes.lastIndexOf("only");
console.log("firstPost = ",firstPost,", lastPost = ",lastPost);
var canPost =quotes.search(/ca..ot/);
console.log(canPost);
var contact = "phone 13165132 Tien ";
var phonepos = contact.search(/[0-9]/) ;
console.log(phonepos);
var ilove = "I love PHP. PHP file extension is php";
var ilovenode= ilove.replace(/PHP/ig, "Node.js");
console.log(ilovenode);

var str="Apple, Banna, Kiwi";
var res=str.slice(7,13);
console.log(res);
var fruits = str.split("- ");
console.log(fruits.valueOf());
var love = "LOVE";
for(var i=love.length-1;i>=0;i--)
	{
		console.log(love.charAt(i));
	}
String.prototype.reverse =function(){
	var result =  '';
	for(var i=this.length-1;i>=0;i--)
		{
			result+=this.charAt(i);
		}
		return result;
};
console.log("hello".reverse());