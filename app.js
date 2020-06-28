// chapter 1
    // task one
    alert("Hello User");
    // task two
    alert("Error! Please enter a valid password");
    // task three
    alert("Welcome to JS land...\nHappy Coding!");
    // task four
    alert("Welcome to JS land...");
    alert("Happy Coding!");

// chapter 2
    // task one
    var username;
    // task two
    var myname= 'Muneeb Mansoor';
    // task three
    var message= 'Hello World';
    alert(message);
    //task four
    var name = 'Muneeb';
    var myAge = '22';
    var course  = 'Certified Mobile Application Development';
    alert(name);
    alert(myAge);
    alert(course);
    // task five
    var dish = 'PIZZA'
    alert(dish + '\n' + dish.slice(0,4) + '\n' + dish.slice(0,3) + '\n' + dish.slice(0,2) + '\n' + dish.slice(0,1));
    // task six
    var email = 'muneebmansoor98@gmail.com';
    alert('my email address is '+email);
    // task seven
    var book = 'A smarter \n way to learn JavaScript';
    alert('i am trying to learn from the Book '+book);
    // task eight
    document.write('Yah! i can write HTML content through JavaScript <br>');
    //task nine
    alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");
// chapter 3
    // task one
    var age = '22';
    alert('i am '+age+' years old');
    // task two
    var visit = '14';
    alert('You have visited this site '+visit+' times');
    // task three
    var  birthYear = 1997;
    document.write('My birthday year is '+birthYear + '<br>');
    document.write('Datatype of my decleared valiable is '+ typeof birthYear + '<br>');
    // task four
    var visiterName = prompt('Enter Your Name: ');
    var productTitle = prompt('Enter Product Title: ');
    var productQuantity = prompt('Enter Quantity of products: ');
    document.write('<b>' + visiterName +'</b> ordered <b>'+ productQuantity + ' ' + productTitle + '</b>(s) on XYZ Clothing store<br>');
    // chapter 4
        // task one
        var oneVeriable; var twoVeriable; var threeVeriable;
        // task 2
            // legal
            var test;
            var test1;
            var test_09;
            var $test;
            var _test;
            // illegal
            // var 1test;
            // var @test1;
            // var /test_09;
            // var ,$test;
            // var <testTest;
        // task 3
    document.write('<h3>Rules for naming JS variables</h3><br>');
    document.write('Variable names can only contain , numbers $ and_. $my_1stVariable<br>');
    document.write('Variables must begin with a letter, $ or _. For example $name, _name or name<br>');
    document.write('Variable names are case sensitive<br>');
    document.write('Variable names should not be JS keyword<br>');
    // chapter 5
        // task one
        var firstNum = prompt('Enter First Number');
        var secondNum = prompt('Enter Second Number');
        var sum = Number(firstNum) + Number(secondNum);
        document.write('sum of '+ firstNum + ' and ' + secondNum + ' is ' + sum + '<br>');
        // task two
            // subtract
            // firstNum = prompt('Enter First Number');
            // secondNum = prompt('Enter Second Number');
            var subtract = Number(firstNum) - Number(secondNum);
            document.write('subtraction of '+ firstNum + ' and ' + secondNum + ' is ' + subtract + '<br>');
            // multiplication
            // firstNum = prompt('Enter First Number');
            // secondNum = prompt('Enter Second Number');
            var multiplication = Number(firstNum) * Number(secondNum);
            document.write('multiplication of '+ firstNum + ' and ' + secondNum + ' is ' + multiplication + '<br>');
            // division
            // firstNum = prompt('Enter First Number');
            // secondNum = prompt('Enter Second Number');
            var division = Number(firstNum) / Number(secondNum);
            document.write('division of '+ firstNum + ' and ' + secondNum + ' is ' + division + '<br>');
        //task three
        var num;
        document.write('Value after variable declaration is: '+ num + '<br>');
        num = 5;
        document.write('Initial value: ' + num + '<br>');
        num++;
        document.write('Value after increment is: ' + num + '<br>');
        num = num +  7;
        document.write('Value after addition is: ' + num + '<br>');
        num -- ;
        document.write('Value after decrement is: ' + num + '<br>');
        num = num % 3;
        document.write('The remainder is: ' + num + '<br>');
        // task four
        var  movieTicket = 600;
        document.write('The cost of buying 5 tickets to a movie: ' + movieTicket *5 + 'PKR<br>');
        // task five
        var table = 9;
        document.write('Table of '+ table +'<br>');
        for(var i=1;i<=10;i++){
            document.write(table + ' * ' + i + ' = ' + table*i + '<br>');
        }
        //  task six
        var calTem = 25;
        var ferFormula =  (calTem * (9/5)) + 32;
        document.write(calTem + '*C is' + ferFormula+ ' *F<br>');
        var ferTem = 70;
        var calFormula =  (ferTem - 32) * (5/9);
        document.write(calTem + '*F is ' + calFormula+ ' *C<br>');
        // task seven
        var price1 = prompt('Price of item 1');
        var price2 = prompt('Price of item 2');
        var quan1 = prompt('Ordered quantity of item 1');
        var quan2 = prompt('Ordered quantity of item 2');
        var shippingChanges = prompt('Shipping changes');
        var total = Number(price1) + Number(price2) + Number(quan1) + Number(quan2) + Number(shippingChanges);
        document.write('<h2>Shopping Cart</h2><br><br><br>');
        document.write('Price of item 1' + price1 + '<br>');
        document.write('Price of item 2' + price2 + '<br>');
        document.write('Ordered quantity item 1' + quan1 + '<br>');
        document.write('Ordered quantity item 2' + quan2 + '<br><br>');
        document.write('Total cost of your order is ' + total + '<br>');
        // task eight
        var obtainMarks = prompt('Enter obtain marks of student');
        var totalMarks = prompt('Enter total marks of student');
        var precentage = (Number(obtainMarks)/Number(totalMarks))*100;
        document.write('Total marks ' + totalMarks + '<br>');
        document.write('Obtain marks ' + obtainMarks + '<br>');
        document.write('Percentage ' + precentage + '<br>');

        
        
