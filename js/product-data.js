class Product {
  constructor(name, icon, description) {
    this.name = name;
    this.icon = icon;
    this.description = description;
  }
}

// Collection of language data (Name, Icon, Description)
products = [
  new Product("C#", "icons/C Sharp.png", "C# is a high-level compiled programming language that provides easy to understand syntax. It is very versatile in a number of scenarios. And while it can be compiled without an IDE, Microsoft provides a product called Visual Studio that helps with development. Visual Studio provides a lot of benefits that can make developing more straightforward. Additionally, with the use of Microsoft's lighter Visual Studio Code, a more simple workflow can be established. <br/><br/>C# is often used to create software programs that can be locally installed. When pairing the programming language with Microsoft's IDE, it can be used to design Windows Forms. Windows Forms are essentially application windows that make up the GUI of the desktop. However, one downside to this implementation is compatibility. Windows Forms are only officially supported by Windows, so Operating Systems like MacOS or Linux will not be able to run these. And with the heavy reliance on the dot net framework, most C# applications will not be available on other platforms. <br/><br/>Personally, I find C# to be a very nice language since it takes a lot of the complexity of C++ and makes it more simple. In use, C# appears to be a combination of the simplicity inherent in Python and the versatility inherent in C++. However, as previously mentioned, this versatility halts at the compatibility front. Overall, C# is a great language for software development."),
  new Product("C++", "icons/C++.png", "C++ is a compiled programming language that is the successor to C. The primary advantage to using C++, is that it takes a lot of the implementations presented in C and streamlines them. For instance, one advantage of C++ is the addition of objects. Objects allow repetitive and unorganized code to be better managed. This allows for the development cycle to be more team-friendly.<br/><br/>In comparison to most programming languages, C++ has some very unique implementations. One that stands out is the use of \"\<\<\" and \"\>\>\" to represent intake and outtake of data. Functionally, these are often used when writing to the console or taking input from the user. However, they appear in many more areas as well. Programmers coming from other languages will have to relearn some of the quirks inherent to C++.<br/><br/>While C++ acts as the successor to C, it also is the precursor to C#. And fitting to this evolution, C++ acts as a happy medium. It holds the complexity and low-level functions of C but inherits the simplicity and versatility of C#. Additionally, C++ holds some of the same hiccups that C# does. Therefore, it does not have great compatibility for non-Windows platforms.<br/><br/>Stepping into C++ from C# was somewhat jarring, considering the core differences. But ultimately, the languages share a lot of similarities. Generally, it is regarded as a very good language for software development. Conversely, it enlists implementations that make the knowledge gained from the language less transferable."),
  new Product("CSS", "icons/Cascading Style Sheets.png", "Cascading Style Sheets, or more commonly known as CSS, is a styling language that is generally used to help other languages provide styling. It is most commonly linked with the HTML and JavaScript suite, but can also be used outside of this. Granted, its incorporation outside of the suite is limited, but it does exist.<br/><br/>CSS makes use of selectors and properties to manage visual representation. In simple English, this means that an element is selected and changed accordingly. For example, with HTML, selectors can consist of IDs, classes, and tags. Once a selector is defined, each element represented on the page will be altered. Therefore, changes can be made widespread.<br/><br/>As a styling language, I like that CSS provides a great sense of simplicity. In practice, it allows code to be more organized on a larger project like a business website. It also allows changes to be enacted quickly and efficiently."),
  new Product("HTML", "icons/Hypertext Markup Language.png", "Hypertext Markup Language, or more commonly known as HTML, is a markup language that can quickly compile a user interface with the use of tags. Tags represent visual elements on a page and are defined by providing an opening tag and a closing tag. Anything between these two tags is content to be displayed. Additionally, tags can use attributes to more delicately fine tune information. For example, HTML has a CSS attribute that allows styling to be accomplished in the opening tag.<br/><br/>HTML content is structured as a hierarchy. Therefore, the page starts with a single element. Then the element can enlist children to expand content. Each child can then have their own children, which provides a simple yet effective method to organize content.<br/><br/>This language is mostly used for website creation. It acts as the base, providing a simple layout. Websites only become more detailed as JavaScript and CSS are thrown into the mix. On its own HTML is very basic. But combined into this suite of langauges, HTML provides a large amount of possibility.<br/><br/>The latest version of HTML, HTML 5, has provided a lot more possibility for developers. It has improved a lot of drawbacks while still accounting for backwards compatibility. For example, Adobe Flash has essentially been replaced by HTML since it provides a generally quicker and better system for content. Overall, it is a very simple yet great markup language that provides a large amount of web-based possibilities."),
  new Product("JavaScript", "icons/JavaScript.png", "JavaScript is an Object-Oriented programming language that has been optimized for the web. It is most often paired with HTML and CSS to provide dynamic content on a webpage. In implementation, it takes a lot of similar concepts from other languages to build a familiar yet readable syntax. It takes a lot of the simplicity from Python and introduces the readability of Java or C#. <br/><br/>Like python, JavaScript is an interpreted language. This allows startup to be instant and simple for developers. However, the major drawback of interpreted languages is that they are generally slower than compiled languages on runtime. Thankfully, most web content is not very intensive, so this drawback rarely causes issues."),
  new Product("Python", "icons/Python.png", "Python is an interpreted language that boasts simplicity. Many headaches presented by other languages are automatically handled by python. There are many cases where the language will replace method implementations with word-based implementations. For example, some languages may use \"String.Contains(substring)\" to detect a substring in a string. However, Python uses the syntax \"substring in String\" to make checks become a little bit quicker and more readable.<br/><br/>Most languages use a bracket system where code block are contained in a set of brackets. Ultimately, this allows scripts to contain no special indentations or spacing to work correctly. On the other hand, Python uses an indentation based system. So when defining a code block, a colon will be placed after the heading and all applicable commands within the block are indented. This can make code quicker to format, but can also create drawbacks. Without brackets, organization becomes less obvious. So, if a line is incorrectly indented, it may be difficult to catch which block it belongs to. Overall, this can cause unexpected errors, or even incorrect interpretation.<br/><br/>After using Python for a while, I really enjoyed how straightforward everything is. It primarily is drawn back by interpretation and organization. While, JavaScript does not require a very quick system since it is used primarily for dynamic web content, Python can be implemented in many more scenarios. One example I found was Python windows. Python provides libraries that will handle GUI based applications. And while these were generally simpler to write that dot net based applications, they also performed noticeably worse. Ultimately, Python is a very popular and readable language that is great for many projects with a few drawbacks."),
];

// Apply data to product page before following link
$('#collection a').click(function(event) {
  var href = this.href;
  event.preventDefault();

  currentProduct = new Product("1", "2", "3");

  // Reference selected product
  products.forEach(product => {
    if (product.name == this.innerText) {
      currentProduct = product; 
    } 
  }); 

  // Apply product data to product page
  document.getElementById("icon").src = currentProduct.icon;
  document.getElementById("description").innerHTML = currentProduct.description;

  // Enter product page
  window.location = href;
});

// Return to Colleciton page when refreshing on product page (This is done to prevent empty information from being displayed)
$(window).on("load", function(event) {
  if (String(window.location).includes("#product") && document.getElementById("description").innerHTML == "") {
    window.location = "#collection"
  }
});

